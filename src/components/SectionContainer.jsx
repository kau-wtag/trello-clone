// SectionContainer.jsx
import { Droppable } from "react-beautiful-dnd";
import Section from "./Section";

// function Section({ section, boardId, index }) {
//   return (
//     <Draggable draggableId={section.id} index={index}>
//       {(provided) => (
//         <div
//           {...provided.dragHandleProps}
//           {...provided.draggableProps}
//           ref={provided.innerRef}
//           className="bg-gray-200 p-3 rounded shadow-md"
//         >
//           <h2 className="font-bold text-base mb-2">{section.name}</h2>
//         </div>
//       )}
//     </Draggable>
//   );
// }

const SectionContainer = ({ sections }) => {
  return (
    <Droppable droppableId={"Section Container"} type="task">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-4"
        >
          {sections.map((section, index) => (
            <Section key={section.id} section={section} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default SectionContainer;
