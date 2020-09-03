// Routes for books
const express = require('express');
const router = express.Router();
const libroController = require('../controllers/bookController');
const { check } = require('express-validator');

// Create book
// api/books
router.post('/', 
    [
        check('title', 'Title is required').not().isEmpty(),
        check('description', 'The description of the book is mandatory.').not().isEmpty()
    ],
    libroController.crearLibro
);

// Get books
router.get('/',
    libroController.obtenerLibro
);

// Update books
router.put('/:id',
    [
        check('title', 'The name of the book is required.').not().isEmpty()
    ],
    libroController.actualizarLibro
);

module.exports = router;