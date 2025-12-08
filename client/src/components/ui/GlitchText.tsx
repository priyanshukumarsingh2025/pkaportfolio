import React from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: React.ElementType;
}

export default function GlitchText({ text, className = "", as: Component = "h1" }: GlitchTextProps) {
  // Cast to any to avoid strict JSX intrinsic element checks for dynamic tags
  const Tag = Component as any;

  return (
    <Tag className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-0 group-hover:opacity-70 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] transition-all duration-75 select-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-secondary opacity-0 group-hover:opacity-70 group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-75 select-none">
        {text}
      </span>
    </Tag>
  );
}
