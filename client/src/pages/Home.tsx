import { motion } from "framer-motion";
import HeroScene from "@/components/3d/HeroScene";
import GlitchText from "@/components/ui/GlitchText";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-20">
      <HeroScene />
      
      <div className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-primary font-mono mb-4 tracking-widest">
            // CREATIVE_DEVELOPER_PORTFOLIO
          </h2>
          <div className="text-6xl md:text-9xl font-display font-bold leading-[0.8] mb-8 text-white mix-blend-difference">
            <GlitchText text="PRIYANSHU" /><br />
            <GlitchText text="KUMAR SINGH" className="text-stroke" />
          </div>
          
          <p className="text-primary font-mono tracking-widest mb-6">
            creative developer | next.js typescript three.js
          </p>
          
          <p className="text-muted-foreground font-mono max-w-xl text-lg mb-10 leading-relaxed">
            Crafting immersive digital experiences with Next.js, Three.js, and raw code.
            Exploring the intersection of brutalism and interactivity.
          </p>

          <div className="flex gap-4">
            <Link href="/projects">
              <Button size="lg" className="rounded-none border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-black transition-all font-mono tracking-wider">
                VIEW_PROJECTS <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block">
        <div className="text-right font-mono text-xs text-muted-foreground">
          <p>SCROLL_FOR_MORE</p>
          <div className="h-16 w-[1px] bg-primary/50 ml-auto mt-4 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
