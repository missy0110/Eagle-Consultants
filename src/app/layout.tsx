import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Eagle Consultants",
  description: "Business website built with Next.js",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className="bg-white">
      <head>
        {/* Font Awesome for Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-gray-900">
        <Navbar />

        {/* Main content area */}
        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
