import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const IndividualBooks = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { bookid } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookid}`);
        const bookData = await response.json();
        if (response.ok) {
          setBook(bookData.book);
        } else {
          setError('Book not found'); 
        }
      } catch (err) {
        setError('Failed to fetch book details'); 
      } finally {
        setLoading(false); 
      }
    };
    
    fetchBookDetails();
  }, [bookid]); 
  
  if (loading) {
    return <p>Loading book details...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  const goBackToCatalog = () => {
    navigate('/Catalog')

  }

  return (
    <>
      <div className="IndividualBookContainer">
        {book && (
          <>
            <img
              src={book.coverimage}
              alt={`cover of ${book.title}`}
              className="bookDetailsImage"
            />
            <div>
              <h2>{book.title}</h2>
              <h3>{`by ${book.author}`}</h3>
              <h4>{book.available ? 'Available!' : 'Sorry! This book is currently checked Out'}</h4>
              <section>{book.description}</section>
            </div>
          </>
        )}
      </div>
      <button onClick={goBackToCatalog}>Back To Catalog</button>

    
    </>
  );
};

export default IndividualBooks;
