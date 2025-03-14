import { Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-gray-100 border-t border-gray-300 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.svg" alt="Power Drive Hydraulics Logo" className="h-10 w-10 mr-3" />
              <h3 className="text-lg font-semibold text-gray-800">Power Drive Hydraulics</h3>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Precision engineered hydraulic solutions for industrial applications. Delivering reliability and
              performance since 1985.
            </p>
            <div className="flex items-center">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Contact Information</h4>
            <div className="space-y-2 text-gray-600">
              <p>123 Industrial Way, Manufacturing District</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@powerdrive-hydraulics.com</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-800">
                ISO 9001 Certified
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-200 px-2 py-1 text-xs font-medium text-gray-800">
                API Compliant
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-300">
          <p className="text-center text-gray-600 text-sm">
            &copy; {currentYear} Power Drive Hydraulics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

