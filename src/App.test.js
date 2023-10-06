// Import the necessary libraries for testing
import { render, screen } from '@testing-library/react';
import App from './App';

// Define a test case that checks if the "learn react" link is present
test('renders learn react link', () => {
  
  // Render the App component
  render(<App />);

  // Find an element with the text "learn react" (case-insensitive)
  const linkElement = screen.getByText(/learn react/i);

  // Check if the element is present in the rendered component
  expect(linkElement).toBeInTheDocument();
});
