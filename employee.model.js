import mongoose from "mongoose";


const EmpSchema=new mongoose.Schema({
    empid:{type:String},
    name:{type:String},
    salary:{type:Number},
    experience:{type:String},
    designation:{type:String},
    phone:{type:String},
    email:{type:String},
    profile:{type:String}
    
    
  

})

export default mongoose.model.Employees||mongoose.model("Employee",EmpSchema)