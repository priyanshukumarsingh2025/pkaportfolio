import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "NEON_DREAMS",
    category: "3D EXPERIENCE",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    tech: ["R3F", "Next.js", "GLSL"]
  },
  {
    id: 2,
    title: "CYBER_DASH",
    category: "WEB APPLICATION",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    tech: ["React", "Tailwind", "D3.js"]
  },
  {
    id: 3,
    title: "VOID_COMMERCE",
    category: "E-COMMERCE",
    image: "https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2069&auto=format&fit=crop",
    tech: ["Shopify", "Liquid", "GSAP"]
  },
  {
    id: 4,
    title: "GLITCH_GALLERY",
    category: "PORTFOLIO",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    tech: ["Vue", "Nuxt", "WebGL"]
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
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-display text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="font-mono text-sm text-muted-foreground">{project.category}</p>
                </div>
                <div className="flex gap-2">
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
