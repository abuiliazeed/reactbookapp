import React, { Component } from 'react';
import SearchResults from './SearchResults';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

// The SearchBooks component will display the search books input and search results and manage the routing back to the bookshelves when you close the search
class SearchBooks extends Component {
  render() {
    // This compomemt takes in searchbooks , mybooks , onsearch , onresetsearch, onmove as props
    const {
      searchBooks,
      myBooks,
      onSearch,
      onResetSearch,
      onMove
    } = this.props;
    return (
      <div className="search-books">
        <div className="search-bar">
          {/* routing back to the shelves when we click the back */}
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}>
              Close
            </button>
          </Link>
          {/* When we search the component render the searchresults */}
          <SearchBar onSearch={onSearch} />
        </div>
        {/* Displaying search results */}
        <SearchResults
          searchBooks={searchBooks}
          myBooks={myBooks}
          onMove={onMove}
        />
      </div>
    );
  }
}

export default SearchBooks;
