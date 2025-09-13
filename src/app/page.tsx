"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Test section with very obvious styling */}
      <div className="bg-[#2563EB] p-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-white text-6xl font-extrabold mb-6">
            Turn AI Adoption Into ROI
          </h1>
          <p className="text-white/90 text-xl mb-8">
            Optivus tracks adoption, measures communication, and proves business impact — in 30 days or less.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-[#2563EB] font-semibold text-lg hover:bg-opacity-90 transition-all"
            >
              Book Your ROI Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/product"
              className="inline-flex items-center px-8 py-4 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>

      {/* Stats section with direct styling */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "Average ROI", value: "312%" },
              { label: "Time to Value", value: "30 Days" },
              { label: "User Adoption", value: "85%" },
              { label: "Customer Success", value: "96%" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#2563EB]/5 to-[#06B6D4]/5 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-[#2563EB] text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features section with direct styling */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Everything you need to drive<br />and measure adoption
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Adoption Tracking",
                description: "Monitor user engagement and adoption rates in real-time with detailed analytics."
              },
              {
                title: "ROI Calculator",
                description: "Quantify the business impact of your technology investments with our advanced ROI tools."
              },
              {
                title: "Behavioral Nudges",
                description: "Drive adoption through personalized, AI-powered engagement strategies."
              },
              {
                title: "Impact Measurement",
                description: "Track and measure the effectiveness of your technology adoption initiatives."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section with direct styling */}
      <div className="bg-[#2563EB] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to optimize your technology ROI?
          </h2>
          <p className="text-white/90 text-xl mb-8">
            Join leading organizations using Optivus to track, measure, and optimize their technology investments.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-[#2563EB] font-semibold text-lg hover:bg-opacity-90 transition-all"
            >
              Book Your ROI Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}