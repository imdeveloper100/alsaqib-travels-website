import {
  Calendar,
  Luggage,
  Utensils,
  Users,
  Plane,
} from "lucide-react";

export default function FlightCard({ flight }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-PK").format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      {/* Header with airline info */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Plane className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-white font-medium">{flight.airlineName}</p>
            <p className="text-indigo-200 text-sm">{flight.flight}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-indigo-200 text-xs">Flight ID</p>
          <p className="text-white font-mono text-sm">{flight.id}</p>
        </div>
      </div>

      {/* Flight Details */}
      <div className="p-5">
        {/* Route */}
        <div className="flex items-center justify-between mb-5">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">
              {flight.sector.split("-")[0]}
            </p>
            <p className="text-sm text-muted-foreground">{flight.departureTime}</p>
          </div>

          <div className="flex-1 px-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-full h-px bg-slate-200" />
              <div className="relative flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-indigo-600" />
                <div className="px-3 py-1 bg-slate-100 rounded-full">
                  <Plane className="h-4 w-4 text-indigo-600 rotate-90" />
                </div>
                <div className="w-2 h-2 rounded-full bg-orange-500" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">
              {flight.sector.split("-")[1]}
            </p>
            <p className="text-sm text-muted-foreground">{flight.arrivalTime}</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          <div className="flex items-center gap-2 text-sm bg-slate-50 rounded-lg p-2">
            <Calendar className="h-4 w-4 text-indigo-500" />
            <span className="text-muted-foreground">{flight.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm bg-slate-50 rounded-lg p-2">
            <Luggage className="h-4 w-4 text-indigo-500" />
            <span className="text-muted-foreground">{flight.baggage}</span>
          </div>
          <div className="flex items-center gap-2 text-sm bg-slate-50 rounded-lg p-2">
            <Utensils className="h-4 w-4 text-indigo-500" />
            <span
              className={flight.meal ? "text-green-600" : "text-red-500"}
            >
              {flight.meal ? "Included" : "No Meal"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm bg-slate-50 rounded-lg p-2">
            <Users className="h-4 w-4 text-indigo-500" />
            <span className="text-muted-foreground">
              {flight.seatsAvailable} seats
            </span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-2xl font-bold text-orange-500">
              {flight.currency} {formatPrice(flight.price)}
            </p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 shadow-lg shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
