"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Download, FileText, Search } from "lucide-react"

// Product data structure
interface ProductSpec {
  name: string
  value: string
}

interface Product {
  id: string
  name: string
  image: string
  shortDescription: string
  specifications: ProductSpec[]
  pdfUrl: string
}

interface ProductCategory {
  id: string
  title: string
  description: string
  products: Product[]
}

// Sample product data
const productCategories: ProductCategory[] = [
  {
    id: "motors",
    title: "Hydraulic Motors",
    description:
      "High-performance hydraulic motors designed for reliability and efficiency in demanding industrial applications.",
    products: [
      {
        id: "motor-1",
        name: "HD-150 High Torque Motor",
        image: "/images/motor.jpeg",
        shortDescription: "Heavy-duty hydraulic motor with exceptional torque output for industrial applications.",
        specifications: [
          { name: "Displacement", value: "150cc/rev" },
          { name: "Max Pressure", value: "350 bar" },
          { name: "Max Speed", value: "480 rpm" },
          { name: "Torque Output", value: "520 Nm" },
          { name: "Weight", value: "12.5 kg" },
          { name: "Mounting", value: "SAE B 2-Bolt" },
        ],
        pdfUrl: "/files/products/hd-150-specs.pdf",
      },
      {
        id: "motor-2",
        name: "CM-100 Compact Motor",
        image: "/images/motor.jpeg",
        shortDescription: "Compact hydraulic motor designed for applications with limited installation space.",
        specifications: [
          { name: "Displacement", value: "100cc/rev" },
          { name: "Max Pressure", value: "300 bar" },
          { name: "Max Speed", value: "550 rpm" },
          { name: "Torque Output", value: "380 Nm" },
          { name: "Weight", value: "8.2 kg" },
          { name: "Mounting", value: "SAE A 2-Bolt" },
        ],
        pdfUrl: "/files/products/cm-100-specs.pdf",
      },
      {
        id: "motor-3",
        name: "PM-200 Precision Motor",
        image: "/images/motor.jpeg",
        shortDescription: "High-precision hydraulic motor for applications requiring accurate speed control.",
        specifications: [
          { name: "Displacement", value: "200cc/rev" },
          { name: "Max Pressure", value: "320 bar" },
          { name: "Max Speed", value: "420 rpm" },
          { name: "Torque Output", value: "650 Nm" },
          { name: "Weight", value: "15.8 kg" },
          { name: "Mounting", value: "SAE C 4-Bolt" },
        ],
        pdfUrl: "/files/products/pm-200-specs.pdf",
      },
    ],
  },
  {
    id: "winches",
    title: "Hydraulic Winches",
    description:
      "Powerful hydraulic winches engineered for reliability in extreme conditions with superior pulling capacity.",
    products: [
      {
        id: "winch-1",
        name: "HW-5000 Heavy Duty Winch",
        image: "/images/hydraulic_winch.jpeg",
        shortDescription:
          "Heavy-duty hydraulic winch with 5000 kg pulling capacity for industrial and marine applications.",
        specifications: [
          { name: "Pulling Capacity", value: "5000 kg" },
          { name: "Line Speed", value: "12 m/min" },
          { name: "Hydraulic Flow", value: "60-80 L/min" },
          { name: "Operating Pressure", value: "140-175 bar" },
          { name: "Drum Capacity", value: "80m of 12mm rope" },
          { name: "Weight", value: "95 kg" },
        ],
        pdfUrl: "/files/products/hw-5000-specs.pdf",
      },
      {
        id: "winch-2",
        name: "MW-3000 Marine Winch",
        image: "/images/hydraulic_winch.jpeg",
        shortDescription: "Corrosion-resistant hydraulic winch designed specifically for marine environments.",
        specifications: [
          { name: "Pulling Capacity", value: "3000 kg" },
          { name: "Line Speed", value: "15 m/min" },
          { name: "Hydraulic Flow", value: "40-60 L/min" },
          { name: "Operating Pressure", value: "120-160 bar" },
          { name: "Drum Capacity", value: "60m of 10mm rope" },
          { name: "Weight", value: "72 kg" },
        ],
        pdfUrl: "/files/products/mw-3000-specs.pdf",
      },
      {
        id: "winch-3",
        name: "CW-8000 Construction Winch",
        image: "/images/hydraulic_winch.jpeg",
        shortDescription: "High-capacity hydraulic winch designed for construction and heavy equipment applications.",
        specifications: [
          { name: "Pulling Capacity", value: "8000 kg" },
          { name: "Line Speed", value: "10 m/min" },
          { name: "Hydraulic Flow", value: "80-100 L/min" },
          { name: "Operating Pressure", value: "160-200 bar" },
          { name: "Drum Capacity", value: "100m of 14mm rope" },
          { name: "Weight", value: "135 kg" },
        ],
        pdfUrl: "/files/products/cw-8000-specs.pdf",
      },
    ],
  },
  {
    id: "reducers",
    title: "Gear Reducers",
    description:
      "Precision-engineered gear reducers for optimal torque and efficiency in demanding mechanical systems.",
    products: [
      {
        id: "reducer-1",
        name: "PGR-100 Planetary Gear Reducer",
        image: "/images/gear_reducer.jpeg",
        shortDescription: "Compact planetary gear reducer with high torque capacity and efficiency.",
        specifications: [
          { name: "Reduction Ratio", value: "5:1 to 100:1" },
          { name: "Max Input Speed", value: "3000 rpm" },
          { name: "Max Output Torque", value: "1000 Nm" },
          { name: "Efficiency", value: ">95%" },
          { name: "Housing Material", value: "Cast Iron" },
          { name: "Weight", value: "18 kg" },
        ],
        pdfUrl: "/files/products/pgr-100-specs.pdf",
      },
      {
        id: "reducer-2",
        name: "HGR-200 Helical Gear Reducer",
        image: "/images/gear_reducer.jpeg",
        shortDescription:
          "Helical gear reducer designed for smooth operation and low noise in industrial applications.",
        specifications: [
          { name: "Reduction Ratio", value: "3:1 to 50:1" },
          { name: "Max Input Speed", value: "2500 rpm" },
          { name: "Max Output Torque", value: "1500 Nm" },
          { name: "Efficiency", value: ">92%" },
          { name: "Housing Material", value: "Aluminum Alloy" },
          { name: "Weight", value: "22 kg" },
        ],
        pdfUrl: "/files/products/hgr-200-specs.pdf",
      },
      {
        id: "reducer-3",
        name: "WGR-300 Worm Gear Reducer",
        image: "/images/gear_reducer.jpeg",
        shortDescription:
          "Worm gear reducer with high reduction ratio and self-locking capability for safety-critical applications.",
        specifications: [
          { name: "Reduction Ratio", value: "10:1 to 100:1" },
          { name: "Max Input Speed", value: "1800 rpm" },
          { name: "Max Output Torque", value: "800 Nm" },
          { name: "Efficiency", value: ">85%" },
          { name: "Housing Material", value: "Cast Iron" },
          { name: "Weight", value: "25 kg" },
        ],
        pdfUrl: "/files/products/wgr-300-specs.pdf",
      },
    ],
  },
]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [expandedProducts, setExpandedProducts] = useState<Record<string, boolean>>({})
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [visibleCategories, setVisibleCategories] = useState<string[]>([])

  // Initialize visible categories to show all on first load
  useEffect(() => {
    if (activeCategory === "all") {
      setVisibleCategories(productCategories.map((cat) => cat.id))
    } else {
      setVisibleCategories([activeCategory])
    }
  }, [activeCategory])

  // Filter products based on search term and active category
  const getFilteredCategories = () => {
    // First, filter by visible categories
    const categoriesInView = productCategories.filter((category) => visibleCategories.includes(category.id))

    // Then filter by search term
    return categoriesInView.map((category) => ({
      ...category,
      products: category.products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
  }

  const filteredCategories = getFilteredCategories()

  // Toggle product expansion
  const toggleProductExpansion = (productId: string) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }))
  }

  // Set active category and update visible categories
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)

    if (categoryId === "all") {
      setVisibleCategories(productCategories.map((cat) => cat.id))
    } else {
      setVisibleCategories([categoryId])
    }

    // Scroll to the top of the products section
    const productsSection = document.getElementById("products-section")
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[250px] md:h-[300px] overflow-hidden">
        <img
          src="/images/products_hero.jpg"
          alt="Power Drive Hydraulics Products"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Precision-engineered hydraulic solutions for demanding applications
          </p>
        </div>
      </div>

      {/* Category Navigation and Search */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-4">
            <div className="flex overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {/* Add "All" category button */}
              <button
                onClick={() => handleCategoryChange("all")}
                className={`px-4 py-2 whitespace-nowrap font-medium rounded-md mr-2 transition-colors ${
                  activeCategory === "all" ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                All Products
              </button>

              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 whitespace-nowrap font-medium rounded-md mr-2 transition-colors ${
                    activeCategory === category.id
                      ? "bg-gray-800 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder={`Search ${activeCategory === "all" ? "all products" : activeCategory}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div id="products-section" className="container mx-auto px-4 py-12">
        {/* Product Categories */}
        {filteredCategories.map((category) => (
          <div key={category.id} id={category.id} className="mb-16 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-2">{category.title}</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">{category.description}</p>

            {/* No results message */}
            {category.products.length === 0 && searchTerm && (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-500">
                  No {category.title.toLowerCase()} matching "{searchTerm}" were found.
                </p>
              </div>
            )}

            {/* Product List */}
            <div className="space-y-6">
              {category.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Product Header - Always visible */}
                  <div
                    className="flex flex-col md:flex-row cursor-pointer"
                    onClick={() => toggleProductExpansion(product.id)}
                  >
                    <div className="w-22 h-22">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="p-6 md:w-3/4 flex flex-col md:flex-row items-start md:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                        <p className="text-gray-600">{product.shortDescription}</p>
                      </div>
                      <div className="mt-4 md:mt-0 flex items-center">
                        <span className="text-sm text-gray-500 mr-2">
                          {expandedProducts[product.id] ? "Hide Details" : "Show Details"}
                        </span>
                        {expandedProducts[product.id] ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Product Details - Expandable */}
                  {expandedProducts[product.id] && (
                    <div className="border-t border-gray-200 p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Specifications */}
                        <div>
                          <h4 className="text-lg font-semibold mb-4">Specifications</h4>
                          <div className="grid grid-cols-2 gap-y-2">
                            {product.specifications.map((spec, index) => (
                              <div key={index} className={index % 2 === 0 ? "pr-4" : "pl-4"}>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                  <span className="text-gray-600">{spec.name}</span>
                                  <span className="font-medium">{spec.value}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Documentation */}
                        <div>
                          <h4 className="text-lg font-semibold mb-4">Documentation</h4>
                          <a
                            href={product.pdfUrl}
                            download
                            className="flex items-center p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                          >
                            <div className="bg-gray-100 p-3 rounded-full mr-4">
                              <FileText className="h-6 w-6 text-gray-700" />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-medium">Technical Specifications</h5>
                              <p className="text-sm text-gray-500">PDF Document</p>
                            </div>
                            <Download className="h-5 w-5 text-gray-500" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* No results across all categories */}
        {filteredCategories.length > 0 &&
          filteredCategories.every((category) => category.products.length === 0) &&
          searchTerm && (
            <div className="bg-gray-50 rounded-lg p-12 text-center my-12">
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">
                No products matching "{searchTerm}" were found in
                {activeCategory === "all" ? " any category" : ` the ${activeCategory} category`}.
              </p>
              <button
                onClick={() => setSearchTerm("")}
                className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}

        {/* No categories visible */}
        {filteredCategories.length === 0 && (
          <div className="bg-gray-50 rounded-lg p-12 text-center my-12">
            <h3 className="text-xl font-semibold mb-2">No categories selected</h3>
            <p className="text-gray-500 mb-6">Please select a product category to view products.</p>
            <button
              onClick={() => handleCategoryChange("all")}
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      {/* Add custom scrollbar styling */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

