var express = require('express');
const router = express.Router();
const users = require("./users");
const auth = require('./auth');
const roles = require('./roles');
const comics = require('./comics');
const reviews = require('./reviews');
const orders = require('./orders');

module.exports = router;

router.use(express.json());
router.use('/users', users);
router.use("/auth", auth);
router.use("/roles", roles);
router.use("/comics", comics);
router.use("/reviews", reviews);
router.use("/orders", orders);
