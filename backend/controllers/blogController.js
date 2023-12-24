const asyncHandler = require('../middleware/asyncHandler.js')
const Blog = require('../model/blogModel.js')
const Joi = require('joi')

const blogUpdateSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    coverImage: Joi.string().required(),
    category: Joi.string().required(),
    id: Joi.string().required()
})

const blogInsertSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    coverImage: Joi.string().required(),
    category: Joi.string().required()
})

const getAllBlog = asyncHandler(async(req, res) => {
    const blog = await Blog.find({})
    if(blog) {
        res.json(blog)
    } else {
        res.status(400)
        throw new Error("No such data found")
    }
})

const getBlog = asyncHandler(async(req, res) => {
    if(req.params.id) {
        const blog = await Blog.find({id: req.params.id})
        if(blog) {
            res.json(blog)
        } else {
            res.status(400)
            throw new Error("No such data found")
        }
    } else {
        res.status(400)
        throw new Error("No such data found")
    }
})

const addBlog = asyncHandler(async(req, res) => {
    const validate = blogInsertSchema.validate(req.body)
    if(!validate.error) {
        const blog = await Blog.create(req.body);
        if(blog) {
            res.status(201).json()
        } else {
            res.status(400);
            throw new Error("Failed to add Blog")
        }
    } else {
        res.status(400)
        throw new Error("Data is not valid")
    }
})

const updateBlog = asyncHandler(async(req, res) => {
    const validate = blogUpdateSchema.validate({...req.body, id: req.params.id})
    if(!validate.error) {
        const blog = await Blog.create(req.body);
        if(blog) {
            res.status(201).json()
        } else {
            res.status(400);
            throw new Error("Failed to update Blog")
        }
    } else {
        res.status(400)
        throw new Error("Data is not valid")
    }
})

module.exports = { getAllBlog, getBlog, addBlog, updateBlog }