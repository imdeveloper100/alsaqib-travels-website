import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DestinationCard({ destination }) {
  return (
    <Link href={`/groups/${destination.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={destination.image || "/placeholder.svg"}
            alt={destination.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-orange-500 transition-colors">
                {destination.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {destination.description}
              </p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* Decorative accent line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
      </div>
    </Link>
  );
}
