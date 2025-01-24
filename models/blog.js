// models/blog.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 100
    },
    seoTitle: {
        type: String,
        maxlength: 60
    },
    category: {
        type: String,
        //required: true
    },
    tags: {
        type: [String], // Array of strings for tags
        maxlength: 5
    },
    snippet: {
        type: String,
        required: true,
        maxlength: 150
    },
    coverImage: {
        type: String // URL or path to the image
    },
    body: {
        type: String,
        required: true
    },
    canonicalUrl: {
        type: String
    },
    allowComments: {
        type: Boolean,
        default: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    contentType: {
        type: String,
        enum: ['free', 'premium', 'pay-per-view'],
        default: 'free'
    },
    price: {
        type: Number,
        min: 0.99
    },
    enableAds: {
        type: Boolean,
        default: false
    },
    acceptTips: {
        type: Boolean,
        default: false
    },
    affiliateLinks: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
