const TravelGroupCard = ({ destination, description }) => {
  return (
    <div className="group-card">
      <h3 className="group-card-title">{destination}</h3>
      <p className="group-card-description">{description}</p>
      <div className="group-card-overlay">
        <span className="group-card-action">View Packages</span>
      </div>
    </div>
  );
};

export default TravelGroupCard;