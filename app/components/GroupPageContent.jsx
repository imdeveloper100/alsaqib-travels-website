"use client";

import { useState, useMemo } from "react";
import { Filter, Plane, SearchX } from "lucide-react";
// import { Button } from "@/components/ui/button";
import FlightFilters from "./FlightFilters";
import FlightCard from "./FlightCard";
import GroupTabs from "./GroupTabs";
import { airlines, sectors, flightsData } from "../lib/data";

export default function GroupsPageContent({ groupId, groupName }) {
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Get flights for this group
  const flights = flightsData[groupId] || [];

  // Get unique airlines and sectors from flights
  const availableAirlines = useMemo(() => {
    const airlineIds = [...new Set(flights.map((f) => f.airline))];
    return airlines.filter((a) => airlineIds.includes(a.id));
  }, [flights]);

  const availableSectors = useMemo(() => {
    const sectorIds = [...new Set(flights.map((f) => f.sector.toLowerCase()))];
    return sectors.filter((s) => sectorIds.includes(s.id));
  }, [flights]);

  // Filter flights
  const filteredFlights = useMemo(() => {
    return flights.filter((flight) => {
      const airlineMatch =
        selectedAirlines.length === 0 ||
        selectedAirlines.includes(flight.airline);
      const sectorMatch =
        selectedSectors.length === 0 ||
        selectedSectors.includes(flight.sector.toLowerCase());
      return airlineMatch && sectorMatch;
    });
  }, [flights, selectedAirlines, selectedSectors]);

  const handleAirlineChange = (airlineId, checked) => {
    setSelectedAirlines((prev) =>
      checked ? [...prev, airlineId] : prev.filter((id) => id !== airlineId)
    );
  };

  const handleSectorChange = (sectorId, checked) => {
    setSelectedSectors((prev) =>
      checked ? [...prev, sectorId] : prev.filter((id) => id !== sectorId)
    );
  };

  const clearFilters = () => {
    setSelectedAirlines([]);
    setSelectedSectors([]);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center gap-3 text-indigo-200 mb-3">
            <Plane className="h-5 w-5" />
            <span className="text-sm font-medium">Group Travel Packages</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {groupName}
          </h1>
          <p className="text-indigo-200 max-w-2xl">
            Find the best group travel deals with exclusive discounts. Book your
            seats now and travel with comfort.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <GroupTabs />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters */}
          <FlightFilters
            airlines={availableAirlines}
            sectors={availableSectors}
            selectedAirlines={selectedAirlines}
            selectedSectors={selectedSectors}
            onAirlineChange={handleAirlineChange}
            onSectorChange={handleSectorChange}
            onClearFilters={clearFilters}
            isMobileOpen={isMobileFiltersOpen}
            onMobileClose={() => setIsMobileFiltersOpen(false)}
          />

          {/* Flights List */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Available Flights
                </h2>
                <p className="text-sm text-muted-foreground">
                  {filteredFlights.length} flight
                  {filteredFlights.length !== 1 ? "s" : ""} found
                </p>
              </div>
              <button
                variant="outline"
                className="lg:hidden flex items-center gap-2 bg-transparent"
                onClick={() => setIsMobileFiltersOpen(true)}
              >
                <Filter className="h-4 w-4" />
                Filters
                {(selectedAirlines.length > 0 || selectedSectors.length > 0) && (
                  <span className="ml-1 w-5 h-5 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center">
                    {selectedAirlines.length + selectedSectors.length}
                  </span>
                )}
              </button>
            </div>

            {/* Flights Grid */}
            {filteredFlights.length > 0 ? (
              <div className="grid gap-4">
                {filteredFlights.map((flight) => (
                  <FlightCard key={flight.id} flight={flight} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
                <SearchX className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No Flights Found
                </h3>
                <p className="text-muted-foreground mb-4">
                  {flights.length === 0
                    ? "No flights available for this destination yet."
                    : "Try adjusting your filters to see more results."}
                </p>
                {flights.length > 0 && (
                  <button
                    variant="outline"
                    onClick={clearFilters}
                    className="text-indigo-600 border-indigo-200 hover:bg-indigo-50 bg-transparent"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
