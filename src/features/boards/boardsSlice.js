import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: [
    { id: 1, name: "Project A" },
    { id: 2, name: "Project B" },
    { id: 3, name: "Project C" },
  ],
  selectedBoard: { id: 1, name: "Project A" },
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
    selectBoard: (state, action) => {
      state.selectedBoard = action.payload;
    },
  },
});

export const { addBoard, selectBoard } = boardsSlice.actions;
export default boardsSlice.reducer;
