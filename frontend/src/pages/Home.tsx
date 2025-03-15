import { Link } from "react-router-dom"
import { HeroSection } from "../components/layout/HeroSection"

export default function Home() {
  return (
    <div>
      <HeroSection />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Engineered for Performance</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Power Drive Hydraulics delivers industry-leading hydraulic solutions designed for the most demanding
            industrial applications.
          </p>
        </div>

        {/* Product Categories with Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Hydraulic Motors */}
          <div className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-200">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Hydraulic Motors</h3>
            </div>

            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/motor.jpeg"
                alt="Hydraulic Motor"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">
                High-torque motors with exceptional durability and precision control for industrial applications.
              </p>
              <div className="flex justify-between items-center">
                <Link
                  to="/products"
                  className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">High Torque</span>
              </div>
            </div>
          </div>

          {/* Hydraulic Winches */}
          <div className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-200">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Hydraulic Winches</h3>
            </div>

            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/hydraulic_winch.jpeg"
                alt="Hydraulic Winch"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Powerful winches engineered for reliability in extreme conditions with superior pulling capacity.
              </p>
              <div className="flex justify-between items-center">
                <Link
                  to="/products"
                  className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Heavy Duty</span>
              </div>
            </div>
          </div>

          {/* Gear Reducers */}
          <div className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-200">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Gear Reducers</h3>
            </div>

            <div className="relative h-56 overflow-hidden">
              <img
                src="/images/gear_reducer.jpeg"
                alt="Gear Reducer"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Precision-engineered reducers for optimal torque and efficiency in demanding mechanical systems.
              </p>
              <div className="flex justify-between items-center">
                <Link
                  to="/products"
                  className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors"
                >
                  View Details
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">Precision</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gray-50 py-12 px-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Operations?</h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Our team of engineers is ready to help you find the perfect hydraulic solution for your specific
            requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  )
}

