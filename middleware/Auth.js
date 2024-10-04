import pkg from 'jsonwebtoken'



const {verify}=pkg
export default async function Auth(req,res,next) {
    console.log("middleware");
    const key=req.header.authorization;
    if (!key) 
        return res.status(403).send({msg:"unauthorized access"})
   
    console.log(key);
    
    
}




