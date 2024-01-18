import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import { AddBlogForm } from '../components/AddBlogForm'

test('<AddBlogForm/> updates parent state and calls onSubmit', () => {
  const addBlog = vi.fn()

  const component = render(
    <AddBlogForm/>
  )
})