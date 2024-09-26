import { render, screen } from "@testing-library/react";
import Card from "../components/Card";
import { describe, expect, it } from "vitest";

describe("Card Component", () => {
  it("should render the card content correctly", () => {
    const cardContent = "Test Card Content";

    render(<Card card={cardContent} />);

    expect(screen.getByText(cardContent)).toBeInTheDocument();
  });
});
