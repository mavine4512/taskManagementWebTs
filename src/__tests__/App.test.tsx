import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import Main from '../pages/main';

// Mock the Main component
jest.mock('../pages/main', () => () => <div data-testid="main-component">Main Component</div>);

test('renders App component', () => {
  render(<App />);
  
  // Check if the App component renders the Main component
  const mainElement = screen.getByTestId('main-component');
  expect(mainElement).toBeInTheDocument();
});