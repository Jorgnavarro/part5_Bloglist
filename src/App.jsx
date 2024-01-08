import { useEffect, useContext } from 'react'
import { ContextGlobal } from './context/globalContext'
import blogService from './services/blog'
import Blog from './components/Blog'
import { Notification } from './components/Notification'
import { LoginForm } from './components/LoginForm'
import { HeaderUserInfo } from './components/HeaderUserInfo'
import { AddBlogForm } from './components/AddBlogForm'

function App() {
  const {blogs, setBlogs, errorMessage, infoMessage, setUser, user} = useContext(ContextGlobal)
  
  useEffect(() => {
    blogService.getAll()
      .then(initialBlogList => {
        setBlogs(initialBlogList)
      })
  }, [setBlogs])


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUserBlogs')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  },[setUser])

  return (
    <div className='container containerBlogs'>
      <h1 className='text-center mt-3 mb-5'>Blogs 🗒️</h1>
      <Notification className="alert-danger" message={errorMessage}/>
      {user === null
      ? <LoginForm/>
      : <HeaderUserInfo/>
      }
      <Notification className="alert-success" message={infoMessage}/>
      {user && <AddBlogForm/>}
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
