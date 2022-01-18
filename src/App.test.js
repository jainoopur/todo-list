import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// RED - GREEN - Refactor
test('renders correctly', () => {
  render(<App />);
  expect(screen.getByText('todo')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Eg. build a web app'));
})

test('allows user to add a todo list item', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Eg. build a web app');
  userEvent.type(inputElement, 'Build a todo list');
  userEvent.keyboard('[Enter]');

  expect(screen.getByText('Build a todo list')).toBeInTheDocument();
})

// allows user to remove an item from to-do list
