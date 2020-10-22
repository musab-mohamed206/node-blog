const express = require('express')
const morgan = require('morgan');
const mongoos = require('mongoose');
const { result } = require('lodash');
const { render } = require('ejs');
const blogRouter = require('./routes/blogRoutes');


const app = express()

// conect to mongodb
const dbURI = 'mongodb+srv://musab:musab!@!@1212@cluster0.bn25k.mongodb.net/node-blog?retryWrites=true&w=majority';
mongoos.connect(dbURI , {useNewUrlParser: true , useUnifiedTopology:true})
    .then((result) => app.listen(3000))
    .catch((err)=> console.log(err));

// registar view engin
app.set('view engine', 'ejs');

// middleweare
app.use(express.urlencoded({extended: true}));
//static files
app.use(express.static('public'));


// index page
app.get('/', (req, res) => { 
    res.redirect('/blogs');
});
// about page
app.get('/about', (req, res) => {
    res.render('about' , {title: 'About'});
});

// blog routers
app.use(blogRouter);


// 404page
app.use((req , res) => {
    res.status(404).render('404' , {title: '404'});
});


