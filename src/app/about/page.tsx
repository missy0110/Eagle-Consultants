import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Eagle Consultants
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              We’re a passionate team of technology experts dedicated to helping 
              businesses transform and thrive in the digital age. Since 2019, 
              we’ve been delivering innovative solutions that drive real results.
            </p>
            <a
              href="#"
              className="inline-block bg-cyan-400 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-cyan-300 transition"
            >
              Watch Who We Are →
            </a>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/images/business-team.jpg"
              alt="About Eagle Consultants"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}

      
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center">
          <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-blue-600 text-4xl mb-4">
          <i className="fas fa-bullseye"></i>
        </div>
            <h3 className="text-xl text-black font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses with innovative technology solutions that 
              streamline operations, enhance productivity, and ensure sustainable 
              growth in today’s digital world.
            </p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-blue-600 text-4xl mb-4">
          <i className="fas fa-globe"></i>
        </div>
            <h3 className="text-xl text-black font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the go-to trusted technology partner that businesses turn to 
              for transformative digital solutions, setting benchmarks for quality, 
              reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Values</h2>
    <p className="text-black max-w-2xl mx-auto mb-16">
            The principles that guide everything we do
          </p>
    <div className="grid gap-8 md:grid-cols-4">
      {[
        { title: "Innovation First", desc: "Delivering creative and future-ready solutions.", icon: "fas fa-lightbulb" },
        { title: "Client Success", desc: "Focusing on measurable results for our clients.", icon: "fas fa-user-check" },
        { title: "Quality Excellence", desc: "Ensuring high standards in every project.", icon: "fas fa-award" },
        { title: "Transparent Partnership", desc: "Building trust through clear communication.", icon: "fas fa-handshake" },
      ].map((val, i) => (
        <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          {/* 🔹 Icon goes here */}
          <div className="text-blue-500 text-4xl mb-4">
            <i className={val.icon}></i>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-3 text-black">{val.title}</h3>

          {/* Description */}
          <p className="text-gray-600">{val.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Meet Our Team */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid  text-black gap-8 md:grid-cols-3">
            {[
              { name: "XXXXXXX", role: "xyz", img: "/images/team1.jpg" },
              { name: "XXXXXXX", role: "xyz", img: "/images/team2.jpg" },
              { name: "XXXXXXX", role: "xyz", img: "/images/team3.jpg" },
            ].map((member, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-gray-600 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-3 text-indigo-400">
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-github"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Let’s discuss how our expertise can help transform your business.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-cyan-400 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow hover:bg-cyan-300 transition"
            >
              Get In Touch →
            </a>
            <a
              href="/services"
              className="bg-white/10 border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
