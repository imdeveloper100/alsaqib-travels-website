import TravelGroupsSection from "../components/travel-groups/TravelGroupsSection";

export const metadata = {
  title: "Tickets - Al Saqib Travels",
  description: "Buy tickets for your travel with Al Saqib Travels",
};


export default function Tickets() {
  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <TravelGroupsSection />
    </main>
  );
}