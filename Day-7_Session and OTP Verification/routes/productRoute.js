import express from "express";
var route = express.Router();

import * as productController from '../controller/productController.js'

route.post("/saveProduct",productController.saveProduct);
route.patch("/updateProduct",productController.updateProduct);
route.get("/viewAllProductList",productController.viewAllProductList);
route.delete("/deleteProduct",productController.deleteProduct);
export default route;