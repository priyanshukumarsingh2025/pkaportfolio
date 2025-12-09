import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Tic Tac Toe",
    category: "GAME",
    description: "A simple but engaging Tic Tac Toe game built with clean logic and instant move response. An intro project that helped me understand game loops, conditions, and UI handling.",
    image: "/tic-tac-toe.jpg",
    tech: ["JavaScript", "HTML", "CSS"],
    year: "2024"
  },
  {
    id: 2,
    title: "Stone Paper Scissors",
    category: "GAME",
    description: "A fast, interactive game designed with responsive UI and dynamic win-lose logic. Perfect for understanding conditions and user interaction flow.",
    image: "/stone-paper-scissors.jpg",
    tech: ["JavaScript", "HTML", "CSS"],
    year: "2024"
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-20 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-16 text-white">
          SELECTED_<span className="text-primary">WORKS</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden border border-white/10 mb-6 bg-muted">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-display text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="font-mono text-sm text-muted-foreground">{project.category} • {project.year}</p>
                  </div>
                </div>
                <p className="font-mono text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="outline" className="rounded-none border-white/20 text-xs font-mono">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
