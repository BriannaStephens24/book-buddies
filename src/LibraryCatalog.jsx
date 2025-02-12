import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LibraryCatalog = (props) => {
  const [allBooks, setAllBooks] = useState([]); 

  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const bookArray = await response.json();
        setAllBooks(bookArray.books);
      } catch (error) {
        console.error('Error fetching books:', error); 
      }
    };

    getBooks();
  }, []); 

  return (
    <div>
      {allBooks.length > 0 ? (
        allBooks.map((singleBook) => (
          <Link
            to={`/books/${singleBook.id}`} 
            key={singleBook.id} 
            onClick={() => {
              props.setSelectedBook(singleBook);
            }}
          >
            <div>
              <img 
                src={singleBook.coverimage} 
                alt={`Cover of ${singleBook.title}`}  
              />
              <h3>{singleBook.title}</h3>
            </div>
          </Link>
        ))
      ) : (
        <p>No books available.</p>
      )}
    </div>
  );
};

export default LibraryCatalog;
