const express = require('express');
const router = express.Router();
const {getComicByID, getComics, postComics, updateComic} = require("../controllers/comics"); 

router.post("/", postComics);
router.get("/", getComics);
router.get("/:id", getComicByID);
router.put("/:id", updateComic);

module.exports = router;
