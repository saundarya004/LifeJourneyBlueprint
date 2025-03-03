import { motion } from "framer-motion";
import { ContentSection } from "@/components/ContentSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Content() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="sticky top-4 z-10"
        >
          <Link href="/">
            <Button 
              variant="ghost" 
              className="mb-8 hover:bg-primary/10 transition-colors"
              size="lg"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              My Story
            </h1>
            <p className="text-xl text-muted-foreground">
              A journey through technology, creativity, and compassion
            </p>
          </motion.div>

          <ContentSection />
        </div>
      </div>
    </div>
  );
}