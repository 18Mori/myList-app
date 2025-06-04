import React from 'react';
import BookList from './Components/Book-list';

const books = [
  { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { id: 2, title: '1984', author: 'George Orwell' },
  { id: 3, title: 'Dune', author: 'Frank Herbert' },
  { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { id: 5, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 6, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
];

function App() {
  
  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;
