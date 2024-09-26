import { Router } from "express";
import * as rh  from "./requestHandler.js"

const router=Router()
router.route("/addEmployee").post(rh.addEmp);
router.route("/getEmployee").get(rh.getEmp);


export default router;