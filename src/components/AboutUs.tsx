import { Check, ShieldCheck, Heart, UserCheck, Star } from "lucide-react";
import craftImage from "../assets/images/service_truck_craft_1779996352800.png";

export default function AboutUs() {
  const values = [
    {
      title: "Hardworking & Dependable",
      desc: "When we schedule a job in New River, we show up on time. Our reputation relies entirely on honoring our word and delivering exceptional results on every visit.",
      icon: ShieldCheck,
    },
    {
      title: "Honesty and Clear Communication",
      desc: "Our pricing structure is completely transparent with no hidden overhead or unexpected fees. We explain diagnostics, troubleshoot direct errors, and quote accurately.",
      icon: Heart,
    },
    {
      title: "Family-Owned Arizona Pride",
      desc: "As local residents, we understand the climate, infrastructure, and unique needs of properties in Desert Hills, Anthem, and New River, Arizona.",
      icon: UserCheck,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 right-[-100px] w-96 h-96 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-50px] w-80 h-80 rounded-full bg-blue-950/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Visual Showcase Frame */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative">
              {/* Outer Glowing Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 via-slate-200 to-blue-900 rounded-3xl blur-md opacity-25" />
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 aspect-[4/5] md:aspect-square lg:aspect-[4/5] border border-slate-200 group">
                <img
                  src={craftImage}
                  alt="Reliable Services local Arizona craftsmanship"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-transparent to-transparent opacity-80" />
                
                {/* Image Overlay Panel */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/95 backdrop-blur-md rounded-xl border border-slate-200 shadow-lg">
                  <div className="flex items-center space-x-2 text-orange-500 mb-1">
                    <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                    <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                    <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                    <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                    <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                  </div>
                  <h4 className="font-display font-extrabold text-blue-900 text-sm italic uppercase leading-tight">
                    "True professionals — dependable, honest, and hardworking!"
                  </h4>
                  <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-widest">
                    — Reliable Customer, Anthem AZ
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-[-20px] left-[-20px] bg-white border border-slate-200 px-4 py-2.5 rounded-xl shadow-xl flex items-center space-x-2">
                <span className="text-orange-500 font-black text-3xl">90+</span>
                <div className="text-[9px] uppercase tracking-wider font-bold text-slate-700 leading-tight">
                  <span>Years Family</span>
                  <br />
                  <span className="text-slate-400">Legacy Lineage</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <span className="text-xs text-orange-500 uppercase tracking-widest font-black flex items-center space-x-2">
                <span className="w-8 h-[2px] bg-orange-500 block" />
                <span>Our Roots</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 leading-none tracking-tight">
                Honoring Trust in New River, Arizona Since Day One
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Reliable Services & Solutions is a dedicated family-owned and locally operated business based in <strong className="text-blue-900 font-semibold">New River, Arizona</strong>. Built on a foundation of straightforward values, we strive to bridge the gap between quality workmanship and outstanding local customer service.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                We know that welcoming a contractor into your home or commercial workspace is a matter of trust. That is why our technicians are not only highly trained and safety-conscious but are also committed to giving you honest diagnostics, keeping transparent prices, and handling every repair as if it were for our own family.
              </p>
            </div>

            {/* Core Values Stack */}
            <div className="space-y-4">
              {values.map((v, idx) => {
                const IconComp = v.icon;
                return (
                  <div key={idx} className="flex space-x-4 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/50 transition-all group">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 group-hover:scale-105 transition-transform">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <div className="flex-1 flex flex-col space-y-1">
                      <h3 className="font-bold text-sm text-blue-900 uppercase tracking-wider">
                        {v.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Local Areas Tag Cloud */}
            <div className="pt-4 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 mr-2">
                  Serving Locally:
                </span>
                {["New River", "Desert Hills", "Anthem", "Cave Creek", "Phoenix", "Phoenix Metro Area"].map((area) => (
                  <span
                    key={area}
                    className="text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-sm bg-slate-100 border border-slate-200 text-slate-600"
                  >
                    {area}, AZ
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
