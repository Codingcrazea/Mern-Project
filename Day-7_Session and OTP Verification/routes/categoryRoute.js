import express from "express";
var route = express.Router();

import * as categoryController from '../controller/categoryController.js'

route.post("/saveCategory",categoryController.saveCategory);
route.patch("/updateCategory",categoryController.updateCategory);
route.get("/viewAllCategoryList",categoryController.viewAllCategoryList);
route.delete("/deleteCategory",categoryController.deleteCategory);

export default route;