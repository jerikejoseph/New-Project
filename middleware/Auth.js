import pkg from 'jsonwebtoken'

import userSchema from "../models/user.model.js"

const {verify}=pkg


export default async function Auth(req,res,next) {
    try {
        console.log("middleware");
    const key=req.headers.authorization;
    if (!key)
        return res.status(403).send({msg:"unauthorized access"})
    const token=key.split(" ")[1]

    console.log(token);
    const auth=await verify(token,process.env.JWT_KEY);
    console.log(auth);
    const user=await userSchema.findOne({_id:auth.userId})
    console.log(user);
    req.user=user.username;
    next();
    } catch (error) {
        return res.status(403).send({msg:"session expired please login"})
    }
    
}




