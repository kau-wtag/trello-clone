import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { describe, expect, it } from "vitest";

describe("Navbar", () => {
  it("should render the Navbar with title", () => {
    render(<Navbar />);
    expect(screen.getByText(/Trello Clone/i)).toBeInTheDocument();
  });
});
