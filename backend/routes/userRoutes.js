const express = require("express");
const { createUser, getUser, getUsers } = require("../controllers/userController.js");

const router = express.Router();

router.route('/').post(createUser);
router.route('/:id').get(getUser);
router.route('/').get(getUsers);

module.exports = router;