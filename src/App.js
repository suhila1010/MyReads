import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchComponent from "./components/SearchComponent";
import * as BooksAPI from './components/BooksAPI';
import SearchButton from "./components/SearchButton";
import HomeComponent from "./components/HomeComponent";

function App() {
  let [allBooks, setAllBooks] = useState([]);
  let [BooksCurrently, setBooksCurrently] = useState([]);
  let [BooksToRead, setBooksToRead] = useState([]);
  let [BooksWantToRead, setBooksWantToRead] = useState([{}]);
  let [SearchBooks, setSearchedBooks] = useState([]);

  const SearchingInBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query)
        .then(Books => {
          if (Books.error) {
            setSearchedBooks([])
          }
          else {
            setSearchedBooks(Books)
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
    else {
      setSearchedBooks([])
    }
  }

  const ChangingBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).catch((err) => {
      console.log(err);
    })


    BooksAPI.getAll()
      .then(books => {
        let temp1 = [], temp2 = [], temp3 = []
        books.map(book => {
          if (book.shelf === "currentlyReading") {
            temp1.push(book)
            //console.log(book.shelf);
          }
          else if (book.shelf === "wantToRead") {
            temp2.push(book)
          }
          else if (book.shelf === "read") {
            temp3.push(book)
          }
          else if (book.shelf === undefined) {
            book.shelf = "none"
          }
        })
        setBooksCurrently(temp1)
        setBooksWantToRead(temp2)
        setBooksToRead(temp3)
      })
      .catch(err => {
        console.log(err)
      })
  }

  useEffect(() => {
    BooksAPI.getAll()
      .then(books => {
        let temp1 = [], temp2 = [], temp3 = []
        books.map(book => {
          if (book.shelf === "currentlyReading") {
            temp1.push(book)
            //console.log(book.shelf);
          }
          else if (book.shelf === "wantToRead") {
            temp2.push(book)
          }
          else if (book.shelf === "read") {
            temp3.push(book)
          }
          else if (book.shelf === undefined) {
            book.shelf = "none"
          }
        })
        setBooksCurrently(temp1)
        setBooksWantToRead(temp2)
        setBooksToRead(temp3)
        setAllBooks(books)
      })
      .catch(err => {
        console.log(err)
      })

  }, [])
  return (
    <div className="app" >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomeComponent BooksCurrently={BooksCurrently} BooksWantToRead={BooksWantToRead} BooksToRead={BooksToRead} handleChangeBook={ChangingBooks} />
            }
          />
          <Route
            path="/search"
            element={
              <SearchComponent handleSearch={SearchingInBooks} SearchedBooks={SearchBooks} handleChangeBook={ChangingBooks} allBooks={allBooks} />
            }
          />
        </Routes>
      </BrowserRouter>
      <SearchButton />
    </div>
  );
}

export default App;
