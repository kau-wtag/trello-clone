const Card = ({ card }) => {
  return (
    <div className="bg-white p-2 rounded shadow-sm mb-2 cursor-pointer">
      {card.content}
    </div>
  );
};

export default Card;
