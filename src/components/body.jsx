import { useEffect, useState } from 'react';
import '../components/body.css';
import BookCard from './bookCard';

export function Body() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8888/api/books/allBooks")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch books");
                }
                return response.json();
            })
            .then(data => {
                setBooks(data);
            })
            .catch(error => console.error("Error fetching books:", error));
    }, []);

    return (
        <div className="main-body">
      <BookCard books={books}/>
</div>

    );
}
