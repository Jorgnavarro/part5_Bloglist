/* eslint-disable react/prop-types */
export const BlogDetail = ({ blog, style, handleLikes }) => {


    

    // const handleLikesAndUpdate = () => {
    //     console.log(blog.id)
    //     setLike(like + 1)
        
    //     const updatedBlog = {
    //         user: blog.user.id,
    //         author: blog.author,
    //         title: blog.title,
    //         url: blog.url,
    //         likes: like
    //     }

    //         blogService.update(blog.id, updatedBlog)
    //             .then(blogUpdated => {
    //                 setBlogs(blogs.map(b => {
    //                     b.id !== blog.id ? b : blogUpdated
    //                 }))
    //             })
    //             .catch(error => {
    //                 console.log(error)
    //             })
    
            
            
            
            
            
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
    //}

    return(
        <ul className="listDetails" style={style}>
            <li>
            {blog.url}
            </li>
            <li>
            likes: {blog.likes} <button onClick={() => handleLikes()} className="btn btn-outline-primary">like</button>
            </li>
            <li>
            {blog.author}
            </li>
        </ul>
    )
}