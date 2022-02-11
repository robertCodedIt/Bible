const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    "title":'String',
    "author":'String',
    "numberOfChapters":'Integer',

})


const Book = mongoose.models('book',bookSchema);
module.exports = Book;







