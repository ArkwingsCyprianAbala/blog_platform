const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');

const dbURI = 'mongodb://localhost:27017/blog';

// express app
const app = express();

// connect to mongodb
// const dbURI = 'mongodb+srv://Arkwings:test123@nodetuts.ziku9.mongodb.net/';
mongoose.connect(dbURI)
    .then((result) => app.listen(5698))
    .catch((err) => console.log(err));


// mongoose.connect();

// register view engine
app.set('view engine', 'ejs')

// listen to requests
// app.listen(5698);

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 5',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('66bcb140785b9ab9e69f17a7')
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });


// app.use((req, res, next) => {
//     console.log('New request made');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('In the next middleware');
//     next();
// });

app.get('*', checkUser);
app.get('/', (req, res) => {
    // const blogs = [
    //     {title: 'Wife', snippet: 'Phayatta'},
    //     {title: 'Husband', snippet: 'Abala'},
    //     {title: 'Child', snippet: 'Arkwings Jnr'},
    // ];
    // //console.log('GET request');
    // //res.send('<p>Home Page</p>');
    // //res.sendFile('./views/index.html', { root: __dirname });
    // res.render('index', { title: 'Home', blogs});
    res.render('home', {title: 'Homepage'})
});


app.get('/about', (req, res) => {
    console.log('GET request');
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/index.html', { root: __dirname });
    res.render('about', { title: 'About'});
});

// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// blog routes
// app.use('/blogs', blogRoutes);
app.use('/blogs', requireAuth, blogRoutes);
app.use(authRoutes);


// cookies
// app.get('/set-cookies', (req, res) => {
//     //res.setHeader('Set-Cookie', 'newUser=true');
//     res.cookie('newUser', false);
//     res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
//     res.send('you got the cookies');
// });

// app.get('/read-cookies', (req, res) => {
//     const cookies = req.cookies;
//     console.log(cookies);
//     res.json(cookies);
// });

app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', { root: __dirname});
    res.status(404).render('404', { title: '404'});
});

