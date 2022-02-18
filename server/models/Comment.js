const mongoose = require('mongoose')
const Comment_Schema = new mongoose.Schema({
        user:{type: 'String',required: true},
        text:{type: 'String',required: true},
        verse:{type: 'String',required: true}

})

const Comment = mongoose.model('comment',Comment_Schema)
module.exports = Comment