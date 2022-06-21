import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';
import { FaBook } from 'react-icons/fa';

class ListBooks extends Component {
  render() {
    const { bookshelves, books, onMove } = this.props;
    return (
      <>
      {/* This will render the header BookApp */}
        <div className="list-books">
          <div className="list-title">
            <h1><span><FaBook size={30}/></span>ReactBookApp</h1>
          </div>
          {/* This will list down all the bookshelves with it's book contents */}
          <div className="list-books-content">
            <div>
              {/* We will map over the bookshelves array to render eachone */}
              {bookshelves.map(shelf => (
                <Bookshelf
                  key={shelf.key}
                  shelf={shelf}
                  books={books}
                  onMove={onMove}
                />
              ))}
            </div>
          </div>
          {/* This will open the search page because it is linked to search */}
          <div className="open-search">
            <Link to="search">
              <button>Add a Book</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default ListBooks;
