const mongoose = require("mongoose");
// create schema opject
const schema = mongoose.Schema;

//crate blog schema
const blogSchema = new schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, {timestamps: true})
// create blog modele
const Blog = mongoose.model('Blog' , blogSchema);

module.exports = Blog;