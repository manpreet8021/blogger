const express = require('express');
const {getBlog, addBlog, updateBlog, getAllBlog} = require('../controllers/blogController.js')
const router = express.Router()

router.route("/").get(getAllBlog)
router.route("/:id").get(getBlog)
router.route("/").post(addBlog)
router.route("/:id").put(updateBlog)

module.exports = router