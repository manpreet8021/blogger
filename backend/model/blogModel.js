const moongoose = require('mongoose')
const {Schema} = moongoose

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Blog = moongoose.model("Blog", blogSchema)

module.exports = Blog;