import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";

const App = () => {
  const boards = [
    { id: 1, name: "Project A" },
    { id: 2, name: "Project B" },
    { id: 3, name: "Project C" },
  ];

  const [selectedBoard, setSelectedBoard] = useState(boards[0]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />
      <div className="flex flex-grow ">
        <Sidebar
          boards={boards}
          selectedBoard={selectedBoard}
          onSelectBoard={setSelectedBoard}
        />
        <main className="flex-grow p-4">
          <Board selectedBoard={selectedBoard} />{" "}
        </main>
      </div>
    </div>
  );
};

export default App;
