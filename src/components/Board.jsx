import Section from "./Section";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Board = () => {
  const { id } = useParams();
  const board = useSelector((state) =>
    state.boards.boards.find((board) => board.id === id)
  );

  if (!board) {
    return <div>Board not found</div>;
  }

  return (
    <div className="board grid grid-cols-5 gap-4 p-4">
      <h2 className="col-span-5 text-2xl font-bold mb-4">{board.name}</h2>
      {board.sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  );
};

export default Board;
