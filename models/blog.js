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


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const blogSchema = new Schema({
//     title: {
//         type: String,
//         required: [true, 'Title is required'],
//         trim: true,
//         minlength: [3, 'Title must be at least 3 characters'],
//         maxlength: [100, 'Title cannot exceed 100 characters']
//     },
//     snippet: {
//         type: String,
//         required: [true, 'Snippet is required'],
//         trim: true,
//         maxlength: [200, 'Snippet cannot exceed 200 characters']
//     },
//     body: {
//         type: String,
//         required: [true, 'Blog content is required'],
//         minlength: [100, 'Blog content must be at least 100 characters']
//     },
//     category: {
//         type: String,
//         required: [true, 'Category is required'],
//         enum: {
//             values: ['Technology', 'Lifestyle', 'Travel', 'Food', 'Health', 'Business', 'Art', 'Other'],
//             message: '{VALUE} is not a supported category'
//         }
//     },
//     coverImage: {
//         type: String,
//         default: 'default-blog-cover.jpg'
//     },
//     author: {
//         type: Schema.Types.ObjectId,
//         ref: 'User',
//         required: true
//     },
//     likes: [{
//         type: Schema.Types.ObjectId,
//         ref: 'User'
//     }],
//     views: {
//         type: Number,
//         default: 0
//     },
//     status: {
//         type: String,
//         enum: ['draft', 'published'],
//         default: 'published'
//     },
//     tags: [{
//         type: String,
//         trim: true
//     }]
// }, { 
//     timestamps: true,
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true }
// });

// // Virtual for like count
// blogSchema.virtual('likeCount').get(function() {
//     return this.likes.length;
// });

// // Index for better search performance
// blogSchema.index({ title: 'text', snippet: 'text', body: 'text' });

// const Blog = mongoose.model('Blog', blogSchema);
// module.exports = Blog; 