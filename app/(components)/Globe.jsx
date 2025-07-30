'use client';

import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Earth texture component
function Earth() {
  const meshRef = useRef();
  const [textureLoaded, setTextureLoaded] = useState(false);
  
  // Load the Earth texture
  const earthTexture = useLoader(THREE.TextureLoader, '/textures/earth-texture8k.jpg');
  
  // Set texture properties when loaded
  React.useEffect(() => {
    if (earthTexture) {
      earthTexture.wrapS = THREE.ClampToEdgeWrapping;
      earthTexture.wrapT = THREE.ClampToEdgeWrapping;
      setTextureLoaded(true);
    }
  }, [earthTexture]);
  
  useFrame(() => {
    if (meshRef.current) {
      // Gentle rotation only
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.2, 0]}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        map={textureLoaded ? earthTexture : null}
        color={textureLoaded ? "#ffffff" : "#4A90E2"}
        metalness={0.05}
        roughness={0.9}
        transparent={false}
        opacity={1}
      />
    </mesh>
  );
}

// Atmosphere effect
function Atmosphere() {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.2, 0]}>
      <sphereGeometry args={[1.02, 64, 64]} />
      <meshStandardMaterial
        color="#87CEEB"
        transparent
        opacity={0.1}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

// Floating particles around the globe
function Particles() {
  const groupRef = useRef();
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 30 }, (_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3 - 0.2,
            (Math.random() - 0.5) * 3
          ]}
        >
          <sphereGeometry args={[0.008, 8, 8]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

// Loading fallback
function LoadingFallback() {
  return (
    <mesh position={[0, -0.2, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#4A90E2" />
    </mesh>
  );
}

// Main Globe component
function Globe() {
  return (
    <div className="w-full h-[50dvh] relative overflow-hidden">
      <Canvas
        camera={{ position: [0, 0.5, 2.5], fov: 75 }}
        style={{ background: 'linear-gradient(to bottom, #0f0f23, #1a1a2e, #16213e)' }}
      >
        {/* Lighting - More ambient, softer directional */}
        <ambientLight intensity={0.9} />
        <pointLight position={[3, 3, 3]} intensity={0.8} />
        <pointLight position={[-3, -3, -3]} intensity={0.4} color="#4A90E2" />
        <directionalLight position={[2, 2, 2]} intensity={0.6} />
        <directionalLight position={[-2, -2, -2]} intensity={0.3} />
        
        {/* Stars background */}
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        
        {/* Globe components */}
        <Suspense fallback={<LoadingFallback />}>
          <Earth />
        </Suspense>
        <Atmosphere />
        <Particles />
        
        {/* Controls */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
          minDistance={1.5}
          maxDistance={8}
          autoRotate={false}
        />
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute top-4 left-4 text-white z-10">
        {/* <h3 className="text-xl font-bold mb-2">Interactive Earth</h3>
        <p className="text-sm opacity-80">Drag to rotate • Scroll to zoom</p> */}
      </div>
    </div>
  );
}

export default Globe;
