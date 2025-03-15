import { Link } from "react-router-dom";
import { HeroSection } from "../components/layout/HeroSection";
import { ArrowRight } from 'lucide-react';

// Product data for better maintainability
const productCategories = [
  {
    id: "motors",
    title: "Hydraulic Motors",
    image: "/images/motor.jpeg",
    description: "High-torque motors with exceptional durability and precision control for industrial applications.",
    badge: "High Torque",
    link: "/products#motors"
  },
  {
    id: "winches",
    title: "Hydraulic Winches",
    image: "/images/hydraulic_winch.jpeg",
    description: "Powerful winches engineered for reliability in extreme conditions with superior pulling capacity.",
    badge: "Heavy Duty",
    link: "/products#winches"
  },
  {
    id: "reducers",
    title: "Gear Reducers",
    image: "/images/gear_reducer.jpeg",
    description: "Precision-engineered reducers for optimal torque and efficiency in demanding mechanical systems.",
    badge: "Precision",
    link: "/products#reducers"
  }
];


export default function Home() {

  return (
    <div>
      <HeroSection />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Engineered for Performance
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Power Drive Hydraulics delivers industry-leading hydraulic solutions
            designed for the most demanding industrial applications.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {productCategories.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg border border-gray-200"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {product.title}
                </h3>
              </div>

              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    to={product.link}
                    className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {product.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About Us Preview - Condensed version */}
        <div className="mt-24 mb-24">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-80 lg:h-auto">
                <img
                  src="/images/factory_floor.jpeg"
                  alt="Power Drive Hydraulics Manufacturing Facility"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden"></div>
              </div>

              {/* Text Section - Condensed */}
              <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-6 inline-flex items-center">
                    <span className="mr-3">Our Commitment to Excellence</span>
                    <div className="h-1 w-12 bg-gray-800 hidden md:block"></div>
                  </h2>

                  <div className="space-y-4 text-gray-700">
                    <p>
                      Since 2024, Power Drive Hydraulics has been delivering
                      precision-engineered hydraulic solutions to North America
                      and global markets. We combine quality craftsmanship with
                      technical innovation to help you maintain a competitive edge.
                    </p>
                    
                    {/* Only show a brief overview on the homepage */}
                    <p>
                      What sets us apart is our unwavering dedication to
                      quality, reliability, and customer service. When you
                      choose Power Drive Hydraulics, you're partnering with a
                      manufacturer you can trust.
                    </p>
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/about"
                      className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors group"
                    >
                      <span>Learn More About Us</span>
                      <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gray-50 py-12 px-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Enhance Your Operations?
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Our team of engineers is ready to help you find the perfect
            hydraulic solution for your specific requirements.
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
  );
}
