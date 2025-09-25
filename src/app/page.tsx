import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
<section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white text-center py-32 px-6">
  <div className="relative z-10 max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Transform Your Business with{" "}
      <span className="text-cyan-400">Cutting-Edge IT Solutions</span>
    </h1>
    <p className="text-lg md:text-xl mb-8 text-gray-200">
      We deliver innovative web development, AI-powered solutions, and expert project management to accelerate your digital transformation journey.
    </p>

    {/* Buttons */}
    <div className="flex justify-center gap-4 mb-12">
      <a
        href="#"
        className="bg-cyan-400 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-cyan-300 transition"
      >
        Get Started Today →
      </a>
      <a
        href="#services"
        className="bg-white/10 border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
      >
        View Our Services
      </a>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <h2 className="text-3xl font-bold">200+</h2>
        <p className="text-gray-300">Projects Completed</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold">50+</h2>
        <p className="text-gray-300">Happy Clients</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold">5</h2>
        <p className="text-gray-300">Years Experience</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold">24/7</h2>
        <p className="text-gray-300">Support</p>
      </div>
    </div>
  </div>
</section>

{/* Services Section */}
<section id="services" className="py-20 bg-gray-50 text-center">
  <div className="max-w-6xl mx-auto px-6">
    {/* Section Title */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
      Our Core Services
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
      Comprehensive IT solutions designed to accelerate your business growth
    </p>

    {/* Service Cards */}
    <div className="grid gap-8 md:grid-cols-3">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
        <div className="text-blue-600 text-4xl mb-4">
          <i className="fas fa-code"></i>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Web Development</h3>
        <p className="text-gray-600 mb-6">
          Custom web applications built with modern technologies to deliver fast, scalable, and reliable user experiences.
        </p>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Learn More →
        </a>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
        <div className="text-blue-600 text-4xl mb-4">
          <i className="fas fa-robot"></i>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Solutions</h3>
        <p className="text-gray-600 mb-6">
          Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation.
        </p>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Learn More →
        </a>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
        <div className="text-blue-600 text-4xl mb-4">
          <i className="fas fa-tasks"></i>
        </div>
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Project Management</h3>
        <p className="text-gray-600 mb-6">
          Expert project delivery with agile methodology, ensuring timely results and high-quality outcomes.
        </p>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Learn More →
        </a>
      </div>
    </div>

    {/* View All Services Button */}
    <div className="mt-12">
      <a
        href="#"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
      >
        View All Services
      </a>
    </div>
  </div>
</section>

{/* Why Choose Us + Testimonials Section */}
<section className="py-10 bg-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* Left Side Text */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Why Choose Us?
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        We combine strategy, technology, and innovation to deliver business
        solutions that transform your organization. Our dedicated team
        ensures timely delivery and continuous support for your success.
      </p>
      <ul className="space-y-3 text-gray-700">
        <li> <span style={{ 
    display: 'inline-block', 
    fontSize: '20px', 
    color: '#000000', 
    background: '#5eec4b', 
    borderRadius: '58px', 
    padding: '6px 14px' 
}}>
    ✓
</span> Experienced & Skilled Team</li>
        <li> <span style={{ 
    display: 'inline-block', 
    fontSize: '20px', 
    color: '#000000', 
    background: '#5eec4b', 
    borderRadius: '58px', 
    padding: '6px 14px' 
}}>
    ✓
</span> Proven Track Record</li>
        <li> <span style={{ 
    display: 'inline-block', 
    fontSize: '20px', 
    color: '#000000', 
    background: '#5eec4b', 
    borderRadius: '58px', 
    padding: '6px 14px' 
}}>
    ✓
</span> Customer-Centric Approach</li>
        <li> <span style={{ 
    display: 'inline-block', 
    fontSize: '20px', 
    color: '#000000', 
    background: '#5eec4b', 
    borderRadius: '58px', 
    padding: '6px 14px' 
}}>
    ✓
</span> 24/7 Reliable Support</li>
      </ul>
    </div>

    {/* Right Side Image */}
    <div className="flex justify-center">
      <Image
        src="/images/office-team.jpg"
        alt="Why Choose Us"
        width={500}
        height={400}
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
  <br />

  {/* Testimonials */}
  <div className="max-w-6xl mx-auto px-6 mt-20 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
      What Our Clients Say
    </h2>

    <div className="grid gap-8 md:grid-cols-3">
      {/* Testimonial 1 */}
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <p className="text-gray-700 mb-4">
          "Eagle Consultants transformed our business with their AI-powered
          solutions. Professional, innovative, and reliable!"
        </p>
        <h4 className="font-semibold text-gray-900">— xxxxxxx</h4>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <p className="text-gray-700 mb-4">
          "The web app they built for us is fast, scalable, and beautifully
          designed. Highly recommended!"
        </p>
        <h4 className="font-semibold text-gray-900">— xxxxxxx</h4>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
        <p className="text-gray-700 mb-4">
          "Their project management expertise helped us deliver on time and
          within budget. Fantastic team!"
        </p>
        <h4 className="font-semibold text-gray-900">— xxxxxxx</h4>
      </div>
      <br />
    </div>
  </div>
</section>

{/* CTA Section */}
<section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 text-white text-center">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Ready to Transform Your Business?
    </h2>
    <p className="text-lg text-gray-200 mb-8">
      Partner with Eagle Consultants today and take the first step towards 
      digital transformation and business success.
    </p>
    <div className="flex justify-center gap-4">
      <a
        href="/contact"
        className="bg-cyan-400 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-cyan-300 transition"
      >
        Start Project →
      </a>
      <a
        href="/services"
        className="bg-white/10 border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
      >
        Explore Our Services
      </a>
    </div>
  </div>
</section>

{/* last section */}
<section className="bg-white text-black py-12">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
    {/* Column 1: Brand */}
    <div>
      <h3 className="text-2xl font-bold mb-4">Eagle Consultants</h3>
      <p className="text-gray-700">
        Delivering innovative IT solutions and expert consulting to help your
        business grow and succeed in a digital-first world.
      </p>
    </div>

    {/* Column 2: Company */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Company</h4>
      <ul className="space-y-2">
        <li><a href="/" className="hover:text-gray-900">Home</a></li>
        <li><a href="/about" className="hover:text-gray-900">About Us</a></li>
        <li><a href="/services" className="hover:text-gray-900">Services</a></li>
        <li><a href="/contact" className="hover:text-gray-900">Contact</a></li>
      </ul>
    </div>

    {/* Column 3: Services */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Services</h4>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-gray-900">Web Development</a></li>
        <li><a href="#" className="hover:text-gray-900">AI Solutions</a></li>
        <li><a href="#" className="hover:text-gray-900">Project Management</a></li>
      </ul>
    </div>

    {/* Column 4: Contact */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Contact</h4>
      <ul className="space-y-2">
        <li>Bangalore, India</li>
        <li>+91 9731627906</li>
        <li>info@eagleconsultants.com</li>
      </ul>
      {/* Social Icons */}
      <div className="flex space-x-4 mt-4">
        <a href="#" className="hover:text-gray-900"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="hover:text-gray-900"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-gray-900"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" className="hover:text-gray-900"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
