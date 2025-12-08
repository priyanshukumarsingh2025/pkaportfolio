import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import Navigation from "@/components/layout/Navigation";
import RaveCursor from "@/components/layout/RaveCursor";
import texture from "@assets/generated_images/dark_noise_texture_for_background.png";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => lenis.destroy();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen w-full bg-background text-foreground overflow-hidden selection:bg-primary selection:text-black">
        {/* Global Texture Overlay */}
        <div 
          className="fixed inset-0 pointer-events-none opacity-10 z-[100] mix-blend-overlay"
          style={{ backgroundImage: `url(${texture})` }}
        ></div>

        <RaveCursor />
        <Navigation />
        <Router />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
