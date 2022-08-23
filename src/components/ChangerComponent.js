import React from 'react'

const ChangerComponent = ({ shelfType, handleChangeBook, Book }) => {
    let handleChanger = (e) => {
        const NewShelf = e.target;
        shelfType = NewShelf;
        handleChangeBook(Book, e.target.value)
    }

    return (
        <div>
            <div className="book-shelf-changer">
                <select value={shelfType} onChange={handleChanger}>
                    <option value="moveTo" disabled>
                        Move to...
                    </option>
                    <option value="currentlyReading">
                        Currently Reading
                    </option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
    )
}

export default ChangerComponent