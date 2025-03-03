import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Story {
  id: number;
  title: string;
  description: string;
  details: string[];
  image: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: "Software Engineering Journey",
    description: "Senior Software Engineer specializing in Java, Python, and AI models",
    details: [
      "Led development of enterprise-scale applications",
      "Implemented AI-driven solutions",
      "Mentored junior developers",
      "Achieved 40% improvement in system performance"
    ],
    image: "/attached_assets/A_dynamic_female_Senior_Software_Engineer_with_sho.png"
  },
  {
    id: 2,
    title: "Teaching & Community",
    description: "Making a difference through education and community work",
    details: [
      "Volunteer teacher for coding workshops",
      "Mentored 50+ students",
      "Created accessible learning materials",
      "Organized tech community events"
    ],
    image: "/attached_assets/A_young_woman_with_shoulder-length_hair_helping_ch.png"
  },
  {
    id: 3,
    title: "Creative Pursuits",
    description: "Balancing tech with creative and wellness activities",
    details: [
      "Regular performer at local events",
      "Certified fitness instructor",
      "Organized wellness workshops",
      "Created tech-art installations"
    ],
    image: "/attached_assets/A_young_woman_with_shoulder-length_hair_singing_in.png"
  }
];

export function StoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
    setFlipped(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    setFlipped(false);
  };

  return (
    <div className="mt-8 relative">
      <div className="relative h-[500px] overflow-hidden rounded-xl bg-gradient-to-b from-primary/5 to-primary/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <motion.div
                className="absolute inset-0 cursor-pointer"
                onClick={() => setFlipped(!flipped)}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of card */}
                <div className={`absolute inset-0 ${flipped ? 'backface-hidden' : ''}`}>
                  <img
                    src={stories[currentIndex].image}
                    alt={stories[currentIndex].title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                      <h3 className="text-2xl font-bold mb-2">{stories[currentIndex].title}</h3>
                      <p className="text-lg opacity-90">{stories[currentIndex].description}</p>
                      <p className="text-sm mt-4 animate-pulse">Click to reveal more details</p>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className={`absolute inset-0 bg-black/90 p-8 text-white rounded-xl ${!flipped ? 'backface-hidden' : ''}`}
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-6">{stories[currentIndex].title}</h3>
                    <ul className="space-y-4">
                      {stories[currentIndex].details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
