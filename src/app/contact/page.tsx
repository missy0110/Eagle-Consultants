export default function ContactPage() {
  return (
    <main className="py-16 px-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 border rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-10 text-center text-gray-700">
        <p>Email: info@eagleconsultants.com</p>
        <p>Phone: +91 9876543210</p>
      </div>
    </main>
  );
}
