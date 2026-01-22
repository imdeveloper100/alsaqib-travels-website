import { Plane } from "lucide-react";
import DestinationCard from "./DestinationCard";
import { destinations } from "../lib/data";

export default function Destinations() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-orange-600 mb-4">
            <Plane className="h-4 w-4" />
            <span className="text-sm font-medium">Popular Destinations</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-indigo-600">
              Travel Groups
            </span>
          </h2>
          <div className="max-w-2xl mx-auto mt-4">
            <p className="text-muted-foreground text-center text-lg">
              Choose from our carefully curated group travel packages to your
              favorite destinations with exclusive discounts and seamless booking.
            </p>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
}
