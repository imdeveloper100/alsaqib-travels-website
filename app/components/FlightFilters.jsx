"use client";

import { Filter, X } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

export default function FlightFilters({
  airlines,
  sectors,
  selectedAirlines,
  selectedSectors,
  onAirlineChange,
  onSectorChange,
  onClearFilters,
  isMobileOpen,
  onMobileClose,
}) {
  const hasActiveFilters =
    selectedAirlines.length > 0 || selectedSectors.length > 0;

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Filters Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 lg:top-24 left-0 h-full lg:h-fit w-80 lg:w-72
          bg-white lg:bg-white/80 lg:backdrop-blur-sm rounded-none lg:rounded-2xl
          shadow-xl lg:shadow-lg border-0 lg:border border-slate-200
          transform transition-transform duration-300 z-50 lg:z-auto
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          overflow-y-auto max-h-screen lg:max-h-[calc(100vh-120px)]
        `}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white lg:bg-transparent p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-600">
            <Filter className="h-5 w-5" />
            <h3 className="font-semibold text-lg">Filters</h3>
          </div>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 text-xs"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onMobileClose}
              className="lg:hidden p-1 hover:bg-slate-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-5 space-y-6">
          {/* Airlines Filter */}
          <div>
            <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-indigo-500 rounded-full" />
              Select Airlines
            </h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <Checkbox
                  checked={selectedAirlines.length === airlines.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      airlines.forEach((a) => onAirlineChange(a.id, true));
                    } else {
                      airlines.forEach((a) => onAirlineChange(a.id, false));
                    }
                  }}
                  className="border-slate-300 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                />
                <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                  Select All
                </span>
              </label>
              <div className="h-px bg-slate-100" />
              {airlines.map((airline) => (
                <label
                  key={airline.id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <Checkbox
                    checked={selectedAirlines.includes(airline.id)}
                    onCheckedChange={(checked) =>
                      onAirlineChange(airline.id, checked)
                    }
                    className="border-slate-300 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {airline.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Sectors Filter */}
          <div>
            <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
              <span className="w-1 h-4 bg-orange-500 rounded-full" />
              Select Sectors
            </h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer group">
                <Checkbox
                  checked={selectedSectors.length === sectors.length}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      sectors.forEach((s) => onSectorChange(s.id, true));
                    } else {
                      sectors.forEach((s) => onSectorChange(s.id, false));
                    }
                  }}
                  className="border-slate-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                  Select All
                </span>
              </label>
              <div className="h-px bg-slate-100" />
              {sectors.map((sector) => (
                <label
                  key={sector.id}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <Checkbox
                    checked={selectedSectors.includes(sector.id)}
                    onCheckedChange={(checked) =>
                      onSectorChange(sector.id, checked)
                    }
                    className="border-slate-300 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                  />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {sector.id.toUpperCase()}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
