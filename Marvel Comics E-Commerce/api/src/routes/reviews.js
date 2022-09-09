const express = require('express');
const router = express.Router();
const {getReviews,getReviewByID, postReview} = require("../controllers/reviews"); 

router.post("/", postReview);
router.get("/", getReviews);
router.get("/:id", getReviewByID);

module.exports = router;
