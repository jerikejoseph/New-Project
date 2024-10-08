import { Router } from "express";
import * as rh from "./request.Handler.js"


const router=Router()
router.route("/adduser").post(rh.addUsers)
export default router 