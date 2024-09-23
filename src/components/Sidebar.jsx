import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addBoard, selectBoard } from "../features/boards/boardsSlice";

const Sidebar = () => {
  const boards = useSelector((state) => state.boards.boards);
  const selectedBoard = useSelector((state) => state.boards.selectedBoard);

  const dispatch = useDispatch();
  const [boardName, setBoardName] = useState("");

  const handleAddBoard = () => {
    if (boardName.trim()) {
      dispatch(addBoard(boardName));
      setBoardName("");
    }
  };

  return (
    <aside className="sidebar w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Boards</h2>
      <ul>
        {boards.map((board) => (
          <li key={board.id} className="mb-2">
            <button
              onClick={() => dispatch(selectBoard(board))}
              className={`w-full text-left p-2 rounded ${
                selectedBoard.id === board.id
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {board.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
          placeholder="New board name"
          className="p-2 border rounded w-full"
        />
        <button
          onClick={handleAddBoard}
          className="w-full mt-2 p-2 bg-green-500 text-white rounded"
        >
          Add Board
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
