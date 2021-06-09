import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
  const headerElement = screen.getByText(/Welcome to the Pokedex!/i);
  expect(headerElement).toBeInTheDocument();
});
