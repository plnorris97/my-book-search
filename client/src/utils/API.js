import axios from "axios";

export default {
  // Gets all books
  googleSearch: (URL) => {
    return axios.get(URL);
  },
  getBook: function(id) {
    return axios.get("/api/books" + id)
  },
  // Gets the book with the given id
  getBooks: function() {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};