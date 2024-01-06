import { useState, useEffect } from 'react'
import blogService from './services/blog'
import Blog from './components/Blog'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll()
      .then(initialBlogList => {
        setBlogs(initialBlogList)
      })
  }, [])

  return (
    <div className='container'>
      <h1>Blogs</h1>
      <ul className='list-group'>
        {blogs.map(blog => {
          return <Blog key={blog.id} blog={blog} />
        })}
      </ul>
    </div>
  )
}

export default App
