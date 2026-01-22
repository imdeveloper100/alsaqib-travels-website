import { Compass, Users, Shield, Clock, Award, Heart } from "lucide-react";

export const metadata = {
  title: "About Us - Al Saqib Travels",
  description: "Learn about Al Saqib Travels - Your trusted travel partner for unforgettable journeys",
};

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Al Saqib Travels
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your trusted travel partner dedicated to making your journeys unforgettable
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Our Story */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Compass className="h-8 w-8 text-primary-dark" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Story</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Al Saqib Travels was founded with a passion for connecting people to the world.
              We believe that travel is not just about reaching a destination, but about creating
              lasting memories and experiences that enrich your life.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Based in Maini Swabi Topi, we have been serving travelers with dedication and
              professionalism, helping them explore new destinations, experience different cultures,
              and create unforgettable adventures.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="h-8 w-8 text-accent-dark" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              To provide exceptional travel services that exceed our client&apos;s expectations.
              We are committed to making travel accessible, enjoyable, and stress-free for everyone.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our mission is to be your reliable travel companion, offering personalized service,
              competitive prices, and expert guidance for all your travel needs.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Expert Team
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our experienced team is dedicated to providing you with the best travel advice and support.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="bg-accent-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Trusted Service
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We prioritize your safety and satisfaction, ensuring reliable and secure travel arrangements.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="bg-primary-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-dark" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We&apos;re always here to help, providing round-the-clock assistance for all your travel needs.
              </p>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-8 w-8 text-primary-dark" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-primary-dark mb-3">Flight Bookings</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Book domestic and international flights with the best prices and flexible options.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-dark mb-3">Travel Packages</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Customized travel packages tailored to your preferences and budget.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-dark mb-3">Visa Assistance</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Expert guidance and support for visa applications and documentation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary-dark mb-3">Group Travel</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Special arrangements for group tours, family trips, and corporate travel.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-primary-dark to-accent-dark rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contact us today and let us help you plan your next adventure
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-dark font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  );
}