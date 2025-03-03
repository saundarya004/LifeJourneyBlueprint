import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap, Code } from "lucide-react";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  description: string;
  icon: JSX.Element;
  category: "work" | "education" | "achievement";
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    date: "2023 - Present",
    description: "Leading development of enterprise-scale applications and AI-driven solutions. Mentoring junior developers and implementing system optimizations.",
    icon: <Code className="w-6 h-6" />,
    category: "work"
  },
  {
    id: 2,
    title: "Masters in Information Systems",
    date: "2023 - Present",
    description: "Pursuing advanced studies at University of Washington, focusing on AI and advanced system design.",
    icon: <GraduationCap className="w-6 h-6" />,
    category: "education"
  },
  {
    id: 3,
    title: "Software Engineer",
    date: "2021 - 2023",
    description: "Developed scalable applications and implemented AI models, achieving 40% performance improvement.",
    icon: <Briefcase className="w-6 h-6" />,
    category: "work"
  },
  {
    id: 4,
    title: "Technical Excellence Award",
    date: "2022",
    description: "Recognized for outstanding contributions to system architecture and performance optimization.",
    icon: <Award className="w-6 h-6" />,
    category: "achievement"
  }
];

const categoryColors = {
  work: "from-blue-500 to-cyan-300",
  education: "from-purple-500 to-pink-300",
  achievement: "from-amber-500 to-yellow-300"
};

export function InteractiveTimeline() {
  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
        Professional Journey
      </h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20" />

        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Line to center */}
            <div className="flex-1 flex items-center justify-end">
              <div 
                className={`w-1/2 h-0.5 bg-gradient-to-r ${index % 2 === 0 ? categoryColors[event.category] : "opacity-0"}`}
              />
            </div>

            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              className={`
                relative z-10 w-12 h-12 rounded-full flex items-center justify-center
                bg-gradient-to-br ${categoryColors[event.category]}
                shadow-lg
              `}
            >
              {event.icon}
            </motion.div>

            {/* Line from center */}
            <div className="flex-1 flex items-center">
              <div 
                className={`w-1/2 h-0.5 bg-gradient-to-r ${index % 2 !== 0 ? categoryColors[event.category] : "opacity-0"}`}
              />
            </div>

            {/* Content */}
            <motion.div
              className={`absolute w-[calc(50%-3rem)] ${
                index % 2 === 0 ? "right-[calc(50%+3rem)]" : "left-[calc(50%+3rem)]"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-card p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{event.date}</p>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
