const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Handle Errors
const handleErrors = (err) => {
    let errors = { username: '', email: '', password: '' };

    // Duplicate error codes
    if (err.code === 11000) {
        if (err.keyPattern.email) {
            errors.email = 'That email is already registered';
        }
        if (err.keyPattern.username) {
            errors.username = 'That username is already taken';
        }
        return errors;
    }

    // Validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    // Login specific errors
    if (err.message === 'incorrect email') {
        errors.email = 'That email is not registered';
    }
    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }

    return errors;
};

const maxAge = 3 * 24 * 60 * 60; // 3 days in seconds
const createToken = (id) => {
    return jwt.sign({ id }, 'net ninja secret', {
        expiresIn: maxAge
    });
};

module.exports.signup_get = (req, res) => {
    res.render('signup', { title: 'Sign up' });
};

module.exports.login_get = (req, res) => {
    res.render('login', { title: 'Login' });
};

module.exports.signup_post = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.create({ username, email, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

module.exports.logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    res.redirect('/');
};