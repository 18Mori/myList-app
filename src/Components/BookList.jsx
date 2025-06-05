import React from 'react';
import BookItem from './BookItem';

function BookList({ books }) {
  return (
    <ul className="space-y-3">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
}

export default BookList;
