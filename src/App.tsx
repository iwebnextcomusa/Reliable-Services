import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import ScrollToTop from "./components/ScrollToTop";
import QuoteModal from "./components/QuoteModal";

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState("");

  const handleOpenQuote = (category?: string) => {
    if (category) {
      setPreselectedCategory(category);
    } else {
      setPreselectedCategory("Residential Services");
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setPreselectedCategory("");
  };

  return (
    <div className="min-h-screen bg-navy-darkest overflow-x-hidden text-silver-light">
      {/* Sticky Glassmorphic Header */}
      <Header onRequestQuote={() => handleOpenQuote()} />

      {/* Hero Block with Saguaro Cactus Parallax sunset */}
      <main>
        <Hero onRequestQuote={() => handleOpenQuote()} />

        {/* Local Roots / Family Ethos */}
        <AboutUs />

        {/* Services Showcase Cards */}
        <Services onSelectCategory={(cat) => handleOpenQuote(cat)} />

        {/* Bento Reason highlights */}
        <WhyChooseUs />

        {/* Neighbor Testimonials Carousel */}
        <Testimonials />

        {/* Responsive Contact & Google Coordinates Mock */}
        <ContactSection />
      </main>

      {/* Trust & SEO Footer Block */}
      <Footer onRequestQuote={() => handleOpenQuote()} />

      {/* Floating pulsing AI Chatbot proxying Gemini 3.5-flash server-side */}
      <Chatbot />

      {/* Scroll-To-Top dynamic button */}
      <ScrollToTop />

      {/* Multi-step Estimator Quote Wizard modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        preselectedCategory={preselectedCategory}
        onClose={handleCloseQuote}
      />
    </div>
  );
}
