import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLocation } from 'react-router-dom';
import * as THREE from 'three';

// -------------------------------------------------------------
// CHROMATIC DISPERSION BEVELED CRYSTAL PRISM SYSTEM
// Inspired by the reference: Beveled Optical Glass with
// Spectral Rainbow Dispersion, Facet Edges, and High Gloss Sheen
// -------------------------------------------------------------

// Helper to generate dynamic spectral rainbow gradient texture
function createSpectralTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  
  // Diagonal spectral dispersion gradient matching reference image
  const grad = ctx.createLinearGradient(0, 0, 512, 512);
  grad.addColorStop(0.0, '#FF007F'); // Neon Magenta
  grad.addColorStop(0.18, '#FF5500'); // Bright Orange
  grad.addColorStop(0.35, '#FFE600'); // Vivid Yellow
  grad.addColorStop(0.52, '#00FF66'); // Neon Green
  grad.addColorStop(0.68, '#00E5FF'); // Electric Cyan
  grad.addColorStop(0.84, '#3B82F6'); // Indigo Blue
  grad.addColorStop(1.0, '#9D00FF'); // Deep Violet
  
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 512, 512);

  // Soft light streaks
  ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.fillRect(120, 0, 60, 512);
  ctx.fillRect(320, 0, 40, 512);
  
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// -------------------------------------------------------------
// 1. BEVELED PRISMATIC CRYSTAL BLOCK COMPONENT
// -------------------------------------------------------------

function BeveledPrismaticCrystalBlock({ 
  size = [3.2, 1.8, 0.9], 
  position = [0, 0, 0], 
  initialRotation = [0.55, -0.45, 0.35],
  rotSpeed = [0.08, 0.12, 0.05],
  driftSpeed = 0.6,
  scale = 1.0,
  isHero = false
}) {
  const groupRef = useRef();
  const innerRefractionRef = useRef();
  
  const spectralTexture = useMemo(() => createSpectralTexture(), []);
  const [w, h, d] = size;
  const bevelDepth = 0.22;

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Smooth 3D continuous multi-axis tumbling and drift
    groupRef.current.rotation.x += delta * rotSpeed[0];
    groupRef.current.rotation.y += delta * rotSpeed[1];
    groupRef.current.rotation.z += delta * rotSpeed[2];

    // Gentle vertical and horizontal floating drift
    groupRef.current.position.y = position[1] + Math.sin(time * driftSpeed + position[0]) * 0.18;
    groupRef.current.position.x = position[0] + Math.cos(time * driftSpeed * 0.7 + position[1]) * 0.12;

    // Subtle internal spectral refraction shift
    if (innerRefractionRef.current) {
      innerRefractionRef.current.rotation.z = time * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={initialRotation} scale={scale}>
      
      {/* 1. Main Optical Glass Core (Deep Midnight Glass Body) */}
      <mesh>
        <boxGeometry args={[w - bevelDepth * 0.8, h - bevelDepth * 0.8, d - bevelDepth * 0.6]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.93}
          ior={1.62}
          roughness={0.03}
          metalness={0.06}
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          thickness={2.2}
          attenuationColor="#130e2b"
          attenuationDistance={1.4}
          iridescence={1.0}
          iridescenceIOR={1.45}
          iridescenceThicknessRange={[100, 800]}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* 2. Outer Beveled / Chamfered Glass Facet Frame */}
      <mesh>
        <boxGeometry args={[w, h, d]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.88}
          ior={1.55}
          roughness={0.04}
          metalness={0.08}
          clearcoat={1.0}
          clearcoatRoughness={0.03}
          thickness={1.6}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* 3. Internal Spectral Rainbow Refraction Core (Matches Image Interior Glow) */}
      <mesh ref={innerRefractionRef} position={[0, 0, 0]}>
        <planeGeometry args={[w * 0.88, h * 0.88]} />
        <meshBasicMaterial
          map={spectralTexture}
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* 4. Bevel Facet Edges with Radiant Rainbow Dispersion Highlights */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(w, h, d)]} />
        <lineBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.85}
          linewidth={2}
        />
      </lineSegments>

      {/* Inner chamfer highlight lines */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(w - bevelDepth, h - bevelDepth, d - bevelDepth)]} />
        <lineBasicMaterial
          color="#FF007F"
          transparent
          opacity={0.75}
          linewidth={1.5}
        />
      </lineSegments>

      {/* 5. Corner Chromatic Caustic Nodes */}
      {isHero && (
        <>
          <mesh position={[w / 2, h / 2, d / 2]}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color="#FF007F" transparent opacity={0.9} />
          </mesh>
          <mesh position={[-w / 2, -h / 2, -d / 2]}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color="#00E5FF" transparent opacity={0.9} />
          </mesh>
          <mesh position={[w / 2, -h / 2, d / 2]}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color="#FFE600" transparent opacity={0.9} />
          </mesh>
          <mesh position={[-w / 2, h / 2, -d / 2]}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color="#9D00FF" transparent opacity={0.9} />
          </mesh>
        </>
      )}

    </group>
  );
}

// -------------------------------------------------------------
// 2. AMBIENT CHROMATIC DUST & PARTICLES
// -------------------------------------------------------------

function AmbientChromaticDust({ count = 35 }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 18;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 12;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef();

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.012;
      pointsRef.current.rotation.x += delta * 0.006;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#00E5FF"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

// -------------------------------------------------------------
// 3. MAIN SCENE CONTROLLER (Camera, Parallax & Multi-Crystals)
// -------------------------------------------------------------

function PrismaticCrystalScene() {
  const location = useLocation();
  const sceneGroupRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Route-aware subtle position offsets
  const targetPos = useMemo(() => {
    const path = location.pathname;
    if (path === '/') return { x: 0, y: 0, z: 0 };
    if (path.startsWith('/candidate')) return { x: 0.4, y: -0.1, z: -1.2 };
    if (path.startsWith('/government')) return { x: -0.4, y: 0.1, z: -1.4 };
    if (path.startsWith('/security')) return { x: 0.3, y: 0.0, z: -1.0 };
    return { x: 0.2, y: 0.0, z: -1.0 };
  }, [location.pathname]);

  // Mouse Parallax Listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = x * 0.45;
      mouseRef.current.targetY = y * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (sceneGroupRef.current) {
      // Smooth mouse interpolation
      mouseRef.current.x = THREE.MathUtils.lerp(mouseRef.current.x, mouseRef.current.targetX, delta * 2.5);
      mouseRef.current.y = THREE.MathUtils.lerp(mouseRef.current.y, mouseRef.current.targetY, delta * 2.5);

      // Smooth camera position and tilt
      sceneGroupRef.current.position.x = THREE.MathUtils.lerp(sceneGroupRef.current.position.x, targetPos.x + mouseRef.current.x * 0.5, delta * 2.0);
      sceneGroupRef.current.position.y = THREE.MathUtils.lerp(sceneGroupRef.current.position.y, targetPos.y + mouseRef.current.y * 0.5, delta * 2.0);
      sceneGroupRef.current.position.z = THREE.MathUtils.lerp(sceneGroupRef.current.position.z, targetPos.z, delta * 2.0);

      sceneGroupRef.current.rotation.y = mouseRef.current.x * 0.2;
      sceneGroupRef.current.rotation.x = -mouseRef.current.y * 0.2;
    }
  });

  return (
    <>
      {/* Studio Studio Lighting with Spectral Accent Rim Lights */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[8, 10, 6]} intensity={2.2} color="#ffffff" />
      <directionalLight position={[-8, -6, 4]} intensity={1.4} color="#ffffff" />

      {/* Chromatic Spectral Point Lights matching the reference refraction */}
      <pointLight position={[5, 4, 3]} intensity={2.0} color="#FF007F" distance={16} />
      <pointLight position={[-5, 3, 2]} intensity={2.0} color="#00E5FF" distance={15} />
      <pointLight position={[0, -5, 3]} intensity={1.6} color="#FFE600" distance={14} />
      <pointLight position={[4, -4, -2]} intensity={1.8} color="#9D00FF" distance={12} />

      <group ref={sceneGroupRef}>
        
        {/* 1. HERO BEVELED PRISMATIC CRYSTAL (Upper Right / Background - Exactly like Reference Photo) */}
        <BeveledPrismaticCrystalBlock
          size={[3.4, 1.8, 0.95]}
          position={[2.4, 0.5, 0.2]}
          initialRotation={[0.55, -0.45, 0.35]}
          rotSpeed={[0.035, 0.05, 0.025]}
          driftSpeed={0.5}
          scale={1.15}
          isHero={true}
        />

        {/* 2. Secondary Floating Prismatic Crystal (Left Mid-Depth) */}
        <BeveledPrismaticCrystalBlock
          size={[2.6, 1.4, 0.8]}
          position={[-3.4, -1.5, -1.0]}
          initialRotation={[-0.4, 0.6, -0.25]}
          rotSpeed={[-0.04, 0.045, 0.03]}
          driftSpeed={0.65}
          scale={0.9}
        />

        {/* 3. Companion Crystal Prism (Top-Left Background) */}
        <BeveledPrismaticCrystalBlock
          size={[2.2, 1.2, 0.7]}
          position={[-2.8, 2.4, -1.6]}
          initialRotation={[0.3, 0.4, -0.5]}
          rotSpeed={[0.03, -0.04, 0.035]}
          driftSpeed={0.55}
          scale={0.8}
        />

        {/* 4. Lower-Right Ambient Crystal Prism */}
        <BeveledPrismaticCrystalBlock
          size={[2.4, 1.3, 0.75]}
          position={[3.2, -2.4, -1.5]}
          initialRotation={[-0.5, -0.3, 0.4]}
          rotSpeed={[0.04, 0.035, -0.03]}
          driftSpeed={0.6}
          scale={0.85}
        />

      </group>

      <AmbientChromaticDust count={35} />
    </>
  );
}

// -------------------------------------------------------------
// 4. 2D CANVAS FALLBACK (Beveled Crystal Prism Renderer)
// -------------------------------------------------------------

function Canvas2DPrismaticFallback() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let angle = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      angle += 0.008;

      const cx = canvas.width * 0.74;
      const cy = canvas.height * 0.38;

      ctx.save();
      ctx.translate(cx, cy + Math.sin(angle) * 15);
      ctx.rotate(0.35 + Math.sin(angle * 0.8) * 0.05);

      // Rainbow Bevel Gradient
      const grad = ctx.createLinearGradient(-150, -80, 150, 80);
      grad.addColorStop(0, '#FF007F');
      grad.addColorStop(0.25, '#FFE600');
      grad.addColorStop(0.5, '#00FF66');
      grad.addColorStop(0.75, '#00E5FF');
      grad.addColorStop(1, '#9D00FF');

      // Outer Bevel Box
      ctx.strokeStyle = grad;
      ctx.lineWidth = 3;
      ctx.fillStyle = 'rgba(10, 16, 26, 0.85)';
      ctx.fillRect(-140, -75, 280, 150);
      ctx.strokeRect(-140, -75, 280, 150);

      // Inner Chamfer Frame
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(-120, -60, 240, 120);

      // Corner Chamfer Lines
      ctx.beginPath();
      ctx.moveTo(-140, -75); ctx.lineTo(-120, -60);
      ctx.moveTo(140, -75); ctx.lineTo(120, -60);
      ctx.moveTo(-140, 75); ctx.lineTo(-120, 60);
      ctx.moveTo(140, 75); ctx.lineTo(120, 60);
      ctx.stroke();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
}

// -------------------------------------------------------------
// 5. PERSISTENT BACKGROUND WRAPPER
// -------------------------------------------------------------

export default function PersistentBackground() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setHasWebGL(false);
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none select-none z-0 overflow-hidden transition-opacity duration-700 ${
        isHomepage ? 'opacity-100' : 'opacity-[0.45]'
      }`}
      style={{
        background: 'radial-gradient(ellipse 90% 75% at 65% 35%, #0f1c2d 0%, #08101a 50%, #070B10 100%)',
      }}
      aria-hidden="true"
    >
      {hasWebGL ? (
        <Canvas
          camera={{ position: [0, 0, 7.8], fov: 46 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full"
        >
          <PrismaticCrystalScene />
        </Canvas>
      ) : (
        <Canvas2DPrismaticFallback />
      )}
    </div>
  );
}
