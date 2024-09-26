import { useDispatch } from "react-redux";

import { useState } from "react";
import { addCard } from "../features/boards/boardsSlice";
import { useParams } from "react-router-dom";
import CardContainer from "./CardContainer";
import { Droppable } from "react-beautiful-dnd";

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
    <Droppable droppableId={section.id} type="CARD">
      {(provided, snapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="bg-gray-200 p-3 rounded shadow-md hover:ring-2 hover:ring-red-300 hover:ring-inset"
        >
          <h2 className="font-bold text-base mb-2">{section.name}</h2>

          <CardContainer section={section} />

          {section.name === "To Do" && (
            <div className="mt-5 rounded-md overflow-hidden">
              <input
                type="text"
                value={cardContent}
                onChange={(e) => setCardContent(e.target.value)}
                placeholder="New card content..."
                className="p-1 pl-2 border w-full"
              />
              <button
                onClick={handleAddCard}
                className=" p-1 w-full bg-blue-500 text-white"
              >
                + Add Card
              </button>
            </div>
          )}
        </div>
      )}
    </Droppable>
  );
};

export default Section;
