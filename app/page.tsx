import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import IceCream from "@/components/IceCream";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <JsonLd />

      {/* Sticky Header with Navigation */}
      <Header />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Section - #home */}
        <Hero />

        {/* About Section - #about */}
        <About />

        {/* Ice Cream Section - #ice-cream */}
        <IceCream />

        {/* Gallery Section - #gallery */}
        <Gallery />

        {/* Testimonials Section - #testimonials */}
        <Testimonials />

        {/* Contact Section - #contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
