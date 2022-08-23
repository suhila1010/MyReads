import React, { useState } from 'react'
import ChangerComponent from './ChangerComponent';
import PropTypes from "prop-types";
const SearchComponent = ({ handleSearch, SearchedBooks, handleChangeBook, allBooks }) => {
  console.log(SearchedBooks)
  const [query, setQuery] = useState("");
  const updateQuery = (query) => {
    setQuery(query);
    handleSearch(query.trim())
  }
  const updatedBooks = SearchedBooks.map(book => {
    allBooks.map(b => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <div className="search-books-input-wrapper">
            <div>
            </div>
            <a className="home-link" href="/">Home</a>
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(event) => {
                // console.log("a");
                updateQuery(event.target.value)
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              updatedBooks.map((Books) => (
                <li key={Books.id}>
                  <div className='book'>
                    <div className='book-top'>
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${Books.imageLinks
                            ? Books.imageLinks.thumbnail
                            : 'icons/book-placeholder.svg'
                            })`
                        }}
                      />
                      <ChangerComponent shelfType={Books.shelf ? Books.shelf : 'none'} handleChangeBook={handleChangeBook} Book={Books} />
                    </div>
                    <div className="book-title">{Books.title}</div>
                    <div className="book-authors">
                      {Books.authors ? Books.authors : 'Unknown Author'}
                    </div>
                  </div>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    </div>
  )
}
SearchComponent.propTypes = {
  SearchedBooks: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired
}
export default SearchComponent