import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, Heart, Music, Dumbbell } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function ContentSection() {
  const sections = [
    {
      title: "Professional Life",
      icon: <Code className="h-6 w-6" />,
      content: "Senior Software Engineer specializing in Java, Python, AI models, and Low-Level Design (LLD). Currently pursuing Masters in Information Systems at University of Washington.",
      image: "/attached_assets/A_dynamic_female_Senior_Software_Engineer_with_sho.png",
    },
    {
      title: "Personal Interests",
      icon: <Heart className="h-6 w-6" />,
      content: (
        <span className="space-y-2 block">
          <span className="flex items-center gap-2">
            <Music className="h-4 w-4" /> Singing
          </span>
          <span className="flex items-center gap-2">
            <Dumbbell className="h-4 w-4" /> Fitness Enthusiast
          </span>
        </span>
      ),
      image: "/attached_assets/A_young_woman_with_shoulder-length_hair_singing_in.png",
    },
    {
      title: "NGO Work",
      icon: <Heart className="h-6 w-6" />,
      content: "Helping my father run an NGO for mentally challenged children in India, making a positive impact in their lives.",
      image: "/attached_assets/A_young_woman_with_shoulder-length_hair_helping_ch.png",
    },
  ];

  return (
    <div className="space-y-16">
      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.2,
            duration: 0.5,
            type: "spring",
            stiffness: 100 
          }}
        >
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="space-y-4">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="p-2 rounded-full bg-primary/10 text-primary"
                >
                  {section.icon}
                </motion.div>
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed">
                {section.content}
              </div>
              <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-lg bg-muted">
                <motion.img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </AspectRatio>
            </CardContent>
          </Card>
          {index < sections.length - 1 && (
            <Separator className="my-8" />
          )}
        </motion.div>
      ))}
    </div>
  );
}