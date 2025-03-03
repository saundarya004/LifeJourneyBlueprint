import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { id: 1, name: "Java", level: 90, category: "Languages" },
  { id: 2, name: "Python", level: 85, category: "Languages" },
  { id: 3, name: "AI Models", level: 80, category: "Technologies" },
  { id: 4, name: "Low-Level Design", level: 85, category: "Architecture" },
  { id: 5, name: "React", level: 88, category: "Frontend" },
  { id: 6, name: "Node.js", level: 82, category: "Backend" },
];

export function SkillsGalaxy() {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const galaxyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!galaxyRef.current) return;
      const rect = galaxyRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      galaxyRef.current.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`;
    };

    const galaxy = galaxyRef.current;
    if (galaxy) {
      galaxy.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (galaxy) {
        galaxy.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="mt-8 relative">
      <h3 className="text-xl font-semibold mb-6 text-center">Skills Galaxy</h3>
      <div 
        ref={galaxyRef}
        className="w-full h-[400px] relative transition-transform duration-300 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const radius = 150;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="absolute"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div 
                className={`
                  cursor-pointer p-4 rounded-full 
                  ${hoveredSkill?.id === skill.id 
                    ? 'bg-primary text-white scale-110' 
                    : 'bg-primary/10 hover:bg-primary/20'
                  } 
                  transition-all duration-300
                `}
              >
                <span className="whitespace-nowrap">{skill.name}</span>
              </div>
              {hoveredSkill?.id === skill.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/80 text-white p-2 rounded-lg whitespace-nowrap z-10"
                >
                  <div className="font-semibold">{skill.name}</div>
                  <div className="text-sm">Proficiency: {skill.level}%</div>
                  <div className="text-xs text-gray-300">{skill.category}</div>
                </motion.div>
              )}
            </motion.div>
          );
        })}

        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <g transform={`translate(${400/2}, ${400/2})`}>
            {skills.map((skill, i) => (
              skills.slice(i + 1).map((otherSkill, j) => {
                const angle1 = (i / skills.length) * 2 * Math.PI;
                const angle2 = ((i + j + 1) / skills.length) * 2 * Math.PI;
                const radius = 150;
                const x1 = Math.cos(angle1) * radius;
                const y1 = Math.sin(angle1) * radius;
                const x2 = Math.cos(angle2) * radius;
                const y2 = Math.sin(angle2) * radius;

                return (
                  <motion.line
                    key={`${skill.id}-${otherSkill.id}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ duration: 1, delay: (i + j) * 0.1 }}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="opacity-20"
                  />
                );
              })
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}