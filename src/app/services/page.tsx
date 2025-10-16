import { FaCode, FaRobot, FaProjectDiagram, FaCloud, FaMobileAlt, FaLaptopCode } from "react-icons/fa";

export default function ServicesPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Comprehensive IT solutions designed to transform your business and drive growth through innovative technology.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Get Started Today
        </a>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: <FaCode size={40} className="text-blue-700 mx-auto mb-4" />,
            title: "Web Development",
            points: [
              "Responsive Website Design",
              "Full Stack Web Applications",
              "E-commerce Development",
              "SEO Optimization",
              "Maintenance & Support",
            ],
          },
          {
            icon: <FaRobot size={40} className="text-blue-700 mx-auto mb-4" />,
            title: "AI Solutions",
            points: [
              "Predictive Analytics",
              "AI Chatbots & Automation",
              "Natural Language Processing",
              "Machine Learning Models",
              "Data Visualization",
            ],
          },
          {
            icon: <FaProjectDiagram size={40} className="text-blue-700 mx-auto mb-4" />,
            title: "Project Management",
            points: [
              "Agile & Scrum Practices",
              "End-to-End Delivery",
              "Risk Management",
              "Timeline Planning",
              "Cross-team Collaboration",
            ],
          },
          {
            icon: <FaCloud size={40} className="text-blue-700 mx-auto mb-4" />,
            title: "Cloud Solutions",
            points: [
              "AWS / Azure Setup",
              "Cloud Security",
              "Migration Services",
              "Cost Optimization",
              "Continuous Monitoring",
            ],
          },
          {
            icon: <FaMobileAlt size={40} className="text-blue-700 mx-auto mb-4" />,
            title: "Mobile Development",
            points: [
              "iOS & Android Apps",
              "React Native / Flutter",
              "UI/UX Design",
              "App Store Deployment",
              "Support & Upgrades",
            ],
          },
          {
            icon: <FaLaptopCode size={40} className="text-blue-700 mx-auto mb-4" />,
            title: "IT Consulting",
            points: [
              "Technology Strategy",
              "Digital Transformation",
              "Automation Consulting",
              "Cybersecurity",
              "AI Integration",
            ],
          },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-8 text-center"
          >
            {service.icon}
            <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
            <ul className="text-sm text-gray-700 mb-6 space-y-1">
              {service.points.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
            <a
              href="/contact"
              className="text-blue-700 font-semibold hover:underline"
            >
              Learn More →
            </a>
          </div>
        ))}
      </section>

      {/* Our Process Section */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-black mb-8">Our Process</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          A proven methodology that ensures successful project delivery.
        </p>

        <div className="flex flex-wrap justify-center gap-10">
          {[
            "Discovery" ,
            "Planning",
            "Development",
            "Testing",
            "Deployment",
            "Support",
          ].map((step, index) => (
            <div
              key={index}
              className="w-40 bg-white border rounded-lg shadow-sm p-4"
            >
              <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                {index + 1}
              </div>
              <h3 className="font-semibold text-black">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-gray-200">
          Let’s discuss your requirements and create a custom solution that fits your needs and budget.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Get Free Consultation
          </a>
          <a
            href="/about"
            className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            Learn About Us
          </a>
        </div>
      </section>
    </main>
  );
}
