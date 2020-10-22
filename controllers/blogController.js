const { model } = require('../models/blog');
const Blog = require('../models/blog');

//index funtune
const index = (req , res) => {
    Blog.find().sort({createdAt: -1})
    .then((result) => {
        res.render('index' , {title: 'All blogs' , blogs : result})
    })
    .catch((err) => {
        console.log(err);
    });
}

// create function for display create view
const create = (req , res) =>{
    res.render('create' , {title: 'Create new Blog'});
}

// stor function for  insert dat to database
const stor = (req , res) =>{
    console.log(req.body);
    const blog = new Blog(req.body);
    blog.save()
        .then((result) => {
            res.redirect('/blogs');
        })
        .catch((err) => {
            console.log(err);
        });
}

// show fonction for display single blog
const show = (req ,res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then((result) => {
            res.render('details' , {blog : result , title : 'Blog details'});
        })
        .catch((err) => {
            console.log(err);
        });
}

const distroy = (req , res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({redirect: '/blogs' });
    })
    .catch((err) => {
        console.log(err);
    });
}


module.exports = {index,show,stor,create,distroy}