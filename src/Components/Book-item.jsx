import React from 'react';

function BookItem({ book }) {
  return (
    <li className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="text-sm text-gray-600">by {book.author}</p>
    </li>
  );
}

export default BookItem;
