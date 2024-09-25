import React from "react";
import { useDispatch } from "react-redux";
import { deleteCard } from "../features/boards/boardsSlice";
import { useParams } from "react-router-dom";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";

export default function CardContainer({ section }) {
  const { id: boardId } = useParams();
  const dispatch = useDispatch();

  const handleDeleteCard = (cardId) => {
    dispatch(deleteCard({ boardId, sectionId: section.id, cardId }));
  };
  return (
    <Droppable droppableId={section.id} type="CARD">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={`${section.cards.length === 0 ? "min-h-10" : ""}`}
        >
          {section.cards.map((card, index) => (
            <Card
              key={card.id}
              card={card}
              index={index}
              onDelete={() => handleDeleteCard(card.id)}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
