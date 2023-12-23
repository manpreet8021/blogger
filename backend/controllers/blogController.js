const asyncHandler = require('../middleware/asyncHandler.js')
const Blog = require('../model/blogModel.js')

const getBlog = asyncHandler(async(req, res) => {
    const blog = await Blog.find({}).select(title, description, coverImage, category, createdAt)

    if(blog) {
        res.json(blog)
    } else {
        res.statusCode(400)
        throw new Error("No such data found")
    }
})

module.exports = { getBlog }