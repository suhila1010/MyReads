import React from 'react'
import ChangerComponent from './ChangerComponent'
const WantToReadComponent = ({ Books, handleChangeBook }) => {
  //console.log(Books)
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want To Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {Books.map((Books, key) => (
            <li key={key}>
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
                  <ChangerComponent shelfType={Books.shelf} handleChangeBook={handleChangeBook} Book={Books} />
                </div>
                <div className="book-title">{Books.title}</div>
                <div className="book-authors">
                  {Books.authors ? Books.authors : 'Unknown Author'}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div >
  )
}

export default WantToReadComponent