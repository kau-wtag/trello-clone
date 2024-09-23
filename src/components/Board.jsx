import Section from "./Section";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Board = () => {
  const { id } = useParams();
  const board = useSelector((state) =>
    state.boards.boards.find((board) => board.id === Number(id))
  );
  const sections = ["To Do", "In Progress", "Review", "Completed", "Archived"];

  if (!board) {
    return <div>Board not found</div>;
  }

  return (
    <div className="board grid grid-cols-5 gap-4 p-4">
      <h2 className="col-span-5 text-2xl font-bold mb-4">Board {board.name}</h2>
      {sections.map((section, index) => (
        <Section key={index} title={section} />
      ))}
    </div>
  );
};

export default Board;
