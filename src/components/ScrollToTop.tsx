import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          onClick={handleScrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white border border-slate-200 hover:border-orange-500 text-slate-500 hover:text-orange-500 shadow-md cursor-pointer hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/35"
          aria-label="Scroll back to top of page"
          title="Back to Top"
          id="scroll-to-top-btn"
        >
          <ArrowUp className="h-5 w-5 animate-pulse" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
