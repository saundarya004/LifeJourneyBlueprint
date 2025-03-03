import { VideoBackground } from "@/components/VideoBackground";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <VideoBackground />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 pt-20 text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Welcome to My World
        </h1>
        <p className="mt-4 text-xl text-white/90">
          Software Engineer • AI Enthusiast • Change Maker
        </p>
      </motion.div>
      <Navigation />
    </div>
  );
}
