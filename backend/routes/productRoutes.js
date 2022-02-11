const express = require("express");
const router = express.Router();
const {
    getProducts,
    getProductById,
  } = require("../controller/productControllers");
  

//get all products from db
//@route get/api/products
//@access public 
router.get("/",getProducts);
//get a products by id from db
//@route get/api/products
//@access public
router.get("/:id",getProductById);

module.exports = router;
