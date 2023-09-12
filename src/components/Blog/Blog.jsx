
import { prototype } from 'postcss/lib/previous-map';
import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa'

const Blog = ({blog, handleAddBookmarks,handleClickReadingTime}) => {
    const {cover,title,author,author_img,posted_date,reading_time,hashtags,id} = blog;
    return (
        <div className='space-y-6'>
            <img className='h-[450px] w-full' src={cover} alt="" />
            <div className='flex justify-between mt-7' >
                <div className='flex gap-5'>
                  <img className='w-14' src={author_img} alt="" />
                  <div>
                    <h3>{author}</h3>
                    <p><span>{posted_date}</span></p>
                  </div>
                </div>
                <div>
                  <span>{reading_time} min read</span>
                  <button className='ml-3' onClick={() =>handleAddBookmarks(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold mt-7'>{title}</h2>

            <p className='mt-7'>
                {
                    hashtags.map((hash, idx)=> <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>

            <button onClick={() =>handleClickReadingTime(reading_time,id)} className='text-xl font-bold text-red-600 underline'>Mark as read</button>

        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func,
    handleClickReadingTime: prototype.func
}

export default Blog;