import { useState } from "react"
import BookShow from "./bookShow"

export default function BookCard({books}){
    const[showBookDetails,setShowBookDetails]=useState(false)
console.log(showBookDetails)
    function handlshowDetails(){
        setShowBookDetails(()=>!showBookDetails)
    }
    return(
       <>
       {showBookDetails ?<BookShow books={books}/>:(

           books.map((book, index) => (
               <div key={index} className="book-card" onClick={handlshowDetails}>
               <img src={book.imageUrl} alt={book.title}/>
               <h3>{book.title}</h3>
               <p>{book.author}</p>
               </div>
            ))
            
        )
        }
          </>
    )
}