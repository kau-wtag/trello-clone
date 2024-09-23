// src/__tests__/App.test.jsx
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  it("renders Navbar, Sidebar, and Main components", () => {
    render(<App />);

    // Check if Navbar, Sidebar, and Main elements are rendered
    const navbarElement = screen.getByRole("navigation");
    const sidebarElement = screen.getByRole("complementary");
    const mainElement = screen.getByRole("main");

    expect(navbarElement).toBeInTheDocument(); // Use jest-dom matcher
    expect(sidebarElement).toBeInTheDocument();
    expect(mainElement).toBeInTheDocument();
  });
});
