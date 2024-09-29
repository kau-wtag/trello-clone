import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { FaArrowRight, FaEllipsisV, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { moveCardFromMenu } from "../features/boards/boardsSlice";

const Card = ({ card, onDelete, sectionId, index }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [showMenu, setShowMenu] = useState(false);

  const board = useSelector((state) =>
    state.boards.boards.find((board) => board.id === id)
  );

  const handleMoveTo = (destinationSectionId) => {
    dispatch(
      moveCardFromMenu({
        boardId: id,
        sourceSectionId: sectionId,
        destinationSectionId,
        cardId: card.id,
      })
    );
    setShowMenu(false);
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={`bg-white p-2 rounded shadow-sm mb-2 cursor-pointer flex justify-between items-center ${
            snapshot.isDragging ? "shadow-2xl ring-2 ring-inset" : ""
          }`}
          style={{
            ...provided.draggableProps.style,
          }}
        >
          <span>{card.content}</span>

          {/* Show Menu */}
          <div className="relative">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="focus:outline-none rounded-full flex justify-center items-center p-2 text-gray-500 hover:bg-gray-200"
            >
              <FaEllipsisV size={15} />
            </button>

            {showMenu && (
              <div
                className="grid grid-col gap-1 bg-gray-100 p-2 rounded-md absolute z-10 w-max translate-x-5 shadow-md"
                onMouseLeave={() => setShowMenu(false)}
              >
                <button
                  onClick={onDelete}
                  className="text-red-500 bg-red-100 hover:bg-red-200 p-2 text-center flex justify-between items-center"
                >
                  <span>Delete</span> <FaTrash />
                </button>
                <div className="p-2 bg-gray-200 flex items-center gap-2 justify-between">
                  <span>Move To </span> <FaArrowRight />
                </div>
                {board.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleMoveTo(section.id)}
                    className="hover:bg-gray-200 p-2 pl-3 text-start border-l-2 border-gray-400"
                  >
                    {section.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
