import EmpSchema from "./employee.model.js"
export async function getEmp(req,res){
  

    try {
        // console.log(req.body);
        const{empid,name,age,salary,experience,designation,phone,email,profile}=req.body        
        

         Validation
         if(!(empid&&name&&age&&salary&&experience&&designation&&phone&&email&&profile))
             return res.status(404).send({msg:"Fields Are Empty"})
                
            EmpSchema.create({empid,name,age,salary,experience,designation,phone,email,profile}).then((data)=>{
                return res.status(201).send({msg:data})            
            }).catch((error)=>{
              return  res.status(404).send({msg:error})            
    
            })

        
    } catch (error) {
      return  res.status(404).send({msg:error})                    

        }
}
//export async function getDonors(req,res){
//  try {
//      const donors=await EmpSchema.find();
//      console.log(donors);
//      res.status(200).send(donors)
//      
//  } catch (error) {
//      res.status(404).send({msg:error})
//      
//  }
//
//}