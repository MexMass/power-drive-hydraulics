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

                {/* About Us Section */}
                <div className="mt-24 mb-24">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-80 lg:h-auto">
                <img
                  src="/images/factory_floor.jpeg"
                  alt="Power Drive Hydraulics Manufacturing Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
              </div>

              {/* Text Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center relative">


                <div className="relative">
                  <h2 className="text-3xl font-bold mb-6 inline-flex items-center">
                    <span className="mr-3">Our Commitment to Excellence</span>
                    <div className="h-1 w-12 bg-gray-800"></div>
                  </h2>

                  <div className="space-y-4 text-gray-700">
                    <p>
                      Since 2024, Power Drive Hydraulics has been delivering precision-engineered hydraulic solutions to
                      North America and global markets. We combine quality craftsmanship with technical innovation to
                      help you maintain a competitive edge.
                    </p>
                    <p>
                      Working closely with our distributors and world-class OEMs, we provide cost-effective,
                      high-performance hydraulic components that exceed industry standards. Our manufacturing facilities
                      in China are equipped with state-of-the-art technology and staffed by skilled engineers committed
                      to excellence.
                    </p>
                    <p>
                      What sets us apart is our unwavering dedication to quality, reliability, and customer service.
                      When you choose Power Drive Hydraulics, you're partnering with a manufacturer you can trust to
                      deliver solutions that perform when it matters most.
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/about"
                      className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors group"
                    >
                      <span>Learn More About Us</span>
                      <svg
                        className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
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

