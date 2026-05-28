import { ShieldCheck, Truck, Clock, Sparkles, Star, Users } from "lucide-react";

export default function WhyChooseUs() {
  const coreReasons = [
    {
      title: "100% Locally Owned & Operated",
      description: "We reside in New River. Your satisfaction directly impacts our local Arizona neighbourhood community, which is why we never compromise on quality.",
      icon: Users,
    },
    {
      title: "Transparent, Upfront Estimates",
      description: "We provide complete diagnostics on every dispatch. You choose whether to proceed based on clear pricing with zero hidden margins.",
      icon: ShieldCheck,
    },
    {
      title: "Certified Professional Skills",
      description: "Our core specialists arrive fully equipped with advanced diagnostic tools, adhering strictly to safe utility and contracting guidelines.",
      icon: Sparkles,
    },
    {
      title: "24/7 Rapid Incident Response",
      description: "Plumbing leak or electrical blackout? Our emergency staff lives right in New River/Anthem, cutting downtime to just minutes.",
      icon: Clock,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Dynamic background lighting grids */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-blue-900/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side Content Column */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <span className="text-xs text-orange-500 uppercase tracking-widest font-black flex items-center space-x-2">
              <span className="w-8 h-[2px] bg-orange-500 block" />
              <span>Reliable Advantage</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 leading-none tracking-tight">
              Why New River Neighbors Choose Us
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Since our family launched local service in Arizona, we have operated with one humble mission: to prove that trustworthy, hardworking, and premium-quality contracting still exists.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light mb-4">
              We care about establishing a longlasting relationship with our customers. Whether we are patching a drywall leak, fixing an old breaker panel, or framing a custom patio expansion, we treat your property with the extreme professional respect it deserves.
            </p>

            {/* Micro proof widget */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl flex items-center space-x-4 max-w-md shadow-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/20 flex items-center justify-center text-orange-600 text-xs font-bold font-mono">
                  NR
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/20 flex items-center justify-center text-blue-600 text-xs font-bold font-mono">
                  AN
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center text-emerald-600 text-xs font-bold font-mono">
                  CC
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1">
                  <Star className="h-3.5 w-3.5 fill-orange-500 text-orange-500" />
                  <span className="text-xs font-bold text-blue-900">4.9/5 Rating</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                  Across 120+ Local Verified Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Bento Cards Column */}
          <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100/50 transition-all duration-300 hover:border-orange-500/50 flex flex-col justify-between group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-sm text-blue-900 uppercase tracking-widest group-hover:text-orange-500 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
