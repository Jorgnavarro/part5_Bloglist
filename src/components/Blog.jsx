/* eslint-disable react/prop-types */
const Blog = ({ blog }) => {
    return (
        <li className='list-group-item list-group-item-dark'>
            {blog.title} - {blog.author}
        </li>
    )
}

export default Blog