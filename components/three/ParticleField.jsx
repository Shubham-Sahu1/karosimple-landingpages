"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

export function ParticleField({ count = 800 }) {
  const pointsRef = useRef();

  // Generate random points coordinates
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12; // X
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12; // Y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12; // Z
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0008;
      pointsRef.current.rotation.x += 0.0003;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#3DAA72"
        size={0.04}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.65}
      />
    </points>
  );
}
export default ParticleField;
