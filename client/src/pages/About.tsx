import { motion } from "framer-motion";
import GlitchText from "@/components/ui/GlitchText";

const skills = [
  "React / Next.js", "TypeScript", "Three.js / R3F", "WebGL / GLSL", 
  "Tailwind CSS", "Node.js", "PostgreSQL", "Framer Motion"
];

const experience = [
  {
    year: "2024 - PRESENT",
    role: "SENIOR FRONTEND ENGINEER",
    company: "FUTURE_CORP",
    desc: "Leading the development of immersive web experiences."
  },
  {
    year: "2022 - 2024",
    role: "CREATIVE DEVELOPER",
    company: "DIGITAL_AGENCY",
    desc: "Built award-winning 3D websites for major brands."
  }
];

export default function About() {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-20 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-16 text-white">
          WHO_<span className="text-primary">AM_I?</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <p className="font-mono text-lg text-muted-foreground leading-relaxed mb-10">
              I am a creative developer obsessed with the space between design and engineering. 
              I don't just write code; I craft digital atmospheres. My work is defined by 
              bold typography, micro-interactions, and 3D depth.
            </p>
            <p className="font-mono text-lg text-muted-foreground leading-relaxed">
              Based in the digital void, working globally. Always pushing the boundaries 
              of what's possible in a browser.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-mono mb-8 text-white border-b border-white/20 pb-4">Tech_Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <span key={i} className="px-4 py-2 border border-white/20 font-mono text-sm hover:border-primary hover:text-primary transition-colors cursor-crosshair">
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-2xl font-mono mt-16 mb-8 text-white border-b border-white/20 pb-4">Timeline</h3>
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-display text-white group-hover:text-primary transition-colors">{exp.role}</h4>
                    <span className="font-mono text-sm text-muted-foreground">{exp.year}</span>
                  </div>
                  <p className="font-mono text-primary text-sm mb-2">@{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
