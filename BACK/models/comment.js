const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    _id : { 
        type : mongoose.Schema.Types.ObjectId,
        auto : true 
    }, 
    content: {
        type: String, 
        required: true,
    },

    idUser: {
       type: String, 
       required: true
    },
})

module.exports = mongoose.model('Comment', commentSchema)