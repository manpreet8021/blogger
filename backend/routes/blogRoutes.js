const express = require('express');
const {getBlog} = require('../controllers/blogController.js')
const router = express.Router()

router.route("/:id").get(getBlog)