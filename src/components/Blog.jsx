import { useState } from "react"
import { BlogDetail } from "./BlogDetails"

/* eslint-disable react/prop-types */
const Blog = ({ blog, updatedBlog, userDDBB }) => {
    const [like, setLike] = useState(blog.likes)
    const [visible, setVisible] = useState(false)
    const showWhenVisible = {display: visible ? '' : 'none'}

    const toggleVisibility = () => {
        setVisible(!visible)
    }


    const handleLikes = () => {
        setLike((prevLike) => prevLike + 1)

        const blogUpdated = {
            ...blog,
            likes: like + 1
        }
        updatedBlog(blog.id, blogUpdated)
    }

    return (
        <li id="colorList" className='list-group-item list-group-item-light'>
           <div className="containerInfoBlog">
            {blog.title} - {blog.author}
            <button className="btn btn-outline-primary" onClick={toggleVisibility}>{visible ? "Hide details":"View details"}</button>
           </div>
           <BlogDetail key={blog.id} userDDBB={userDDBB} style={showWhenVisible} blog={blog} handleLikes={handleLikes} />
        </li>
    )
}

export default Blog