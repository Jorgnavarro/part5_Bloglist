

/* eslint-disable react/prop-types */
export const BlogDetail = ({ blog, style, handleLikes, userDDBB }) => {

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
            <li>
                {blog.user?.id == userDDBB ? <button className="btn btn-outline-danger">Remove</button>: ""}
            </li>
        </ul>
    )
}