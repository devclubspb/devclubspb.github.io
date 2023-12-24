import { render, screen } from '@testing-library/react'
import App from './App'

test('renders devclubspb', () => {
  render(<App />)
  const linkElement = screen.getByText(/devclubspb/i)
  expect(linkElement).toBeInTheDocument()
})
