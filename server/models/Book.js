const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    "id":"Number",
    "name":'String',
    "testament":'String',
    "genre":{"id":"Number","name":"String"}

})


const Book = mongoose.models('book',bookSchema);
module.exports = Book;







