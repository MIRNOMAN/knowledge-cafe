import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types'


const Blogs = ({handleAddBookmarks,handleClickReadingTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3 mx-5">
            <h2>Blogs : {blogs.length}</h2>
            {
                blogs.map(blog=> <Blog key={blog.id} handleClickReadingTime={handleClickReadingTime} handleAddBookmarks={handleAddBookmarks} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmarks: propTypes.func,
    handleClickReadingTime: propTypes.func
}

export default Blogs;