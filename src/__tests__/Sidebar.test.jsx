import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Sidebar from "../components/Sidebar";
import { store } from "../app/store";
import { addBoard } from "../features/boards/boardsSlice";
import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

describe("Sidebar", () => {
  const renderSidebar = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </Provider>
    );

  it("should render the Sidebar title", () => {
    renderSidebar();
    expect(screen.getByText(/Boards/i)).toBeInTheDocument();
  });

  it("should display boards from the Redux state", () => {
    store.dispatch(addBoard("Test Board"));
    renderSidebar();
    expect(screen.getByText(/Test Board/i)).toBeInTheDocument();
  });

  it("should add a new board when 'Add Board' button is clicked", () => {
    renderSidebar();
    const input = screen.getByPlaceholderText(/New board name/i);
    fireEvent.change(input, { target: { value: "New Board" } });
    fireEvent.click(screen.getByText("+ Add Board"));
    expect(screen.getByText(/New Board/i)).toBeInTheDocument();
  });
});
