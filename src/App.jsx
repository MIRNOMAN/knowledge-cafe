
import './App.css'
import Header from './components/Header/header'
import Blogs from './components/blogs/blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarkes] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = blog =>{
    const newBoolmarks = [...bookmarks, blog]
    setBookmarkes(newBoolmarks)
  }

  const handleClickReadingTime = (time,id) =>{
    setReadingTime(readingTime + time);

     const remaining = bookmarks.filter(bookmark => bookmark.id !== id)
     setBookmarkes(remaining)
  }
  return (
    <>
    <Header></Header>
   <main className='md:flex max-w-6xl mx-auto'>
   <Blogs handleAddBookmarks={handleAddBookmarks} handleClickReadingTime={handleClickReadingTime}></Blogs>
   <Bookmarks readingTime={readingTime}  bookmarks={bookmarks}></Bookmarks>
   </main>
    
  
    </>
  )
}

export default App
