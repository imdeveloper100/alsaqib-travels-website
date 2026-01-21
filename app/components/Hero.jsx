import Image from "next/image"
// import { MapPin, Plane } from "lucide-react"

const travelImages = [
  { src: "/images/travel-sail.jpg", alt: "Person on sailing boat" },
  { src: "/images/travel-dubai.jpg", alt: "Burj Al Arab Dubai" },
  { src: "/images/travel-couple.jpg", alt: "Couple watching sunset" },
  { src: "/images/travel-cabin.jpg", alt: "Mountain cabin by lake" },
]

export default function Hero() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-20 pb-16 pt-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/50 via-white to-white -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Hero Content */}
        <div className="text-center relative">
          {/* Decorative Elements */}
          <div className="absolute left-4 md:left-16 top-8 text-orange-500">
            {/* <MapPin className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} /> */}
          </div>
          <div className="absolute right-4 md:right-16 top-16 text-indigo-500 rotate-45">
            {/* <Plane className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} /> */}
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-indigo-950 leading-tight tracking-tight max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 flex-wrap justify-center">
              Learn New Things
              <span className="inline-block w-16 h-8 md:w-24 md:h-12 rounded-full overflow-hidden align-middle">
                <Image
                  src="/images/travel-dubai.jpg"
                  alt="Travel destination"
                  width={96}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </span>
              By
            </span>
            <br />
            <span className="inline-flex items-center gap-2 flex-wrap justify-center">
              Travelling
              <span className="inline-block w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden align-middle">
                <Image
                  src="/images/travel-cabin.jpg"
                  alt="Travel destination"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </span>
              New World
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-gray-500 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening.
          </p>

          {/* CTA Button */}
          <button className="mt-8 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-colors shadow-lg shadow-orange-500/30">
            Explore Now
          </button>
        </div>

        {/* Travel Images Grid */}
        <div className="relative mt-12 md:mt-16">
          {/* Decorative dotted curves */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none -z-0"
            viewBox="0 0 1000 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 200 Q250 50 500 200 Q750 350 950 200"
              stroke="#f97316"
              strokeWidth="2"
              strokeDasharray="8 8"
              fill="none"
              opacity="0.4"
            />
          </svg>

          {/* Images */}
          <div className="flex justify-center items-end gap-4 md:gap-6 lg:gap-8 relative z-10">
            {travelImages.map((image, index) => (
              <div
                key={index}
                className={`relative rounded-full overflow-hidden shadow-xl ${index === 0 || index === 3
                  ? "w-28 h-44 md:w-40 md:h-64 lg:w-48 lg:h-80"
                  : "w-24 h-40 md:w-36 md:h-56 lg:w-44 lg:h-72"
                  } ${index === 1 ? "-mt-4" : ""} ${index === 2 ? "mt-4" : ""}`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
