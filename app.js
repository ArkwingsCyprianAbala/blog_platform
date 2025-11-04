require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { result } = require('lodash');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { checkUser } = require('./middleware/authMiddleware');

// express app
const app = express();

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser()); 

// connect to mongodb
// const dbURI = 'mongodb+srv://Cyprian:Abala254@blog-space.qo3ecqk.mongodb.net/blog-platform?appName=blog-space'
// const dbURI = 'mongodb://localhost:27017/blog';
const dbURI = process.env.DB_URI;
mongoose.connect(dbURI)
    .then((result) => app.listen(process.env.PORT || 3000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');

//listen for requests
//app.listen(3000);

app.get('*', checkUser);

app.get('/home', (req, res) => {
    res.render('./blogs/home', { root: __dirname});
});

app.get('/about', (req, res) => {
    res.render('about');
});

//blog routes
app.use(blogRoutes);

//app routes
app.use(authRoutes);

// 404 page - must be last
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});

