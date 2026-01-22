"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { destinations } from "../lib/data";

export default function GroupTabs() {
  const pathname = usePathname();

  // Reorder to put "All Groups" first
  const orderedDestinations = [
    destinations.find((d) => d.id === "all"),
    ...destinations.filter((d) => d.id !== "all"),
  ];

  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 p-1 min-w-max">
        {orderedDestinations.map((dest) => {
          const isActive = pathname === `/groups/${dest.slug}`;
          return (
            <Link
              key={dest.id}
              href={`/groups/${dest.slug}`}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                whitespace-nowrap
                ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:text-indigo-600"
                }
              `}
            >
              {dest.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
