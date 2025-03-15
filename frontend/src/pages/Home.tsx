import { HeroSection } from "../components/layout/HeroSection"
import { Link } from "react-router-dom"

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-4">Hydraulic Motors</h3>
            <p className="text-gray-600 mb-6">High-torque motors with exceptional durability and precision control.</p>
            <Link to="/products" className="inline-block text-gray-800 font-medium hover:underline">
              View Motors →
            </Link>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-4">Hydraulic Winches</h3>
            <p className="text-gray-600 mb-6">Powerful winches engineered for reliability in extreme conditions.</p>
            <Link to="/products" className="inline-block text-gray-800 font-medium hover:underline">
              View Winches →
            </Link>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-4">Gear Reducers</h3>
            <p className="text-gray-600 mb-6">Precision-engineered reducers for optimal torque and efficiency.</p>
            <Link to="/products" className="inline-block text-gray-800 font-medium hover:underline">
              View Reducers →
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
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

