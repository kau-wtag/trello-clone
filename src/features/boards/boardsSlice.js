import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; // Import UUID library

// Default sections template
const defaultSections = [
  { id: uuidv4(), name: "To Do", cards: [] },
  { id: uuidv4(), name: "In Progress", cards: [] },
  { id: uuidv4(), name: "In Review", cards: [] },
  { id: uuidv4(), name: "Completed", cards: [] },
  { id: uuidv4(), name: "Archived", cards: [] },
];

const initialState = {
  boards: [],
};

const boardsSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const newBoard = {
        id: uuidv4(),
        name: action.payload,
        sections: defaultSections.map((section) => ({
          ...section,
          cards: [],
        })),
      };
      state.boards.push(newBoard);
    },
    addCard: (state, action) => {
      const { boardId, content } = action.payload;
      const board = state.boards.find((board) => board.id === boardId);
      if (board) {
        const firstSection = board.sections[0];
        firstSection.cards.push({ id: uuidv4(), content });
      }
    },
    deleteCard: (state, action) => {
      const { boardId, sectionId, cardId } = action.payload;

      const board = state.boards.find((board) => boardId == board.id);
      if (board) {
        const section = board.sections.find(
          (section) => sectionId === section.id
        );
        if (section) {
          section.cards = section.cards.filter((card) => card.id !== cardId);
        }
      }
    },
  },
});

export const { addBoard, addCard, deleteCard } = boardsSlice.actions;
export default boardsSlice.reducer;
