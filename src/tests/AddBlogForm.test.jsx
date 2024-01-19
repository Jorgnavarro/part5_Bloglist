import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import { AddBlogForm } from '../components/AddBlogForm'
import { ContextProvider } from '../context/globalContext'
import { prettyDOM } from '@testing-library/react'


test('<AddBlogForm/> updates parent state and calls onSubmit', () => {

  const addBlog = vi.fn()

  const component = render(
    <AddBlogForm>
      <form onSubmit={addBlog()}></form>
    </AddBlogForm>, {
      wrapper: ContextProvider,
    }
  )

  const newBlog = {
    author:'Gon Freecks',
    title:'Tatacae, tatacae',
    url:'icandoit.com'
  }


  const form = component.container.querySelector('form')

  const inputAuthor = component.container.querySelector('#author')

  const inputTitle = component.container.querySelector('#title')

  const inputUrl = component.container.querySelector('#url')


  fireEvent.change(inputAuthor, {
    target: { value: 'Gon Freecks' }
  })

  fireEvent.change(inputTitle, {
    target: { value: 'Tatacae, tatacae' }
  })

  fireEvent.change(inputUrl, {
    target: { value: 'icandoit.com' }
  })

  fireEvent.submit(form)

  console.log(prettyDOM(form))

  expect(addBlog.mock.calls).toHaveLength(1)

  expect(newBlog.author).toBe(inputAuthor.value)
  expect(newBlog.title).toBe(inputTitle.value)
  expect(newBlog.url).toBe(inputUrl.value)

})