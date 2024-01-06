import { useState, useEffect, useContext } from 'react'
import { ContextGlobal } from './context/globalContext'
import blogService from './services/blog'
import Blog from './components/Blog'
import { Notification } from './components/Notification'
import { LoginForm } from './components/LoginForm'

function App() {
  const [blogs, setBlogs] = useState([])
  const {errorMessage, setErrorMessage, setUser, user} = useContext(ContextGlobal)
  
  useEffect(() => {
    blogService.getAll()
      .then(initialBlogList => {
        setBlogs(initialBlogList)
      })
  }, [])
  console.log(user)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUserBlogs')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      //blogService.setToken(user.token)
    }
  },[setUser])

  return (
    <div className='container containerBlogs'>
      <h1 className='text-center mt-3 mb-5'>Blogs 🗒️</h1>
      {user === null
      ? <LoginForm/>
      :<div>
        <p>{user.name} logged-in</p>
      </div>
      }
      <Notification message={errorMessage}/>
      {user && 
      <ul className='list-group'>
        {blogs.map(blog => {
          return <Blog key={blog.id} blog={blog}/>
        })}
      </ul>}
    </div>
  )
}

export default App
