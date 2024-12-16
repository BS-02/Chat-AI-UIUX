import { render, screen } from "@testing-library/react";
import Article from "../components/article/Article.jsx";
import CTA from "../components/cta/CTA.jsx";
import Feature from "../components/feature/Feature.jsx";
import Navbar from "../components/navbar/Navbar.jsx";

describe("Components Test Suite", () => {
  // Article Component Test
  describe("Article Component", () => {
    test("renders the Article component", () => {
      render(<Article text="Article" />);
      expect(screen.getByText("Read Full Article")).toBeInTheDocument();
    });
  });

  // CTA Component Test
  describe("CTA Component", () => {
    test("renders the CTA button", () => {
      render(<CTA />);
      expect(
        screen.getByRole("button", { name: /Get Started/i })
      ).toBeInTheDocument();
    });
  });

  // Feature Component Test
  describe("Feature Component", () => {
    test("renders Feature with a title", () => {
      render(<Feature title="Feature Title" />);
      expect(screen.getByText("Feature Title")).toBeInTheDocument();
    });
  });

  // Navbar Component Test
  describe("Navbar Component", () => {
    test("renders the Navbar component with navigation links", () => {
      render(<Navbar />);
      expect(screen.getByRole("navigation")).toBeInTheDocument(); // This assumes role="navigation" is present
    });
  });
});
