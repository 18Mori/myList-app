import React from 'react';
import BookItem from './Book-item';

function BookList({ books }) {
  return (
    <ol className="space-y-3">
      {books.map((book) =>{ 
        return(
        <BookItem key={book.id} book={book} />
      )}
    )}
    </ol>
  );
}

export default BookList;

// cd ..