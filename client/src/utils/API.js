import axios from "axios";

export default {
  // call to the Google Book API
  searchBooks: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },

  // display the saved books from db
  getSavedBooks: function() {
    return axios.get("/api/books/saved" );
  },
  // delete a saved book from db
  deleteBook: function(id) {
    return axios.delete("/api/books/delete/" + id);
  },

  // save the book in our db
  saveBook: function(bookKey, bookData) {
    return axios.post("/api/books/" + bookKey, bookData);
  }
};
