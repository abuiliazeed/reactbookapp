import React from 'react';
import Book from './Book';

// the bookshelf component will display the bookshelf it takes shelf, books and onmove as props
const Bookshelf = props => {
  const { shelf, books, onMove } = props;
  // creating array of books that contain the shelf key
  const booksOnThisShelf = books.filter(book => book.shelf === shelf.key);
  return (
    <div className="shelf">
      <h2 className="shelf-title">{shelf.name}</h2>
      <div className="shelf-books">
        <ol className="grid">
          {booksOnThisShelf.map(book => (
            // rendering the books that belong to this shelf
            <Book key={book.id} book={book} shelf={shelf.key} onMove={onMove} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
