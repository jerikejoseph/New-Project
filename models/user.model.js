import mongoose from "mongoose";


const userSchema=new mongoose.Schema({
    name:{type:String},
    phone:{type:Number},
    email:{type:String},
    Address1:{type:String},
    Address2:{type:String},
    pin:{type:String},
    password:{type:String},
    cpassword:{type:String}
    
    
  

})

export default mongoose.model.users||mongoose.model("user",userSchema)