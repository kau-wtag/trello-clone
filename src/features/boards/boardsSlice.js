import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [
    { id: 1, name: "Project A" },
    { id: 2, name: "Project B" },
    { id: 3, name: "Project C" },
  ],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const newBoard = {
        id: state.boards.length + 1,
        name: action.payload,
      };
      state.boards.push(newBoard);
    },
  },
});

export const { addBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
