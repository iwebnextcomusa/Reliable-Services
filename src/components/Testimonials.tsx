import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const reviews = [
    {
      id: "rev-1",
      name: "Robert Grayson",
      location: "New River, AZ",
      text: "The absolute best contractors I've hired in Maricopa County! Our electrical panel suddenly tripped and left us without air conditioning in the dead of summer. They arrived at our home within 40 minutes, diagnosed the loose contact immediately, and fixed it for a very honest fee. Exceptional local service!",
      rating: 5,
      service: "Emergency Service & Panel Troubleshoot",
      date: "May 2026",
    },
    {
      id: "rev-2",
      name: "Sarah Miller",
      location: "Anthem, AZ",
      text: "Reliable Services & Solutions designed and framed our custom cedar patio pergola and outdoor dining kitchen. Their craftsmanship and attention to detail are spectacular. They kept the project clean, communicated timelines daily, and handled the building permits stress-free. True hardworking professionals.",
      rating: 5,
      service: "General Contracting & Custom Patio",
      date: "April 2026",
    },
    {
      id: "rev-3",
      name: "James Kincaid",
      location: "Desert Hills, AZ",
      text: "As a local small business owner, finding contractors who don't run pricing games is rare. These guys are honest, transparent, and completely forthright. They handled our commercial office plumbing maintenance with absolute speed and perfection. Highly recommended!",
      rating: 5,
      service: "Commercial Plumbing Maintenance",
      date: "March 2026",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Decorative vectors */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[10%] w-80 h-80 rounded-full bg-orange-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs text-orange-500 uppercase tracking-widest font-black inline-flex items-center space-x-2">
            <span className="w-4 h-[2px] bg-orange-500 block" />
            <MessageSquare className="h-4 w-4 text-orange-500" />
            <span>Customer Reviews</span>
            <span className="w-4 h-[2px] bg-orange-500 block" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 leading-none tracking-tight">
            Word Of Mouth From Your Neighbors
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-normal max-w-xl mx-auto">
            Check out what homeowners and local businesses are saying about our service quality.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Card Outer Glow frame */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 to-blue-900/10 rounded-3xl blur-md opacity-40 pointer-events-none" />

          {/* Testimonial Active Card */}
          <div className="relative rounded-3xl bg-white border border-slate-200 shadow-xl p-8 sm:p-12 min-h-[325px] flex flex-col justify-between overflow-hidden">
            <div className="absolute top-6 right-8 text-slate-100 pointer-events-none select-none">
              <Quote className="h-28 w-28 text-slate-100 font-bold" />
            </div>

            <div className="space-y-6">
              {/* Stars rating */}
              <div className="flex items-center space-x-1">
                {Array.from({ length: reviews[activeIdx].rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500 shadow-sm" />
                ))}
              </div>

              {/* Text content */}
              <p className="text-base sm:text-lg md:text-xl font-normal italic text-slate-700 leading-relaxed relative z-10">
                "{reviews[activeIdx].text}"
              </p>
            </div>

            {/* Profile Footer info */}
            <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-8 relative z-10 flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center font-bold text-white shadow-md">
                  {reviews[activeIdx].name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-blue-900 text-sm uppercase tracking-wide">
                    {reviews[activeIdx].name}
                  </h4>
                  <span className="text-[11px] font-bold text-slate-400 flex items-center space-x-2">
                    <span className="uppercase">{reviews[activeIdx].location}</span>
                    <span>•</span>
                    <span className="text-orange-500 font-black uppercase tracking-wider">{reviews[activeIdx].service}</span>
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono text-slate-400">
                {reviews[activeIdx].date}
              </span>
            </div>

          </div>

          {/* Left/Right controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-white border border-slate-200 hover:border-orange-500 text-slate-600 hover:text-orange-500 rounded-full shadow-md transition-all focus:outline-none"
              aria-label="Previous review"
              id="testimonial-prev-btn"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex space-x-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-3.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                    idx === activeIdx ? "bg-orange-500 w-7" : "bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 bg-white border border-slate-200 hover:border-orange-500 text-slate-600 hover:text-orange-500 rounded-full shadow-md transition-all focus:outline-none"
              aria-label="Next review"
              id="testimonial-next-btn"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
