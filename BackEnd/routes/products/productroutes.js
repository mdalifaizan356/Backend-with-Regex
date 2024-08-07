// const express = require("express"); 
// const getproductcontroller = require("../../controllers/productcontroller/getproductcontroller");
// const router = express.Router();
// router.get("/", getproductcontroller);

// module.exports = router;


const express = require("express");
const productcontroller = require("../../controllers/productcontroller/getproductcontroller");

const router = express.Router();

// Route to get all products
router.get("/", productcontroller);


module.exports = router;