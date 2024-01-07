import { useState } from "react"


export function AddBlogForm () {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("")

    return(
        <div>
            <h2>Create a new blog</h2>
            <form onSubmit="" id='addBlogForm' className="mb-3">
                <div className="mb-3 row align-items-center infoBlog">
                    <div className="col-1">
                        <label htmlFor="title" className="form-label">Title:</label>
                    </div>
                    <div className="col-7">
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={({ target }) => setTitle(target.value)}
                        />
                    </div>
                </div>
                <div className="mb-3 row align-items-center infoBlog">
                    <div className="col-1">
                        <label htmlFor="author" className="form-label">Author:</label>
                    </div>
                    <div className="col-5">
                        <input
                            type='text'
                            className="form-control"
                            id="author"
                            value={author}
                            onChange={({ target }) => setAuthor(target.value)}
                        />
                    </div>
                </div>
                <div className="mb-2 row align-items-center infoBlog">
                    <div className="col-1">
                        <label htmlFor="url" className="form-label">Url:</label>
                    </div>
                    <div className="col-7">
                        <input
                            type='text'
                            className="form-control"
                            id="url"
                            value={url}
                            onChange={({ target }) => setUrl(target.value)}
                        />
                    </div>
                </div>
                <div className="align-self-center">
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}