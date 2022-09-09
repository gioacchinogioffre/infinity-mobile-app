const express = require('express');
const router = express.Router();
const {postOrder, getOrders} = require("../controllers/orders"); 

router.post("/", postOrder);
router.get("/", getOrders);

module.exports = router;