const Book = require('../models/Book');
const { validationResult } = require('express-validator');

exports.crearLibro = async (req, res) => {

    // Check for errors
    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json({ errors: errors.array() })
    }

    
    
    try {
        // Extract data
        const { title } = req.body;
        // Validations
        let book = await Book.findOne({ title });

        if(book) {
            return res.status(400).json({ msg: 'Book already posted' })
        }
        // create new book
        book = new Book(req.body);

        // save new book
        await book.save();

        // Confirmation msg
        res.json({ msg: 'Book created' })
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Get books
exports.obtenerLibro = async (req, res) => {

    try {
        // Check if there are books
        const { name } = req.body;
        const bookExists = await Book.find();

        if(!bookExists) {
            return res.status(404).json({ msg: 'There are no books to search' });
        }

        // Get books
        const books = await Book.find({  })
        res.json({ books });

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Update books
exports.actualizarLibro = async(req, res) => {
    try {
        // Extract name and description of the book
        const { title, description } = req.body;
        // Find specific book
        let book = await Book.findById(req.params.id);
        if(!book) {
            return res.status(404).json({ msg: 'That book does not exist.' });
        }

        // Create new book
        const newBook = {};
        newBook.title = title;
        newBook.description = description;

        // Update
        book = await Book.findOneAndUpdate({ _id: req.params.id }, newBook, { new: true});
        
        res.json({ book });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error');
    }
}