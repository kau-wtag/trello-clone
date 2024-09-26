import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Board from "../components/Board";
import { store } from "../app/store";
import { addBoard } from "../features/boards/boardsSlice";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeAll, describe, expect, it } from "vitest";

describe("Board", () => {
  const boardName = "Sample Board";
  const boardId = "test-board";

  beforeAll(() => {
    store.dispatch(addBoard(boardName));
  });

  it("should render 'Board not found' if board doesn't exist", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/board/invalid-id`]}>
          <Routes>
            <Route path="/board/:id" element={<Board />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Board not found/i)).toBeInTheDocument();
  });

  it("should render the board with its sections", () => {
    render(
      <Provider store={store}>
        <MemoryRouter
          initialEntries={[`/board/${store.getState().boards.boards[0].id}`]}
        >
          <Routes>
            <Route path="/board/:id" element={<Board />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(boardName)).toBeInTheDocument();
    expect(screen.getByText("To Do")).toBeInTheDocument();
  });
});
