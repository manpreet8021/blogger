const express = require("express");
const { createUser, getUser } = require("../controllers/userController.js");

const router = express.Router();

router.route('/getUserInfo').post(getUser);

module.exports = router;