const express = require("express");
const addressController = require('../controllers/AddressControllers')
const authMiddleware = require("../middleware/authMiddleware")
const router = express.Router();
router.post("/create-address" ,authMiddleware , addressController.createAddress);
router.put("/update-address/:id" ,authMiddleware , addressController.updateAdderss);
router.delete("/delete-address/:id" ,authMiddleware , addressController.deleteAddress);
module.exports = router;
