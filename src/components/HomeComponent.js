import React from 'react'
import CurrentReadingComponent from './CurrentReadingComponent'
import WantToReadComponent from './WantToReadComponent'
import ReadComponent from './ReadComponent'

const HomeComponent = ({ BooksCurrently, BooksWantToRead, BooksToRead, handleChangeBook }) => {
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
            </div>
            <CurrentReadingComponent Books={BooksCurrently} handleChangeBook={handleChangeBook} />
            <WantToReadComponent Books={BooksWantToRead} handleChangeBook={handleChangeBook} />
            <ReadComponent Books={BooksToRead} handleChangeBook={handleChangeBook} />
        </div>
    )
}

export default HomeComponent