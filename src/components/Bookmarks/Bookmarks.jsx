import propTypes from 'prop-types'
import Bookmark from '../../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-5 mt-4 pt-4'>
            <div className='bg-blue-300 mt-4'>
                <h3 className="text-2xl text-center p-4">Reading Time : {readingTime}</h3>
            </div>
            <h2 className='text-3xl text-center  mb-3'>Bookmarkes Bloges : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, indx) => <Bookmark key={indx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.prototype = {
bookmarks: propTypes.array,
readingTime: propTypes.number
}
export default Bookmarks;