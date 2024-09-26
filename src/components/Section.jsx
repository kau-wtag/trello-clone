import { useDispatch } from "react-redux";

import { useState } from "react";
import { addCard } from "../features/boards/boardsSlice";
import { useParams } from "react-router-dom";
import CardContainer from "./CardContainer";
import { Droppable } from "react-beautiful-dnd";
import { FaPlus } from "react-icons/fa";

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
    <div className="self-start">
      <Droppable droppableId={section.id} type="CARD">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`bg-gray-200 p-3 rounded shadow-md  ${
              snapshot.isDraggingOver ? "ring-2 ring-red-300 ring-inset" : ""
            }`}
          >
            <h2 className="font-bold text-base mb-2">{section.name}</h2>

            <CardContainer section={section} />
            {index === 0 && (
              <div className="flex rounded-sm overflow-hidden">
                <input
                  type="text"
                  value={cardContent}
                  onChange={(e) => setCardContent(e.target.value)}
                  placeholder="New card content..."
                  required
                  className="p-1 pl-2  w-full flex-grow"
                />
                <button
                  onClick={handleAddCard}
                  className={`p-2 px-3 flex bg-blue-500 hover:bg-blue-600 text-white ${
                    cardContent ? "focus:red-500" : ""
                  }`}
                >
                  <FaPlus />
                </button>
              </div>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Section;
