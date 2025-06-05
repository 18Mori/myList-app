import React, { useState } from 'react';
import BookList from './Components/Book-list';

const initialBooks = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'Dune', author: 'Frank Herbert' },
  { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 6, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');

const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};

const filteredBooks = initialBooks.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>

      <h2 className="text-xl font-bold mt-4 mb-2">Search Books</h2>
      <label htmlFor="search" className="sr-only">Search</label>
      <input
        type="text"
        id='search'
        placeholder="Search by Title or Author..."
        className="mb-4 p-2 border rounded w-full"
  
        onChange={handleSearchChange}
      />

        <h2 className="text-xl font-semibold mb-3">Add New Book</h2>
        <form onSubmit={handleSearchChange}>
          <div className="mb-3">
            <label htmlFor="newBookTitle" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter book title"
              className="p-2 border rounded w-full"
  
              onChange={(e) => setNewBookTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newBookAuthor" className="block text-sm font-medium text-gray-700 mb-1">Author</label>
            <input
              type="text"
              placeholder="Enter book author"
              className="p-2 border rounded w-full"
  
              onChange={(e) => setNewBookAuthor(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Book</button>
        </form>
      <h2 className="text-xl font-semibold mt-6 mb-3">Available Books</h2>
      <BookList books={filteredBooks} />
      
    </div>
  );
};

export default App;
