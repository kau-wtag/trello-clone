import Card from "./Card";

const Section = ({ section }) => {
  return (
    <div className="bg-gray-200 p-3 rounded shadow-md">
      <h2 className="font-bold text-base mb-2">{section.name}</h2>
      <div className="">
        {section.cards.map((card, index) => (
          <Card key={card} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Section;
