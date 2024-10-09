import userSchema from "./models/user.model.js"

export async function addUsers(req,res){


try {
    console.log(req.body);
const{name,phone,email,Address1,Address2,pin,password,cpassword}=req.body
console.log(name,phone,email,Address1,Address2,pin,password,cpassword);


//validation

if(!(name&&phone&&email&&Address1&&Address2&&pin&&password&&cpassword)){
   return res.status(404).status({msg:"Fields are empty"})
     
}

let checkph=await userSchema.findOne({phone})
  console.log(checkph)


} catch (error) {
    return res.status(404).status({msg:error})
    
}

   

}