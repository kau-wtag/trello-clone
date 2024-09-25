import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const defaultSections = [
  { id: uuidv4(), name: "To Do", cards: [] },
  { id: uuidv4(), name: "In Progress", cards: [] },
  { id: uuidv4(), name: "In Review", cards: [] },
  { id: uuidv4(), name: "Completed", cards: [] },
  { id: uuidv4(), name: "Archived", cards: [] },
];

const initialState = {
  boards: [
    {
      id: uuidv4(),
      name: "Project A",
      sections: [
        {
          id: uuidv4(),
          name: "To Do",
          cards: [
            { id: uuidv4(), content: "Sing" },
            { id: uuidv4(), content: "Dance" },
          ],
        },
        { id: uuidv4(), name: "In Progress", cards: [] },
        { id: uuidv4(), name: "In Review", cards: [] },
        { id: uuidv4(), name: "Completed", cards: [] },
        { id: uuidv4(), name: "Archived", cards: [] },
      ],
    },
  ],
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

      const board = state.boards.find((board) => boardId === board.id);
      if (board) {
        const section = board.sections.find(
          (section) => sectionId === section.id
        );
        if (section) {
          section.cards = section.cards.filter((card) => card.id !== cardId);
        }
      }
    },

    moveCard: (state, action) => {
      const { boardId, results } = action.payload;

      if (!results.destination) return;

      const board = state.boards.find((board) => boardId === board.id);
      if (!board) return;

      const sourceSectionId = results.source.droppableId;
      const sourceCardIndex = results.source.index;
      const destinationSectionId = results.destination.droppableId;
      const destinationCardIndex = results.destination.index;

      const sourceSection = board.sections.find(
        (section) => section.id === sourceSectionId
      );
      const destinationSection = board.sections.find(
        (section) => section.id === destinationSectionId
      );

      if (!sourceSection || !destinationSection) return;

      if (sourceSectionId === destinationSectionId) {
        const [movedCard] = sourceSection.cards.splice(sourceCardIndex, 1);
        sourceSection.cards.splice(destinationCardIndex, 0, movedCard);
      } else {
        const [movedCard] = sourceSection.cards.splice(sourceCardIndex, 1);
        destinationSection.cards.splice(destinationCardIndex, 0, movedCard);
      }
    },
  },
});

export const { addBoard, addCard, deleteCard, moveCard } = boardsSlice.actions;
export default boardsSlice.reducer;
