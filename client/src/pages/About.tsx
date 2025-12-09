import { motion } from "framer-motion";
import GlitchText from "@/components/ui/GlitchText";

const skills = [
  "C Programming",
  "OOPs Concepts",
  "C++",
  "Data Structures & Algorithms",
  "Visual Basic"
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 group w-fit"
            >
              <div className="relative border-4 border-primary p-2 bg-black/50 backdrop-blur-sm hover:border-white transition-all duration-300 max-w-[280px] max-h-[350px]">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary group-hover:bg-white transition-colors"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary group-hover:bg-white transition-colors"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary group-hover:bg-white transition-colors"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary group-hover:bg-white transition-colors"></div>
                <div className="relative overflow-hidden border-2 border-white/20">
                  <img 
                    src="/mypic.jpg" 
                    alt="Priyanshu Kumar Singh" 
                    className="w-[250px] h-[300px] object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
              </div>
            </motion.div>
            <p className="font-mono text-lg text-muted-foreground leading-relaxed mb-6">
              I am Priyanshu Kumar Singh, a creative developer currently in my final year of BCA. I love building interactive, bold, and animated web experiences that blend clean design with modern engineering.
            </p>
            <p className="font-mono text-lg text-muted-foreground leading-relaxed mb-6">
              I explore the web like a playground—experimenting with motion, 3D elements, and micro-interactions that make interfaces feel alive. I’ve built fun projects like Tic-Tac-Toe and Stone–Paper–Scissors, and I’m constantly leveling up my skills in Next.js, TypeScript, and modern UI animation tools.
            </p>
            <p className="font-mono text-lg text-muted-foreground leading-relaxed">
              My goal is simple: craft digital experiences that feel immersive, energetic, and unforgettable.
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
