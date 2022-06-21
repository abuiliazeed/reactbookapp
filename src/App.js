import React, { Component } from 'react';
import './App.css';
import ListBookshelves from './components/ListBookshelves';
import SearchBooks from './components/SearchBooks';
import { Route } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import * as BooksAPI from './components/BooksAPI';

// We will create bookshelves constant that list the three types of shelves
const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

// Creating a class component BooksApp which have 2 main states: books and searchBooks
class BooksApp extends Component {
  state = {
    myBooks: [],
    searchBooks: [],
    error: false
  };
  // This method will be called when the component is mounted to display mybooks
  componentDidMount = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ myBooks: books });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  };
  // This method will be called when the user move a book from a shelf to another
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).catch(err => {
      console.log(err);
      this.setState({ error: true });
    });
    // if the user choose the none state then the book will be removed from the crurrent shelf using the book id and the filter method
    if (shelf === 'none') {
      this.setState(prevState => ({
        myBooks: prevState.myBooks.filter(b => b.id !== book.id)
      }));
    } else {
      // if the user choose a shelf then the book will be added to the shelf using the book id and the filter method
      book.shelf = shelf;
      this.setState(prevState => ({
        myBooks: prevState.myBooks.filter(b => b.id !== book.id).concat(book)
      }));
    }
  };
  // This method will be called when the user search for a book
  searchForBooks = debounce(300, false, query => {
    if (query.length > 0) {
      // we will use the search method in the BooksAPI to search for a book and we will store the result in the searchBooks state
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });
  // This method will be called when the user reset the search
  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

  render() {
    const { myBooks, searchBooks, error } = this.state;
    if (error) {
      return <div>Network error. Please try again later.</div>;
    }
    return (
      <div className="app">
        {/* The absloute path / direct as to the main app */}
        <Route
          exact
          path="/"
          render={() => (
            <ListBookshelves
              bookshelves={bookshelves}
              books={myBooks}
              onMove={this.moveBook}
            />
          )}
        />
        {/* The /search path direct us to the search page */}
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              searchBooks={searchBooks}
              myBooks={myBooks}
              onSearch={this.searchForBooks}
              onMove={this.moveBook}
              onResetSearch={this.resetSearch}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
