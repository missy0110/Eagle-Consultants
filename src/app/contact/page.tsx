"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong.");
    }
  };

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Ready to start your project? Let’s discuss how we can help transform
          your business with innovative technology solutions.
        </p>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Send us a message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-3 w-full"
              />
            </div>

            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg p-3 w-full"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="service"
                placeholder="Service Interest"
                value={formData.service}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 w-full"
              />
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg p-3 w-full"
              >
                <option value="">Budget Range</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000+</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Project Description"
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg p-3 w-full h-32"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-3 px-6 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition"
            >
              Send Message <FaPaperPlane />
            </button>
          </form>

          {status && (
            <p className="text-center mt-4 text-gray-700 font-medium">{status}</p>
          )}
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Contact Information
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-blue-700 mt-1" />
                <span>
                  <strong>Email:</strong> <br />
                  hello@eagleconsultants.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-blue-700 mt-1" />
                <span>
                  <strong>Phone:</strong> <br /> +91 98765 43210
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-700 mt-1" />
                <span>
                  <strong>Office:</strong> <br />
                  Bangalore, India <br /> Mon–Fri, 8am–6pm IST
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-blue-700 mt-1" />
                <span>
                  <strong>Response Time:</strong> <br />
                  {"< "}24 hours - we’ll get back to you shortly.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Why Choose Eagle Consultants?
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Experienced professionals</li>
              <li>Flexible consultation plans</li>
              <li>Proven results</li>
              <li>Guaranteed satisfaction</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-10">
          Quick answers to common questions
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-left">
          {[
            {
              q: "How long does a typical project take?",
              a: "Project timelines vary based on complexity, but most projects range from 4–16 weeks. We’ll provide a detailed timeline during our initial consultation.",
            },
            {
              q: "Do you offer ongoing support?",
              a: "Yes! We provide 24/7 support and maintenance packages to keep your solutions optimized and performing reliably after launch.",
            },
            {
              q: "What’s your pricing structure?",
              a: "We offer competitive project pricing based on requirements. Contact us for a free consultation and custom quote.",
            },
            {
              q: "Can you work with our existing team?",
              a: "Absolutely! We often collaborate with internal IT and design teams to deliver integrated, scalable solutions.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {faq.q}
              </h3>
              <p className="text-gray-700">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
