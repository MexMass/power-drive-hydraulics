import { Link } from "react-router-dom"
import { ArrowRight, Award, CheckCircle, Globe, PenToolIcon as Tool, Users } from "lucide-react"

// Team members data
const teamMembers = [
  {
    name: "John Chen",
    position: "Chief Executive Officer",
    image: "/images/team/john-chen.jpeg",
    bio: "With over 20 years of experience in hydraulic systems engineering, John leads our company with a focus on innovation and quality.",
  },
  {
    name: "Sarah Miller",
    position: "Chief Technical Officer",
    image: "/images/team/sarah-miller.jpeg",
    bio: "Sarah oversees all technical operations and product development, ensuring our hydraulic solutions meet the highest standards.",
  },
  {
    name: "Michael Zhang",
    position: "Head of Manufacturing",
    image: "/images/team/michael-zhang.jpeg",
    bio: "Michael manages our state-of-the-art manufacturing facilities in China, implementing efficient production processes.",
  },
]

// Company values
const companyValues = [
  {
    icon: <Award className="h-6 w-6 text-gray-800" />,
    title: "Quality",
    description: "We maintain rigorous quality control standards throughout our manufacturing process.",
  },
  {
    icon: <Users className="h-6 w-6 text-gray-800" />,
    title: "Customer Focus",
    description: "Our customers' needs drive our product development and service approach.",
  },
  {
    icon: <Tool className="h-6 w-6 text-gray-800" />,
    title: "Innovation",
    description: "We continuously improve our products through research and development.",
  },
  {
    icon: <Globe className="h-6 w-6 text-gray-800" />,
    title: "Global Reach",
    description: "We serve customers worldwide with localized support and service.",
  },
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/about_hero.jpeg"
          alt="Power Drive Hydraulics Facility"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Delivering precision-engineered hydraulic solutions since 2024
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Company Overview */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg mx-auto">
            <p>
              Founded in 2024, Power Drive Hydraulics has rapidly established itself as a leading manufacturer of
              high-quality hydraulic equipment. Our journey began with a simple mission: to provide reliable, efficient,
              and innovative hydraulic solutions that help our customers succeed in their operations.
            </p>
            <p>
              From our headquarters in North America to our manufacturing facilities in China, we've built a global
              operation focused on excellence at every level. Our team combines decades of industry experience with a
              passion for engineering and customer service.
            </p>
            <p>
              Working closely with our distributors and world-class OEMs, we provide cost-effective, high-performance
              hydraulic components that exceed industry standards. Our manufacturing facilities are equipped with
              state-of-the-art technology and staffed by skilled engineers committed to excellence.
            </p>
            <p>
              Today, Power Drive Hydraulics serves customers across diverse industries including construction, marine,
              mining, forestry, and industrial manufacturing. Our comprehensive product range includes hydraulic motors,
              winches, and gear reducers designed to perform in the most demanding environments.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="bg-white p-3 rounded-full inline-flex mb-4 shadow-sm">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Capabilities */}
        <div className="mb-20">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">Manufacturing Excellence</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Our state-of-the-art manufacturing facilities combine advanced technology with skilled craftsmanship
                    to produce hydraulic components of exceptional quality and reliability.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "ISO 9001 certified quality management system",
                      "Rigorous testing at every stage of production",
                      "Advanced CNC machining and automation",
                      "Comprehensive quality control protocols",
                      "Environmentally responsible manufacturing practices",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-gray-800 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative h-80 lg:h-auto order-first lg:order-last">
                <img
                  src="/images/manufacturing.jpeg"
                  alt="Power Drive Hydraulics Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 py-12 px-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Partner with Power Drive Hydraulics</h3>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Discover how our hydraulic solutions can enhance your operations and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Explore Our Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

