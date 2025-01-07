const express = require('express');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// connect to mongodb
const dbURI = 'mongodb://localhost:27017/blog';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//listen for requests
//app.listen(3000);

app.get('/home', (req, res) => {
    res.render('./blogs/home', { root: __dirname});
});

app.get('/about', (req, res) => {
    res.render('about');
});

//blog routes
app.use(blogRoutes);

// 404 page - must be last
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

