import TravelGroupsGrid from './TravelGroupsGrid';

const TravelGroupsSection = () => {
  const travelGroups = [
    {
      id: 1,
      destination: "UAE Groups",
      description: "Explore Dubai with group discounts"
    },
    {
      id: 2,
      destination: "KSA Groups",
      description: "Travel to Saudi Arabia with exclusive rates"
    },
    {
      id: 3,
      destination: "Umrah Groups",
      description: "Special packages for your spiritual journey"
    },
    {
      id: 4,
      destination: "Muscat Groups",
      description: "Discover the beauty of Oman"
    },
    {
      id: 5,
      destination: "Qatar Groups",
      description: "Experience Qatar's modern marvels"
    },
    {
      id: 6,
      destination: "Bahrain Groups",
      description: "Discover Bahrain's rich culture"
    },
    {
      id: 7,
      destination: "UK Groups",
      description: "Explore the United Kingdom"
    },
    {
      id: 8,
      destination: "All Groups",
      description: "Browse all available destinations"
    }
  ];

  return (
    <section className="travel-groups-section">
      <div className="section-header">
        <h2 className="section-title">Welcome To Al Saqib Travel & Tours</h2>
        <p className="section-subtitle">Explore our curated group travel packages</p>
      </div>
      
      <TravelGroupsGrid groups={travelGroups} />
    </section>
  );
};

export default TravelGroupsSection;