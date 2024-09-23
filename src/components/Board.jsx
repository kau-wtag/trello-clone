import React from "react";
import Section from "./Section";

const Board = ({ selectedBoard }) => {
  const sections = ["To Do", "In Progress", "Review", "Completed", "Archived"];

  return (
    <div className="board grid grid-cols-5 gap-4 p-4">
      <h2 className="col-span-5 text-2xl font-bold mb-4">
        Board {selectedBoard.name}
      </h2>
      {sections.map((section, index) => (
        <Section key={index} title={section} />
      ))}
    </div>
  );
};

export default Board;
