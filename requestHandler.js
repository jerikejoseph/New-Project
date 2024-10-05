import { error } from "console";
import donorSchema from "./models/donor.model.js"
import userSchema from "./models/user.model.js"
import bcrypt from "bcrypt"
import pkg from "jsonwebtoken"



const { sign } = pkg
export async function addDonors(req,res){
  
    try {
        // console.log(req.body);
        const{name,age,dob,phone,place,Bgroup}=req.body        
        console.log(name,age,dob,phone,place,Bgroup);

        // Validation
        if(!(name&&age&&dob&&phone&&place&&Bgroup)){
            return res.status(404).send({msg:"Fields Are Empty"})
        }
        // if Phone number already exist

        let checkPhn=await donorSchema.findOne({phone})
        // console.log(checkPhn);
        
        if(!checkPhn){
            donorSchema.create({name,age,dob,phone,place,Bgroup}).then((data)=>{
                res.status(201).send({msg:data})            
            }).catch((error)=>{
                res.status(404).send({msg:error})            
    
            })

        }
        else{
            res.status(404).send({msg:"Phone Number Already Exist"})    

        }  
        
    } catch (error) {
        res.status(404).send({msg:error})            

        
        
    }


    
}

export async function getDonors(req,res){
    console.log(req.user);
    try {
        const donors=await donorSchema.find();
        console.log(donors);
        res.status(200).send({donors,user:req.user})
        
    } catch (error) {
        res.status(404).send({msg:error})
        
    }

}

// get donor

export async function getDonor(req,res){
    try {
        console.log(req.params);
        const _id=req.params;
        const data=await donorSchema.findOne({_id})
        res.status(200).send(data);
        
    } catch (error) {
        res.status(404).send(error);
        
    }
}

// Update data

export async function updateDonor(req,res) {
    try {
        // console.log(req.params);
        // console.log(req.body);
        const _id=req.params;
        const {name,age,dob,phone,place,Bgroup}=req.body
        if(!(name&&age&&dob&&phone&&place&&Bgroup)){
            return res.status(404).send({msg:"Fields Are Empty"})
        }
        
        donorSchema.updateOne({_id},{$set:{name,age,dob,phone,place,Bgroup}}).then(()=>{  
            console.log(req.body);
                      
            res.status(201).send({msg:"Successfully Updated"})

        }).catch((error)=>{
            res.status(404).send(error)
        })
        
        
        
        
    } catch (error) {
        console.log(error);
        

        
    }
    
}

// delete data

export async function deleteDonor(req,res) {
    try {
        const _id=req.params
        console.log(_id);
        donorSchema.deleteOne({_id}).then(()=>{
            res.status(200).send({msg:"Deleted"})
        }).catch((error)=>{
            console.log(error);
            
        })
        
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}













let profile;
async function getProfile() {
    console.log(document.getElementById("file").files[0]);
//    profile=await convertBase(document.getElementById("file").files[0])
//    console.log(profile);
//    document.getElementById("img").src=profile;
}
//function convertBase(file) {
//    return new Promise((resolve,reject)=>{
//       const filereader=new FileReader();
//       filereader.readAsDataURL(file);
//       filereader.onload=()=>{
//        resolve(filereader.result)
//       }
//       filereader.onerror=(error)=>{
//        reject(error);
//       }
//    })
//}



//signup
export async function signUp(req,res) {
    const {username,Email,Password,Cpassword}=req.body
    //console.log(req.body);
    if(!(username&&Email&&Password&&Cpassword))
        return res.status(404).send({msg:"Fields are empty"});
    const user=await userSchema.findOne({Email});

    if(user)
        return res.status(404).send({msg:"Email already exist"});

    if(Password!==Cpassword)
        return res.status(404).send({msg:"Password dosen't match"})
    bcrypt.hash(Password,10).then(async(hashedPassword)=>{
        console.log(hashedPassword);
        await userSchema.create({username,Email,Password:hashedPassword}).then(()=>{
            res.status(201).send({msg:"Successfully Registered"})
        }).catch((error)=>{
            res.status(404).send({msg:"Registration Failed"})
        })
    }).catch((error)=>{
        return res.status(404).send({msg:error})
    })
}



//loginin User
export async function  logIn(req,res) {
    try {
        const{Email,Password}=req.body
        if(!(Email&&Password))
            return res.status(404).send({msg:"Field are empty"})
        const user=await userSchema.findOne({Email})
        if(!user)
            return res.status(404).send({msg:"Email already exist"})
        const succes=await bcrypt.compare(Password,user.Password)
       // console.log(succes);
        if(succes!=true)
            return res.status(404).send({msg:"invalid Password"})
     const token=await sign({userId:user._id},process.env.JWT_KEY,{expiresIn:"24h"})
      console.log(token);
      res.status(200).send({msg:"Successfully loged in",token})
    } catch (error) {
        console.log(error);
        
    }
    
}
