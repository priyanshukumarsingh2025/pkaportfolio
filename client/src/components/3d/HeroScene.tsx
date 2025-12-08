import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import abstractShape from "@assets/generated_images/abstract_chrome_liquid_shape_for_hero.png";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#111" 
          roughness={0.1} 
          metalness={1}
          wireframe
          emissive="#39ff14"
          emissiveIntensity={0.5}
        />
      </mesh>
      {/* Inner solid core */}
      <mesh scale={2.4}>
         <icosahedronGeometry args={[1, 0]} />
         <meshStandardMaterial color="black" roughness={0.2} metalness={0.8} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 h-screen w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <Environment preset="city" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#39ff14" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
        
        <AbstractShape />
        
        <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#39ff14" />
      </Canvas>
    </div>
  );
}
