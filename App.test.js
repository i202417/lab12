import { render, screen } from '@testing-library/react';
import App from './App';

test('checks whether the component is being displayed on the screen or not.', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
});

test('checks whether “Hello world” is being displayed on the screen or not.', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("Hello World");
});

test('checks whether an item is present in that list on the screen or not.', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toHaveTextContent("Pizza");
});
