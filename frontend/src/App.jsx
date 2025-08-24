import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    axios.get('/api/books')
    .then((response)=>{
      setBooks(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
     
      <h3>Book list</h3>
      <p>Books :{books.length}</p>

      {
        books.map((book)=>(
          <div key={book.id}>
            <h4>{book.name}</h4>
            <h4>{book.price}</h4>
          </div>
        ))
      }
    </>
  )
}

export default App
