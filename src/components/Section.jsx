import { useDispatch } from "react-redux";

import { useState } from "react";
import { addCard } from "../features/boards/boardsSlice";
import { useParams } from "react-router-dom";
import CardContainer from "./CardContainer";

const Section = ({ section, index }) => {
  const dispatch = useDispatch();
  const { id: boardId } = useParams();
  const [cardContent, setCardContent] = useState("");

  const handleAddCard = () => {
    if (cardContent.trim()) {
      dispatch(addCard({ boardId, content: cardContent }));
      setCardContent("");
    }
  };

  return (
    <div className="bg-gray-200 p-3 rounded shadow-md hover:bg-red-100">
      <h2 className="font-bold text-base mb-2">{section.name}</h2>

      <CardContainer section={section} />

      {section.name === "To Do" && (
        <div className="mt-2">
          <input
            type="text"
            value={cardContent}
            onChange={(e) => setCardContent(e.target.value)}
            placeholder="New card content"
            className="p-1 border rounded w-full"
          />
          <button
            onClick={handleAddCard}
            className="mt-1 p-1 w-full bg-blue-500 text-white rounded"
          >
            + Add Card
          </button>
        </div>
      )}
    </div>
  );
};

export default Section;
