const express = require('express');
const router = express.Router();
const {postOrder, getOrders,updateOrder} = require("../controllers/orders"); 

router.post("/", postOrder);
router.get("/", getOrders);
router.put("/:id", getOrders);

module.exports = router;