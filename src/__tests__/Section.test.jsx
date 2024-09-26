import { render, screen } from "@testing-library/react";
import Section from "../components/Section";
import { describe, expect, it } from "vitest";

describe("Section", () => {
  const section = {
    name: "Test Section",
    cards: ["Card 1", "Card 2"],
  };

  it("should render the section name and its cards", () => {
    render(<Section section={section} />);
    expect(screen.getByText(/Test Section/i)).toBeInTheDocument();
    expect(screen.getByText(/Card 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Card 2/i)).toBeInTheDocument();
  });
});
