import React from "react";
import { render, screen } from "@testing-library/react"; // Import React Testing Library utilities
import App from "../App.js"; // Import the App component

describe("App Component", () => {
  it("should render 'Unlock the Future with OpenAI' text", () => {
    // Render the App component
    render(<App />);

    // Find the element with text matching "learn react"
    const linkElement = screen.getByText(/Unlock the Future with OpenAI/i);

    // Assert that the element is present in the document
    expect(linkElement).toBeInTheDocument();
  });
});