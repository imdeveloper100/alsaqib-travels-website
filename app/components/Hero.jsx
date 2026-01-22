"use client"

import Image from "next/image"
import { MapPin, Plane } from "lucide-react"

const travelImages = [
  { src: "/images/travel-sailing.jpg", alt: "Woman on sailing boat" },
  { src: "/images/travel-dubai.jpg", alt: "Burj Al Arab Dubai" },
  { src: "/images/travel-couple.jpg", alt: "Couple watching sunset" },
  { src: "/images/travel-cabin.jpg", alt: "Mountain cabin retreat" },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-8 md:px-12 lg:px-20">
      {/* Background gradient */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-gradient-to-b from-indigo-100/70 via-purple-50/50 to-transparent" />

      {/* Decorative curved dotted lines */}
      <svg
        className="absolute left-0 top-32 -z-10 hidden h-[400px] w-[200px] lg:block"
        viewBox="0 0 200 400"
        fill="none"
      >
        <path
          d="M180 0 Q 20 100, 100 200 Q 180 300, 100 400"
          stroke="#f97316"
          strokeWidth="2"
          strokeDasharray="6 6"
          fill="none"
          opacity="0.5"
        />
      </svg>

      <svg
        className="absolute right-0 top-20 -z-10 hidden h-[500px] w-[250px] lg:block"
        viewBox="0 0 250 500"
        fill="none"
      >
        <path
          d="M20 0 Q 230 150, 125 250 Q 20 350, 230 500"
          stroke="#f97316"
          strokeWidth="2"
          strokeDasharray="6 6"
          fill="none"
          opacity="0.5"
        />
      </svg>

      <div className="mx-auto max-w-7xl">
        {/* Hero Content */}
        <div className="relative flex flex-col items-center pt-8 text-center">
          {/* Location Pin Icon */}
          <div className="absolute -left-4 top-16 hidden lg:block">
            <div className="rounded-full bg-white p-2 shadow-lg">
              <MapPin className="h-6 w-6 text-orange-500" />
            </div>
          </div>

          {/* Plane Icon */}
          <div className="absolute -right-4 top-8 hidden lg:block">
            <Plane className="h-10 w-10 rotate-45 text-indigo-500" />
          </div>

          {/* Main Heading */}
          <h1 className="max-w-3xl text-balance font-serif text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Learn New Things{" "}
            <span className="mx-1 inline-block h-8 w-14 overflow-hidden rounded-full align-middle md:h-10 md:w-16">
              <Image
                src="/images/travel-cabin.jpg"
                alt="Mountains"
                width={64}
                height={40}
                className="h-full w-full object-cover"
              />
            </span>{" "}
            By Travelling{" "}
            <span className="mx-1 inline-block h-8 w-8 overflow-hidden rounded-full align-middle md:h-10 md:w-10">
              <Image
                src="/images/travel-couple.jpg"
                alt="Travel"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </span>{" "}
            New World
          </h1>

          {/* Subtitle */}
          <div className="max-w-xl mx-auto mt-6">
            <p className="max-w-xl text-gray-500 text-lg">
              Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
            </p>
          </div>

          {/* CTA Button */}
          <button className="mt-8 rounded-full bg-orange-500 px-8 py-3 font-medium text-white shadow-lg shadow-orange-200 transition-all hover:bg-orange-600 hover:shadow-xl">
            Explore Now
          </button>
        </div>

        {/* Image Gallery */}
        <div className="mt-16 flex flex-wrap items-end justify-center gap-4 md:gap-6">
          {travelImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-full ${index === 1 || index === 2
                ? "h-64 w-36 md:h-80 md:w-44"
                : "h-56 w-32 md:h-72 md:w-40"
                } ${index === 0 ? "translate-y-4" : ""} ${index === 3 ? "translate-y-6" : ""
                }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
