import React from 'react';
import Book from './Book';
// The SearchResults component will display the search results it takes searchbooks, mybooks and onmove as props
const SearchResults = props => {
  const { searchBooks, myBooks, onMove } = props;

  const updatedBooks = searchBooks.map(book => {
    myBooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="results">
      <ol className="grid">
        {/* we will diplay all the <Book> components from array book taking book id , book, shelf , onmove as props */}
        {updatedBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
