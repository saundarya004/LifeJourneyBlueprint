import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Code, Users, Brain, Star } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  category: 'technical' | 'leadership' | 'community';
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "AI Innovation Leader",
    description: "Led development of enterprise-scale AI solutions, improving system efficiency by 40%",
    icon: <Brain className="w-6 h-6" />,
    category: 'technical'
  },
  {
    id: 2,
    title: "Community Builder",
    description: "Mentored 50+ students in coding workshops and created accessible learning materials",
    icon: <Users className="w-6 h-6" />,
    category: 'community'
  },
  {
    id: 3,
    title: "Technical Excellence",
    description: "Implemented complex system architectures and optimized performance across multiple projects",
    icon: <Code className="w-6 h-6" />,
    category: 'technical'
  },
  {
    id: 4,
    title: "Team Leadership",
    description: "Successfully led and mentored junior developers, fostering growth and innovation",
    icon: <Star className="w-6 h-6" />,
    category: 'leadership'
  }
];

const categoryColors = {
  technical: 'from-blue-500 to-cyan-300',
  leadership: 'from-purple-500 to-pink-300',
  community: 'from-green-500 to-emerald-300'
};

export function AchievementBadges() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-8 text-center">Achievements</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.id}
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className={`
                cursor-pointer p-6 rounded-xl text-center
                bg-gradient-to-br ${categoryColors[achievement.category]}
                hover:shadow-lg transition-all duration-300
                transform hover:-translate-y-1
              `}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setSelectedAchievement(achievement);
                triggerConfetti();
              }}
            >
              <div className="bg-white/90 rounded-full p-4 mx-auto w-16 h-16 flex items-center justify-center mb-3">
                {achievement.icon}
              </div>
              <h4 className="font-semibold text-white">{achievement.title}</h4>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <div className={`
                w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center
                bg-gradient-to-br ${categoryColors[selectedAchievement.category]}
              `}>
                {selectedAchievement.icon}
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{selectedAchievement.title}</h3>
              <p className="text-gray-600 text-center">{selectedAchievement.description}</p>
              <motion.button
                className="mt-4 w-full py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                onClick={() => setSelectedAchievement(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
