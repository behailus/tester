import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("linkTestId");
  expect(linkElement).toBeInTheDocument();
});

test("the url of the link is reactjs.org", ()=>{
  render(<App/>);
  const linkElement = screen.getByTestId("linkTestId");
  expect(linkElement.href).toContain("reactjs.org");
});