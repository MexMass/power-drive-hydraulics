"use client"

import { useState, useRef } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { AlertTriangle, Loader2 } from "lucide-react"

// Add type declaration for grecaptcha
declare global {
  interface Window {
    grecaptcha?: {
      reset: () => void
    }
  }
}

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .optional()
    .or(z.literal("")),
  phone: z.string().min(7, {
    message: "Phone number must be at least 7 digits.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const recaptchaRef = useRef<any>(null)

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    mode: "onTouched",
  })

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    if (!captchaValue) {
      alert("Please complete the CAPTCHA verification.")
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", {
        ...data,
        recaptchaToken: captchaValue,
      })

      alert("Message sent successfully! We'll get back to you soon.")

      form.reset()
      setCaptchaValue(null)
      if (recaptchaRef.current) {
        window.grecaptcha?.reset()
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[200px] md:h-[250px] overflow-hidden">
        <img
          src="/images/contact_hero.jpg"
          alt="Contact Power Drive Hydraulics"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">Get in touch with our team of hydraulic experts</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our hydraulic products or need technical assistance? Our team of experts is ready to
              help you find the right solution for your application.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-700">123 Industrial Way, Manufacturing District</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-700">(555) 123-4567</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-700">info@powerdrive-hydraulics.com</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
                <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p className="text-gray-700">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6 flex items-start">
              <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-amber-800">Form Submission Notice</h3>
                <p className="text-amber-700 text-sm">
                  This form is for demonstration purposes. In a production environment, it would be connected to a
                  backend service.
                </p>
              </div>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  {...form.register("name")}
                  placeholder="Your full name"
                  className={`w-full px-4 py-2 border ${
                    form.formState.errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400`}
                />
                <div className="h-5">
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email (Optional)
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...form.register("email")}
                    placeholder="your.email@example.com"
                    className={`w-full px-4 py-2 border ${
                      form.formState.errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400`}
                  />
                  <div className="h-5">
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    {...form.register("phone")}
                    placeholder="(555) 123-4567"
                    className={`w-full px-4 py-2 border ${
                      form.formState.errors.phone ? "border-red-500" : "border-gray-300"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400`}
                  />
                  <div className="h-5">
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  {...form.register("message")}
                  placeholder="Please describe your inquiry or requirements..."
                  className={`w-full px-4 py-2 border ${
                    form.formState.errors.message ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 min-h-[150px]`}
                />
                <div className="h-5">
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-sm">{form.formState.errors.message.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                {/* Placeholder for reCAPTCHA */}
                <div className="bg-gray-100 border border-gray-300 rounded-md p-4 flex items-center justify-center h-[78px]">
                  <p className="text-gray-500 text-sm">CAPTCHA verification would appear here</p>
                </div>
                {form.formState.isSubmitted && !captchaValue && (
                  <p className="text-red-500 mt-2 text-sm">Please complete the CAPTCHA verification.</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-gray-800 text-white hover:bg-gray-700 w-full md:w-auto rounded-md px-6 py-3 transition-colors duration-200 flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12 h-[400px] bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500">Interactive map would be displayed here</p>
        </div>
      </div>
    </div>
  )
}

