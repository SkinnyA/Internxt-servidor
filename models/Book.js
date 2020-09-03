const mongoose = require('mongoose');

const BooksSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Book', BooksSchema);