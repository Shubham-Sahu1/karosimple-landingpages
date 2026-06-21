"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * FloatingCard — 3D floating card element for the hero scene
 * Shows a stylized QR + star rating interface as a 3D plane
 */
export function FloatingCard({ position = [2, 0, -1] }) {
  const meshRef = useRef();

  // Subtle rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      meshRef.current.rotation.x =
        Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {/* Card face */}
        <planeGeometry args={[2.2, 1.4, 1, 1]} />
        <meshStandardMaterial
          color="#FFFFFF"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>

      {/* Card border outline */}
      <mesh position={position}>
        <planeGeometry args={[2.24, 1.44, 1, 1]} />
        <meshStandardMaterial
          color="#3DAA72"
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
          wireframe={false}
        />
      </mesh>

      {/* Green accent dot (represents QR point) */}
      <mesh position={[position[0] - 0.6, position[1] + 0.2, position[2] + 0.01]}>
        <circleGeometry args={[0.15, 16]} />
        <meshStandardMaterial color="#3DAA72" transparent opacity={0.9} />
      </mesh>

      {/* Star row (5 small yellow spheres) */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            position[0] - 0.8 + i * 0.3,
            position[1] - 0.25,
            position[2] + 0.01,
          ]}
        >
          <circleGeometry args={[0.07, 6]} />
          <meshStandardMaterial color="#FBBF24" transparent opacity={0.9} />
        </mesh>
      ))}
    </Float>
  );
}
export default FloatingCard;
