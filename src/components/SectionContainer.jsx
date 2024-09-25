import Section from "./Section";

const SectionContainer = ({ sections }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 p-4">
      {sections.map((section, index) => (
        <Section key={section.id} section={section} index={index} />
      ))}
    </div>
  );
};

export default SectionContainer;
