// Board.jsx
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import SectionContainer from "./SectionContainer";
import { useDispatch } from "react-redux";
import { moveCard } from "../features/boards/boardsSlice";

const Board = () => {
  const dispatch = useDispatch(0);
  const { id } = useParams();
  const board = useSelector((state) =>
    state.boards.boards.find((board) => board.id === id)
  );

  if (!board) {
    return <div className="text-red-500 text-center mt-4">Board not found</div>;
  }

  const handleDragEnd = (results) => {
    dispatch(moveCard({ boardId: id, results }));
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        {board.name}
      </h2>
      <SectionContainer sections={board.sections} />
    </DragDropContext>
  );
};

export default Board;
