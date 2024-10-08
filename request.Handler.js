import userSchema from "./models/user.model.js"

export async function addUsers(req,res){
console.log(req.body);
const{name,phone,email,Address1,Address2,pin,password,cpassword}=req.body
console.log(name,phone,email,Address1,Address2,pin,password,cpassword);


}