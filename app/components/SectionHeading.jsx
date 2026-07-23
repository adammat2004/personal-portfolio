const SectionHeading = ({ index, children }) => {
  return (
    <div className="section-heading">
      <p className="section-kicker">{index}</p>
      <h2 className="section-title">{children}</h2>
    </div>
  );
};

export default SectionHeading;
