export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-24">
        <h1 className="text-5xl font-bold mb-6">
          Empowering Businesses with Innovative Solutions
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          At Eagle Consultants, we provide expert consulting services to help your business grow,
          adapt, and succeed in a rapidly changing world.
        </p>
        <a
          href="/services"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Explore Services
        </a>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 md:px-16 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-blue-600">
            Why Choose Us?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We are committed to delivering high-quality business solutions that combine strategy,
            technology, and innovation. Our expert team works alongside you to unlock growth
            opportunities and solve complex challenges.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/business-team.jpg"
            alt="Business Team"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
