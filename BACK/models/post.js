const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    title: {
        type: String,
        required: true,
    },

    userId: {
        type: String,
        required: true,
        default: ''
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    description: {
        type: String,
        required: false,
    },

    adresse: {
        type: String,
        required: false
    },

    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'  // Référence vers le modèle Comment
    }],

    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Post', postSchema)