const express = require('express');
const {getUsers, getUserByEmail, updateUser} = require('../controllers/users');
const {verifyToken, isAdmin} = require('../middlewares/auth.jwt')

const router = express.Router();

router.get("/",[verifyToken,isAdmin], getUsers);
router.get("/:email", getUserByEmail);
router.put('/:email', updateUser);

module.exports = router;