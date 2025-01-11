const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'net ninja secret', (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
};

const checkUser = async (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'net ninja secret', async (err, decodedToken) => {
            if (err) {
                res.locals.user = null;
                next();
            } else {
                try {
                    let user = await User.findById(decodedToken.id);
                    if (user) {
                        res.locals.user = user;
                    } else {
                        res.locals.user = null;
                    }
                    next();
                } catch (err) {
                    console.error('Error finding user:', err);
                    res.locals.user = null;
                    next();
                }
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};

module.exports = { requireAuth, checkUser };