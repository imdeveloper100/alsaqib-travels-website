import TravelGroupCard from "./TravelGroupCard";

const TravelGroupsGrid = ({ groups }) => {
    return (
      <div className="groups-grid">
        {groups.map((group) => (
          <TravelGroupCard
            key={group.id}
            destination={group.destination}
            description={group.description}
          />
        ))}
      </div>
    );
  };
  
  export default TravelGroupsGrid;