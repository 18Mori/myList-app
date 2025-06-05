import React, { useState } from 'react';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import SearchBar from './components/SearchBar';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 2, title: '1984', author: 'George Orwell' },
    { id: 3, title: 'Dune', author: 'Frank Herbert' },
    { id: 4, title: 'Asachba', author: 'Unknown' },
  ]); 

  const [searchTerm, setSearchTerm] = useState('');

  const addBook = (title, author) => {
    const newBook = {
      id: books.length + 1,
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <AddBookForm onAdd={addBook} />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;
