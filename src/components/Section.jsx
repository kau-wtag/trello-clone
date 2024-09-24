import { useDispatch } from "react-redux";
import Card from "./Card";

import { useState } from "react";
import { addCard, deleteCard } from "../features/boards/boardsSlice";

const Section = ({ section, boardId }) => {
  const [cardContent, setCardContent] = useState("");
  const dispatch = useDispatch();

  const handleAddCard = () => {
    if (cardContent.trim()) {
      dispatch(addCard({ boardId, content: cardContent }));
      setCardContent("");
    }
  };
  const handleDeleteCard = (cardId) => {
    dispatch(deleteCard({ boardId, sectionId: section.id, cardId }));
  };

  return (
    <div className="bg-gray-200 p-3 rounded shadow-md">
      <h2 className="font-bold text-base mb-2">{section.name}</h2>
      <div className="">
        {section.cards.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            onDelete={() => handleDeleteCard(card.id)}
          />
        ))}
      </div>

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
