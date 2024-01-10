import { useState, useContext } from "react"
import { ContextGlobal } from "../context/globalContext"
import blogService from "../services/blog"
/* eslint-disable react/prop-types */
export const BlogDetail = ({ blog, style }) => {
    const [like, setLike] = useState(blog.likes)
    const { setBlogs, blogs, setErrorMessage } = useContext(ContextGlobal)

    const handleLikesAndUpdate = async () => {
        console.log(blog.id)
        setLike(like + 1)
        if(like>blog.likes && blog.id){
            const updatedBlog = {
                user: blog.user.id,
                author: blog.author,
                title: blog.title,
                url: blog.url,
                likes: like
            }
            const blogUpdated = await blogService.update(blog.id, updatedBlog)
            setBlogs(blogs.map(b => {
                b.id !== blog.id ? b : blogUpdated
            }))
        }
            
            
            
            
            
            // blogService.update()
            //     .then(blogUpdate => {
            //         setBlogs(blogs.map(b => {
            //             b.id !== blog.id ? b : blogUpdate
            //         }))
            //     })
            //     .catch(error => {
            //         setErrorMessage(
            //             `${error}`
            //         )
            //         setTimeout(() => {
            //             setErrorMessage(null)
            //         }, 5000)

            //     })
    }
    console.log(like)

    return(
        <ul className="listDetails" style={style}>
            <li>
            {blog.url}
            </li>
            <li>
            likes: {blog.likes} <button onClick={handleLikesAndUpdate} className="btn btn-outline-primary">like</button>
            </li>
            <li>
            {blog.author}
            </li>
        </ul>
    )
}