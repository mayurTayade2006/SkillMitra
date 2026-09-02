import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLocation } from 'react-router-dom';
import * as THREE from 'three';

// -------------------------------------------------------------
// HYPER-GLOSSY LIQUID SILK SWIRL & GLASS DROPLET SYSTEM
// Inspired by reference: Deep Glossy Cobalt/Navy Liquid Swirls,
// High-Specular Clearcoat Crests, and Floating Refractive Glass Dew Droplets
// -------------------------------------------------------------

// Helper to generate fluid swirl marbling texture (Navy, Cobalt, Cerulean, White Highlights)
function createLiquidSwirlTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Deep Obsidian / Oceanic Base
  const baseGrad = ctx.createLinearGradient(0, 0, 1024, 1024);
  baseGrad.addColorStop(0.0, '#040810');
  baseGrad.addColorStop(0.3, '#071A36');
  baseGrad.addColorStop(0.65, '#0E2E5C');
  baseGrad.addColorStop(1.0, '#040914');
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, 1024, 1024);

  // Organic Swirling Ribbons
  ctx.lineWidth = 45;
  for (let i = 0; i < 22; i++) {
    ctx.beginPath();
    const startX = Math.sin(i * 0.45) * 400 + 512;
    const startY = Math.cos(i * 0.35) * 400 + 512;
    ctx.moveTo(startX, startY);

    ctx.bezierCurveTo(
      Math.cos(i * 0.7) * 500 + 512,
      Math.sin(i * 0.5) * 450 + 512,
      Math.sin(i * 0.9) * 450 + 512,
      Math.cos(i * 0.8) * 500 + 512,
      Math.cos(i * 0.3) * 600 + 512,
      Math.sin(i * 0.6) * 600 + 512
    );

    const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
    if (i % 3 === 0) {
      grad.addColorStop(0, 'rgba(56, 189, 248, 0.45)'); // Cerulean Cyan
      grad.addColorStop(0.5, 'rgba(29, 78, 216, 0.6)'); // Royal Cobalt
      grad.addColorStop(1, 'rgba(4, 9, 20, 0.8)'); // Deep Navy
    } else if (i % 3 === 1) {
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.65)'); // Glossy Pearl White Liquid Edge
      grad.addColorStop(0.3, 'rgba(147, 197, 253, 0.5)'); // Ice Blue
      grad.addColorStop(1, 'rgba(14, 46, 92, 0.7)');
    } else {
      grad.addColorStop(0, 'rgba(30, 58, 138, 0.7)'); // Deep Blue
      grad.addColorStop(0.5, 'rgba(96, 165, 250, 0.4)');
      grad.addColorStop(1, 'rgba(2, 6, 23, 0.9)');
    }

    ctx.strokeStyle = grad;
    ctx.lineCap = 'round';
    ctx.stroke();
  }

  // Smooth liquid blur effect
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.MirroredRepeatWrapping;
  texture.wrapT = THREE.MirroredRepeatWrapping;
  return texture;
}

// -------------------------------------------------------------
// 1. UNDULATING LIQUID SILK SWIRL SURFACE
// -------------------------------------------------------------

function LiquidSilkSwirlSurface({ mouseRef }) {
  const meshRef = useRef();
  const liquidTexture = useMemo(() => createLiquidSwirlTexture(), []);

  // Dense plane geometry for dynamic organic wave ripples
  const geometry = useMemo(() => new THREE.PlaneGeometry(16, 11, 80, 60), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const pos = meshRef.current.geometry.attributes.position;

    const mouseX = mouseRef.current.x;
    const mouseY = mouseRef.current.y;

    for (let i = 0; i < pos.count; i++) {
      const u = pos.getX(i);
      const v = pos.getY(i);

      // Multi-frequency harmonic liquid swirl waves
      const wave1 = Math.sin(u * 0.55 + time * 0.65 + mouseX * 1.5) * Math.cos(v * 0.45 + time * 0.5 + mouseY);
      const wave2 = Math.sin((u + v) * 0.38 + time * 0.85) * 0.4;
      const wave3 = Math.cos(Math.sqrt(u * u + v * v) * 0.5 - time * 0.6) * 0.35;

      const z = (wave1 + wave2 + wave3) * 0.75;
      pos.setZ(i, z);
    }

    pos.needsUpdate = true;
    meshRef.current.geometry.computeVertexNormals();

    // Gentle global tilting
    meshRef.current.rotation.z = Math.sin(time * 0.15) * 0.06 - mouseX * 0.1;
    meshRef.current.rotation.x = -0.35 + Math.cos(time * 0.12) * 0.04 + mouseY * 0.1;
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0.8, -0.2, -1.8]} rotation={[-0.35, 0.15, -0.1]}>
      <meshPhysicalMaterial
        map={liquidTexture}
        color="#0a192f"
        emissive="#061224"
        emissiveIntensity={0.25}
        roughness={0.035} // Ultra-high liquid gloss finish
        metalness={0.22}
        clearcoat={1.0} // Wet liquid varnish
        clearcoatRoughness={0.02}
        transmission={0.35}
        ior={1.48}
        thickness={2.0}
        reflectivity={0.98}
        transparent
        opacity={0.94}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// -------------------------------------------------------------
// 2. FLOWING VISCOUS LIQUID SILK RIBBONS (Curling fluid streams)
// -------------------------------------------------------------

function ViscousFluidRibbon({ offset = 0, speed = 0.5, color = "#1E40AF", scale = 1.0, position = [0, 0, 0] }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    meshRef.current.rotation.x = Math.sin(time * speed * 0.5 + offset) * 0.4;
    meshRef.current.rotation.y = time * speed * 0.3 + offset;
    meshRef.current.rotation.z = Math.cos(time * speed * 0.4 + offset) * 0.3;

    meshRef.current.position.y = position[1] + Math.sin(time * speed + offset) * 0.25;
    meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.7 + offset) * 0.18;
  });

  return (
    <group ref={meshRef} position={position} scale={scale}>
      <mesh>
        {/* Curled liquid tube / torus knot for smooth paint stream */}
        <torusKnotGeometry args={[1.6, 0.22, 120, 24, 2, 3]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.025}
          metalness={0.35}
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          transmission={0.45}
          ior={1.52}
          thickness={1.8}
          transparent
          opacity={0.88}
        />
      </mesh>
    </group>
  );
}

// -------------------------------------------------------------
// 3. FLOATING REFRACTIVE GLASS DEW DROPLETS / BUBBLES
// -------------------------------------------------------------

function GlassDewDroplet({ initialPos, radius = 0.2, phase = 0, floatSpeed = 0.6, mouseRef }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const mouseX = mouseRef?.current?.x || 0;
    const mouseY = mouseRef?.current?.y || 0;

    // Organic floating bob and subtle drift
    meshRef.current.position.y = initialPos[1] + Math.sin(time * floatSpeed + phase) * 0.22 + mouseY * 0.3;
    meshRef.current.position.x = initialPos[0] + Math.cos(time * floatSpeed * 0.8 + phase) * 0.15 + mouseX * 0.3;
    meshRef.current.position.z = initialPos[2] + Math.sin(time * floatSpeed * 0.6 + phase) * 0.12;

    // Subtle gentle spin
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group ref={meshRef} position={initialPos}>
      {/* Crystal Clear Water/Glass Dew Sphere */}
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          emissive="#38bdf8"
          emissiveIntensity={0.15}
          transmission={0.96} // Hyper-clear water droplet
          ior={1.48} // Refractive index of water/glass droplet
          roughness={0.015} // Super glossy dew surface
          metalness={0.05}
          clearcoat={1.0}
          clearcoatRoughness={0.015}
          thickness={1.4}
          attenuationColor="#0e2a47"
          attenuationDistance={1.2}
          transparent
          opacity={0.96}
        />
      </mesh>

      {/* Radiant Specular Light Catch Glint */}
      <mesh position={[radius * 0.45, radius * 0.45, radius * 0.7]}>
        <sphereGeometry args={[radius * 0.12, 12, 12]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

function FloatingGlassDropletsSystem({ mouseRef }) {
  // Collection of glistening dew droplets matching reference image
  const droplets = useMemo(() => [
    // Prominent Upper-Right Cluster (Like in photo)
    { pos: [2.6, 1.8, 0.4], r: 0.32, phase: 0.0, speed: 0.7 },
    { pos: [3.2, 2.3, 0.8], r: 0.22, phase: 1.2, speed: 0.85 },
    { pos: [2.1, 2.4, 0.1], r: 0.16, phase: 2.4, speed: 0.65 },
    { pos: [3.8, 1.4, 0.2], r: 0.26, phase: 3.1, speed: 0.75 },
    { pos: [1.8, 1.2, 0.5], r: 0.14, phase: 0.8, speed: 0.9 },

    // Center / Floating Dew Droplets
    { pos: [0.6, 0.2, 0.6], r: 0.36, phase: 1.8, speed: 0.55 },
    { pos: [-0.4, 0.8, 0.2], r: 0.18, phase: 2.9, speed: 0.8 },
    { pos: [0.2, -0.6, 0.5], r: 0.24, phase: 4.1, speed: 0.6 },
    { pos: [1.2, -0.8, 0.3], r: 0.15, phase: 5.2, speed: 0.7 },

    // Left Depth Cluster
    { pos: [-2.8, 1.6, -0.2], r: 0.28, phase: 1.5, speed: 0.65 },
    { pos: [-3.4, 0.4, 0.3], r: 0.22, phase: 3.6, speed: 0.8 },
    { pos: [-2.2, -1.4, 0.1], r: 0.34, phase: 0.5, speed: 0.6 },
    { pos: [-3.8, -2.0, -0.5], r: 0.19, phase: 2.2, speed: 0.75 },

    // Bottom-Right Droplets
    { pos: [2.8, -1.8, 0.2], r: 0.30, phase: 4.5, speed: 0.7 },
    { pos: [3.6, -2.2, -0.3], r: 0.20, phase: 1.9, speed: 0.85 },
  ], []);

  return (
    <group>
      {droplets.map((d, i) => (
        <GlassDewDroplet
          key={i}
          initialPos={d.pos}
          radius={d.r}
          phase={d.phase}
          floatSpeed={d.speed}
          mouseRef={mouseRef}
        />
      ))}
    </group>
  );
}

// -------------------------------------------------------------
// 4. MAIN FLUID SCENE CONTROLLER (Camera, Parallax & Lighting)
// -------------------------------------------------------------

function LiquidSilkScene() {
  const location = useLocation();
  const sceneGroupRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Route-aware camera offset
  const targetPos = useMemo(() => {
    const path = location.pathname;
    if (path === '/') return { x: 0, y: 0, z: 0 };
    if (path.startsWith('/candidate')) return { x: 0.3, y: -0.1, z: -0.8 };
    if (path.startsWith('/government')) return { x: -0.3, y: 0.1, z: -1.0 };
    if (path.startsWith('/security')) return { x: 0.2, y: 0.0, z: -0.6 };
    return { x: 0.1, y: 0.0, z: -0.7 };
  }, [location.pathname]);

  // Mouse Parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = x * 0.5;
      mouseRef.current.targetY = y * 0.5;
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
      sceneGroupRef.current.position.x = THREE.MathUtils.lerp(sceneGroupRef.current.position.x, targetPos.x + mouseRef.current.x * 0.4, delta * 2.0);
      sceneGroupRef.current.position.y = THREE.MathUtils.lerp(sceneGroupRef.current.position.y, targetPos.y + mouseRef.current.y * 0.4, delta * 2.0);
      sceneGroupRef.current.position.z = THREE.MathUtils.lerp(sceneGroupRef.current.position.z, targetPos.z, delta * 2.0);

      sceneGroupRef.current.rotation.y = mouseRef.current.x * 0.15;
      sceneGroupRef.current.rotation.x = -mouseRef.current.y * 0.15;
    }
  });

  return (
    <>
      {/* Studio Lighting Setup for Liquid Reflection Highlights */}
      <ambientLight intensity={0.85} />
      <directionalLight position={[6, 8, 5]} intensity={2.5} color="#ffffff" />
      <directionalLight position={[-6, -4, 4]} intensity={1.5} color="#93C5FD" />

      {/* Point Lights: Cobalt Blue, Cerulean, Ice Cyan, Pearl White */}
      <pointLight position={[4, 3, 3]} intensity={2.4} color="#38BDF8" distance={15} />
      <pointLight position={[-4, 2, 2]} intensity={2.0} color="#1D4ED8" distance={14} />
      <pointLight position={[0, -4, 3]} intensity={1.8} color="#60A5FA" distance={12} />
      <pointLight position={[2, -2, 2]} intensity={1.6} color="#FFFFFF" distance={10} />

      <group ref={sceneGroupRef}>
        
        {/* 1. Main Undulating Liquid Silk Wave Mesh */}
        <LiquidSilkSwirlSurface mouseRef={mouseRef} />

        {/* 2. Flowing Viscous Liquid Silk Ribbons */}
        <ViscousFluidRibbon
          position={[2.4, 0.8, -0.8]}
          scale={0.95}
          speed={0.45}
          color="#1D4ED8"
          offset={0}
        />

        <ViscousFluidRibbon
          position={[-2.6, -1.2, -1.2]}
          scale={0.8}
          speed={0.55}
          color="#0E2E5C"
          offset={2.1}
        />

        {/* 3. Floating Refractive Glass Dew Droplets */}
        <FloatingGlassDropletsSystem mouseRef={mouseRef} />

      </group>
    </>
  );
}

// -------------------------------------------------------------
// 5. 2D CANVAS FALLBACK (Liquid Swirl & Glass Droplets)
// -------------------------------------------------------------

function Canvas2DLiquidFallback() {
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
      angle += 0.01;

      const w = canvas.width;
      const h = canvas.height;

      // Draw flowing liquid gradient curve
      ctx.save();
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, '#071A36');
      grad.addColorStop(0.5, '#1D4ED8');
      grad.addColorStop(1, '#040914');

      ctx.beginPath();
      ctx.moveTo(0, h * 0.4 + Math.sin(angle) * 30);
      ctx.bezierCurveTo(
        w * 0.3, h * 0.2 + Math.cos(angle) * 40,
        w * 0.7, h * 0.6 + Math.sin(angle * 1.2) * 40,
        w, h * 0.45 + Math.cos(angle * 0.8) * 30
      );
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      // Draw some floating glass bubble droplets
      for (let i = 0; i < 8; i++) {
        const bx = (w * (0.2 + i * 0.1)) + Math.cos(angle + i) * 15;
        const by = (h * (0.3 + (i % 3) * 0.15)) + Math.sin(angle * 1.2 + i) * 20;
        const br = 12 + (i % 4) * 5;

        ctx.beginPath();
        ctx.arc(bx, by, br, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Highlight
        ctx.beginPath();
        ctx.arc(bx - br * 0.3, by - br * 0.3, br * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fill();
      }

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
// 6. PERSISTENT BACKGROUND WRAPPER
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
        background: 'radial-gradient(ellipse 90% 75% at 65% 35%, #0B1C33 0%, #06101E 50%, #040810 100%)',
      }}
      aria-hidden="true"
    >
      {hasWebGL ? (
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 46 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full"
        >
          <LiquidSilkScene />
        </Canvas>
      ) : (
        <Canvas2DLiquidFallback />
      )}
    </div>
  );
}
