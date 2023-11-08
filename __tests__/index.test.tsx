/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import Home from '@pages/index.jsx'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Hello, I'm Minh/i
    })

    expect(heading).toBeInTheDocument()
  })
})
