"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import ParticleField from "./ParticleField";

export function HeroScene() {
  return (
    <div className="w-full h-full min-h-[350px] lg:min-h-[500px] pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ powerPreference: "low-power", antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[6, 6, 6]} intensity={1.2} color="#3DAA72" />
        
        {/* Particle review field */}
        <ParticleField count={600} />

        {/* Wireframe globe representation */}
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.4}>
          <mesh rotation={[0.2, 0.4, 0.1]}>
            <sphereGeometry args={[2.2, 16, 16]} />
            <meshBasicMaterial
              color="#3D4F72"
              wireframe={true}
              transparent={true}
              opacity={0.3}
            />
          </mesh>
        </Float>
      </Canvas>
    </div>
  );
}
export default HeroScene;
