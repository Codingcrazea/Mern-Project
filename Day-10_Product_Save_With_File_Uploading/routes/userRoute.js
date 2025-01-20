import express from "express";
var route = express.Router();
/*
import {saveUser} from '../controller/userController.js'
import { deleteUser } from "../controller/userController.js";
import { updateUser } from "../controller/userController.js";io
import { loginUser } from "../controller/userController.js";
import { fetchAllUserList } from "../controller/userController.js";


route.post("/saveUser",saveUser);
route.post("/loginUser",loginUser);
route.patch("/updateUser",updateUser);
route.post("/viewAllUserList",fetchAllUserList);
route.delete("/deleteUser",deleteUser)
*/
import * as userController from '../controller/userController.js'

route.post("/saveUser",userController.saveUser);
route.post("/loginUser",userController.loginUser);
route.patch("/updateUser",userController.updateUser);
route.get("/viewAllUserList",userController.fetchAllUserList);
route.delete("/deleteUser",userController.deleteUser);

export default route;