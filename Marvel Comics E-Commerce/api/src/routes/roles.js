const express = require('express');
const {getRoles} = require('../controllers/roles');
const router = express.Router();
router.get("/", getRoles);


module.exports = router;