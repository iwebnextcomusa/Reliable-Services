import { ChevronDown, Phone, FileText, CheckCircle2, Shield, MapPin } from "lucide-react";
import { motion } from "motion/react";
import sunsetHero from "../assets/images/arizona_sunset_hero_1779996332278.png";

interface HeroProps {
  onRequestQuote: () => void;
}

export default function Hero({ onRequestQuote }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, delay: 0.8 },
    },
  };

  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-slate-50"
    >
      <div
        className="w-full max-w-7xl rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative min-h-[75vh] flex items-center p-6 sm:p-12 lg:p-16 bg-blue-900 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to tr, rgba(15, 23, 42, 0.95) 20%, rgba(30, 58, 138, 0.5) 60%, rgba(249, 115, 22, 0.2) 100%), url(${sunsetHero})`,
        }}
        id="hero-capsule"
      >
        {/* Modern decorative nodes */}
        <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none opacity-30" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mt-20 -mr-20 blur-3xl pointer-events-none"></div>

        <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Tagline / SEO Marker */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2 bg-blue-950/50 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full"
            >
              <MapPin className="h-4.5 w-4.5 text-orange-400 flex-shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                New River, Arizona & Anthem local service team
              </span>
            </motion.div>

            {/* Custom display divider line */}
            <motion.div variants={itemVariants} className="w-12 h-1 bg-orange-500" />

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[0.95] tracking-tight mb-2 italic uppercase"
            >
              Reliable Service <br />
              <span className="text-orange-400">
                You Can Count On
              </span>
            </motion.h1>

            {/* Intro Description */}
            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-sm sm:text-base max-w-md leading-relaxed mb-4 font-light"
            >
              Premium local service company in Arizona. Serving New River and surrounding areas with honesty, professionalism, and unmatched quality since day one.
            </motion.p>

            {/* Interactive Checkmarks */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2 w-full max-w-lg"
            >
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Licensed Arizona Special</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Shield className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <CheckCircle2 className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Prompt Diagnostics</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Shield className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">On-Call Dispatch Crew</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full"
            >
              <a
                href="tel:623-980-5133"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded font-black text-xs uppercase tracking-widest text-center shadow-md hover:scale-103 active:scale-97 transition-all duration-200"
                id="hero-call-now"
              >
                <span>Call 623.980.5133</span>
              </a>
              <button
                onClick={onRequestQuote}
                className="bg-white text-blue-900 px-8 py-4 rounded font-black text-xs uppercase tracking-widest hover:bg-slate-100 shadow-md hover:scale-103 active:scale-97 transition-all duration-200 cursor-pointer"
                id="hero-request-quote"
              >
                <span>Request a Quote</span>
              </button>

              <div className="flex items-center gap-3 px-4 py-3 bg-blue-950/40 backdrop-blur-md rounded-lg border border-white/10">
                <div className="flex text-orange-400 text-xs text-nowrap">★★★★★</div>
                <span className="text-white text-[10px] font-bold uppercase tracking-tighter text-nowrap">4.9 Local Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Dynamic Floating Cards */}
          <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center">
            <motion.div
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-[380px]"
            >
              <div className="w-full aspect-[4/5] rounded-3xl p-6 bg-blue-950/40 border border-white/15 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent pointer-events-none" />

                <div className="flex justify-between items-center relative z-10">
                  <div className="bg-blue-950 px-3 py-1.5 rounded-full border border-white/10 flex items-center space-x-1.5 text-[9px] tracking-wider font-mono uppercase text-orange-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Always On Duty</span>
                  </div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400">
                    Since 1931 Family Line
                  </span>
                </div>

                {/* Central Premium Graphic */}
                <div className="my-auto py-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-4 text-orange-400 shadow-lg">
                    <Hammer className="h-7 w-7" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white uppercase tracking-wider">
                    Hardworking & Honest
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 max-w-[260px] leading-relaxed">
                    Delivering local Arizona confidence and reliable diagnostic services directly.
                  </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4 relative z-10 text-center">
                  <div>
                    <div className="text-2xl font-black text-orange-400">100%</div>
                    <div className="text-[9px] font-mono uppercase tracking-widest text-slate-400 mt-1">
                      Arizona Upkeep
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-200">623-980</div>
                    <div className="text-[9px] font-mono uppercase tracking-widest text-slate-400 mt-1">
                      PHX Area Local
                    </div>
                  </div>
                </div>
              </div>

              {/* Float indicators */}
              <div className="absolute top-[-20px] right-[-10px]">
                <div className="bg-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-200 flex items-center space-x-2">
                  <Shield className="h-4.5 w-4.5 text-orange-500 flex-shrink-0" />
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-black text-blue-900 uppercase">Fully Insured</span>
                    <span className="text-[9px] font-mono text-slate-400 uppercase">Licensed Crew</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Down arrow */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
          onClick={scrollToServices}
        >
          <span className="text-[9px] font-mono uppercase tracking-widest text-slate-400 mb-1">
            Explore Services
          </span>
          <ChevronDown className="h-4 w-4 text-orange-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

// Simple placeholder fallback just in case Hammer was missing
function Hammer(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0-.83-.83-.83-2.17 0-3L12 9" />
      <path d="M17.64 15 22 10.64" />
      <path d="m21 11-1.39-1.39a2.37 2.37 0 0 1-.36-2.56L20 4H16l-.05.75a2.37 2.37 0 0 1-2.56-.36L12 3H3v6l.75.05a2.41 2.41 0 0 1 1 3.51L3.36 14" />
    </svg>
  );
}
