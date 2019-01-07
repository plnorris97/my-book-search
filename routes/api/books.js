const express = require('express');
const router = express.Router();

// item model
const Book = require('../../models/Book');

// @route GET api/items get all books
router.get('/', (req, res) => {
    Book.find()
    .then(books => res.json(books))
});

// @route POST api/items get all books
router.post('/', (req, res) => {
    const newBook = new Book({
        title: req.body.title 
    });

    newBook.save().then(book => res.json(book));
});

// @route DELETE api/books to delete a book
router.delete('/:id', (req, res) => {
    Book.findById(req.params.id)
    .then(book => book.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;