import { useEffect, useContext} from 'react'
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

  

  const sortByLikes = () => {
    const arrSort = [...blogs]
    arrSort.sort((a,b)=> {
      return b.likes - a.likes
    })
    setBlogs(arrSort)
  }


  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUserBlogs')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  },[setUser])

  const updateLikesBlog = async (id, newObject) => {
    try{
      const response = await blogService.update(id, newObject)

      setBlogs(
        blogs.map(blog=> {
          return blog.id !== response.id ? blog : response
      })
      )
    }catch(error){
      console.log("You need to provide a jwt or login again")
    }
    

  }

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
      <button onClick={sortByLikes} className="btn btn-outline-success mb-2">Sort by likes</button>
      {user && 
      <ul className='list-group'>
        {blogs.map(blog => {
          return <Blog key={blog.id} blog={blog} updatedBlog={updateLikesBlog}/>
        })}
      </ul>}
    </div>
  )
}

export default App
