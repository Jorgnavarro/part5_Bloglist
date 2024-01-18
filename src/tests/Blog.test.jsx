import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { ContextProvider } from '../context/globalContext'
import Blog from '../components/Blog'
import { prettyDOM } from '@testing-library/react'
import { describe, expect, test, beforeEach, vi } from 'vitest'



describe('test blog list', () => {

  let component

  const mockHandler = vi.fn()

  beforeEach(() => {
    const blog = {
      author: 'Gon Freecks',
      title: 'trying a part of the component',
      url: 'hunterXhunter.com',
      likes: 30
    }

    component = render(
      <Blog blog={blog} handleLikes={mockHandler} updatedBlog={mockHandler} />, {
        wrapper: ContextProvider,
      }
    )
  } )


  test('Render a blog without details', () => {

    expect(component.container).toHaveTextContent('trying a part of the component')

    expect(component.container).toHaveTextContent('Gon Freecks')

    const blogDetails = component.container.querySelector('.listDetails')

    expect(blogDetails).toHaveStyle({ display: 'none' })

  })

  test('Show blog details when cliked', () => {

    const blogDetails = component.container.querySelector('.listDetails')

    const btnDetails = component.getByText('View details')

    fireEvent.click(btnDetails)

    expect(component.container).toHaveTextContent('Hide details')

    expect(blogDetails).not.toHaveStyle({ display: 'none' })

  })

  test('Calling event handlerlikes twice', () => {

    const btnLikes = component.container.querySelector('.likeTest')

    console.log(prettyDOM(btnLikes))

    fireEvent.click(btnLikes)

    fireEvent.click(btnLikes)

    expect(mockHandler.mock.calls).toHaveLength(2)

  })


})

