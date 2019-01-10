const express = require('express');
const router = express.Router();

const Books = require('../../models/books')

// @route   GET api/books
// @desc    Get all books
// @access  Public

router.get("/", (req, res) => {
  Books.findAll()
    .then(books => res.json(books))
})

// @route   POST api/books
// @desc    Create a book and save to database
// @access  Public

router.post("/", (req, res) => {
  const newBook = new Book({
  });
  newBook.save().then(book => res.json(book));
})

// @route   DELETE api/books/:id
// @desc    Delete a book from the database
// @access  Public

router.delete("/:id", (req, res) => {
  Books.findById(req.params.id).then(book => book.delete()
  .then(() => res.json({ success: true}))
  .catch(err => res.status(404).json({ success: false})))
})


//   .get(dbController.findAll)
//   .post(dbController.create);

// router.route("/:id")
//   .get(dbController.findById)
//   .put(dbController.update)
//   .delete(dbController.delete);

module.exports = router;