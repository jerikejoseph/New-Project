import userSchema from "./models/user.model.js"

export async function addUsers(req,res){


  try {
    // console.log(req.body);
    const{name,phone,email,Address1,Address2,pin,password,cpassword}=req.body        
    

    // Validation
     if(!(name&&phone&&email&&Address1&&Address2&&pin&&password&&cpassword))
         return res.status(404).send({msg:"Fields Are Empty"})
            
        userSchema.create({name,phone,email,Address1,Address2,pin,password,cpassword}).then((data)=>{
            return res.status(201).send({msg:data})            
        }).catch((error)=>{
          return  res.status(404).send({msg:error})            

        })

    
} catch (error) {
  return  res.status(404).send({msg:error})                    

    }

}


export async function getUser(req,res){
  try {
      const users=await userSchema.find();
      console.log(users);
      res.status(200).send({users})
      
  } catch (error) {
      res.status(404).send({msg:error})
      
  }

}

// get users

export async function getUsers(req,res){
  try {
      console.log(req.params);
      const _id=req.params;
      const data=await userSchema.findOne({_id})
      res.status(200).send(data);
      
  } catch (error) {
      res.status(404).send(error);
      
  }
}



// Update data

//export async function updateUser(req,res) {
//  try {
//      // console.log(req.params);
//      // console.log(req.body);
//      const _id=req.params;
//      const {name,phone,email,Address1,Address2,pin,password,cpassword}=req.body
//      if(!(name&&phone&&email&&Address1&&Address2&&pin&&password&&cpassword)){
//          return res.status(404).send({msg:"Fields Are Empty"})
//      }
//      
//      userSchema.updateOne({_id},{$set:{name,phone,email,Address1,Address2,pin,password,cpassword}}).then(()=>{  
//          console.log(req.body);
//                    
//          res.status(201).send({msg:"Successfully Updated"})
//
//      }).catch((error)=>{
//          res.status(404).send(error)
//      })
//      
//      
//      
//      
//  } catch (error) {
//      console.log(error);
//      
//
//      
//  }
//  
//}
