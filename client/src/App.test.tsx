import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders App component', () => {
  render(<App />)
  // Use queries from `@testing-library/react` to assert on component output
  expect(screen.getByText('Has my email been involved in any data breach?')).toBeInTheDocument()
})
