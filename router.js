import { Router } from "express";
import * as rh from "./request.Handler.js"


const router=Router()
router.route("/adduser").post(rh.addUsers)
router.route("/getuser").get(rh.getUser)
router.route("/getusers/:_id").get(rh.getUsers)
router.route("/updateuser/:_id").put(rh.updateUser)
router.route("/deleteuser/:_id").delete(rh.deleteUser)



export default router 