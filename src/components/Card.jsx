const Card = ({ card, onDelete }) => {
  return (
    <div className="bg-white p-2 rounded shadow-sm mb-2 cursor-pointer flex justify-between items-center">
      <span>{card.content}</span>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 ml-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
