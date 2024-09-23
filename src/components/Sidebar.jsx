import React from "react";

const Sidebar = ({ boards, selectedBoard, onSelectBoard }) => {
  
  return (
    <aside className="sidebar w-64 bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-4">Boards</h2>
      <ul>
        {boards.map((board) => (
          <li key={board.id} className="mb-2">
            <button
              onClick={() => onSelectBoard(board)}
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
    </aside>
  );
};

export default Sidebar;
