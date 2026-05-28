import { Home, Building2, Wrench, AlertTriangle, Hammer, Lightbulb, ChevronRight, Check } from "lucide-react";
import { motion } from "motion/react";
import desertHome from "../assets/images/desert_modern_home_1779996373033.png";

interface ServicesProps {
  onSelectCategory: (category: string) => void;
}

export default function Services({ onSelectCategory }: ServicesProps) {
  const serviceList = [
    {
      id: "residential",
      category: "Residential Services",
      icon: Home,
      short: "Reliable, clean, and professional upkeep for your Arizona home.",
      details: [
        "Electrical troubleshooting, lighting, and fans",
        "Plumbing fixtures, sewer lines, and water heaters",
        "Woodwork repairs, custom framing, trim, and drywall",
        "HVAC system reviews and local preventative filters",
      ],
      badge: "Local Favorite",
    },
    {
      id: "commercial",
      category: "Commercial Services",
      icon: Building2,
      short: "Heavy-duty workspace diagnostics, fixture updates, and maintenance.",
      details: [
        "Light commercial plumbing and electrical updates",
        "Office, retail, and restaurant fixture placement",
        "Scheduled facility upkeep and code compliance",
        "Safety barrier setup and cosmetic remodels",
      ],
      badge: "Business Grade",
    },
    {
      id: "maintenance",
      category: "Maintenance & Repairs",
      icon: Wrench,
      short: "Scheduled tune-ups and diagnostic troubleshooting to guard your assets.",
      details: [
        "Seasonal property safety inspections",
        "Appliance repair, diagnostics, and lubrication",
        "Tile, stone, and structural mortar adjustments",
        "Water filtration system servicing & tune-ups",
      ],
      badge: "Value Plan Available",
    },
    {
      id: "emergency",
      category: "Emergency Services",
      icon: AlertTriangle,
      short: "Rapid-response team deployed for urgent safety and leak restoration.",
      details: [
        "24/7 fast routing to New River and Anthem areas",
        "Sewer backed-up and critical water pipe burst caps",
        "Power failure restoration and emergency circuits",
        "Storm damage patch-ups and tarping structures",
      ],
      badge: "24/7 Call Core",
      isSpecial: true,
    },
    {
      id: "contracting",
      category: "General Contracting",
      icon: Hammer,
      short: "Complete outdoor structures, remodeling, and customized framing projects.",
      details: [
        "Room additions, garage expansions, and closets",
        "Patio enclosures, custom pergolas, and decks",
        "Outdoor kitchens, heavy stone framing, and steps",
        "Project design blueprints and local AZ permitting",
      ],
      badge: "Full Licensing",
    },
    {
      id: "custom",
      category: "Custom Solutions",
      icon: Lightbulb,
      short: "Innovative structural adjustments matching the rugged Arizona climate.",
      details: [
        "Off-grid desert solar/utility integrations",
        "Specialized dust protection & structural seals",
        "Custom metal framing and weld repairs",
        "Unique architectural challenges tackled directly",
      ],
      badge: "No Job Too Strange",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      {/* Visual background overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Bar */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs text-orange-500 uppercase tracking-widest font-black inline-flex items-center space-x-2">
            <span className="w-4 h-[2px] bg-orange-500 block" />
            <span>Our Expertise</span>
            <span className="w-4 h-[2px] bg-orange-500 block" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-none tracking-tight">
            Professional Solutions For Home & Business
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
            We provide local homeowners and business managers in New River, Arizona with honest, durable, and highly skilled service. Scroll through our core categories to request a custom quote.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`rounded-2xl p-6 border flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group ${
                  service.isSpecial
                    ? "border-blue-900 bg-blue-900 text-white"
                    : "border-slate-200 bg-white text-slate-800"
                }`}
                id={`service-card-${service.id}`}
              >
                {/* Glowing subtle gradient overlay for the emergency or featured key card */}
                {service.isSpecial && (
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent pointer-events-none" />
                )}

                <div>
                  {/* Card top details */}
                  <div className="flex justify-between items-center mb-5">
                    <div className={`p-3 rounded-lg ${
                      service.isSpecial
                        ? "bg-orange-500/15 text-orange-400 border border-orange-500/30 animate-pulse"
                        : "bg-slate-100 text-orange-500 border border-slate-200"
                    }`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`text-[9px] font-mono uppercase border px-2.5 py-1 rounded-full ${
                      service.isSpecial
                        ? "bg-blue-950 border-orange-500/30 text-orange-400"
                        : "bg-slate-50 border-slate-200 text-slate-500"
                    }`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Short */}
                  <h3 className={`font-bold text-lg uppercase tracking-wider mb-2 ${
                    service.isSpecial ? "text-white" : "text-blue-900"
                  }`}>
                    {service.category}
                  </h3>
                  <p className={`text-xs leading-relaxed font-normal mb-5 ${
                    service.isSpecial ? "text-slate-300" : "text-slate-500"
                  }`}>
                    {service.short}
                  </p>

                  {/* Feature Lists */}
                  <ul className={`space-y-2.5 mb-6 border-t pt-4 ${
                    service.isSpecial ? "border-white/10" : "border-slate-100"
                  }`}>
                    {service.details.map((bullet, index) => (
                      <li key={index} className="flex items-start space-x-2 text-xs">
                        <Check className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className={service.isSpecial ? "text-slate-200 font-light" : "text-slate-600 font-normal"}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow Request trigger */}
                <button
                  onClick={() => onSelectCategory(service.category)}
                  className={`w-full py-3 px-4 rounded font-black text-[10px] uppercase tracking-widest flex items-center justify-center space-x-2 border transition-all duration-300 cursor-pointer ${
                    service.isSpecial
                      ? "bg-orange-500 border-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/10"
                      : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                  }`}
                >
                  <span>Request {service.isSpecial ? "Emergency Assistance" : "a Quote"}</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Feature Spotlight Section using generated desert_modern_home */}
        <div className="mt-20 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/10 via-slate-100 to-blue-900/10 rounded-3xl blur-md opacity-40 pointer-events-none" />
          <div className="relative rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Side */}
            <div className="lg:col-span-7 space-y-6">
              <span className="bg-orange-500/10 text-orange-500 border border-orange-500/20 px-3 py-1 rounded-sm text-[10px] font-bold tracking-widest uppercase inline-block">
                Arizona Outdoor Specialties
              </span>
              <h3 className="text-2xl sm:text-3xl font-black italic uppercase leading-none text-blue-900 tracking-tight">
                Desert-Resilient Building & Custom Remodeling
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Do you plan to build an outdoor barbecue frame, a cedar shade pergola, or remodel a guest house that fits perfectly into the Arizona landscape?
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                Our general contracting services are designed specifically for hot desert climates. We utilize high-quality steel, custom-mixed stone mortars, heat-resistant lumber primers, and dust-resistant sealing techniques so your structural updates look immaculate and withstand the elements for decades to come.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onSelectCategory("General Contracting")}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded font-black text-xs uppercase tracking-widest shadow-md transition-all active:scale-97 cursor-pointer"
                >
                  Consult Custom Additions
                </button>
                <a
                  href="tel:623-980-5133"
                  className="bg-slate-50 border border-slate-200 hover:bg-slate-100 text-blue-900 text-center px-6 py-3.5 rounded font-black text-xs uppercase tracking-widest transition-all"
                >
                  Discuss Permits: 623.980.5133
                </a>
              </div>
            </div>

            {/* Right Image Side */}
            <div className="lg:col-span-5 relative w-full h-full min-h-[250px] lg:min-h-[350px] rounded-2xl overflow-hidden mt-4 lg:mt-0 border border-slate-200 shadow-md">
              <img
                src={desertHome}
                alt="Reliable custom home remodeling contracting Arizona"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 bg-blue-950/95 border border-white/10 p-4 rounded-xl shadow-lg">
                <span className="text-[9px] font-mono text-orange-400 block font-bold uppercase tracking-widest">Featured Project</span>
                <span className="text-xs text-white font-semibold">Contemporary Mountain-View Remodel, New River AZ</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
