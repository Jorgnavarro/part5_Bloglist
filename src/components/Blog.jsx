import { useState } from "react"
import { BlogDetail } from "./BlogDetails"

/* eslint-disable react/prop-types */
const Blog = ({ blog }) => {
    const [visible, setVisible] = useState(false)
    const showWhenVisible = {display: visible ? '' : 'none'}

    const toggleVisibility = () => {
        setVisible(!visible)
    }
    
    return (
        <li id="colorList" className='list-group-item list-group-item-light'>
           <div className="containerInfoBlog">
            {blog.title} - {blog.author}
            <button className="btn btn-outline-primary" onClick={toggleVisibility}>{visible ? "Hide details":"View details"}</button>
           </div>
           <BlogDetail style={showWhenVisible} blog={blog}/>
        </li>
    )
}

export default Blog