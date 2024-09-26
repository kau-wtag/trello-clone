import { describe, expect, it } from "vitest";
import reducer, { addBoard } from "../features/boards/boardsSlice";

describe("boardsSlice", () => {
  const initialState = {
    boards: [],
  };

  it("should handle initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle adding a board", () => {
    const boardName = "Test Board";
    const newState = reducer(initialState, addBoard(boardName));
    expect(newState.boards.length).toBe(1);
    expect(newState.boards[0].name).toBe(boardName);
  });
});
