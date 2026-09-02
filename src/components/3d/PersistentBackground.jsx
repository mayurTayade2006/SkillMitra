import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLocation } from 'react-router-dom';
import * as THREE from 'three';

// -------------------------------------------------------------
// 1. FULL-PAGE SWEEPING KINETIC CHAIN RIBBON (Inspired by Reference Image 3)
// -------------------------------------------------------------

function KineticChainSegment({ index, total, impulseRef, mouseRef }) {
  const meshRef = useRef();

  // Color gradient across the chain: Electric Cyan -> Deep Blue -> Indigo -> Violet -> Fuchsia
  const color = useMemo(() => {
    const t = index / total;
    const c1 = new THREE.Color('#22D3EE'); // Cyan
    const c2 = new THREE.Color('#3B82F6'); // Electric Blue
    const c3 = new THREE.Color('#6366F1'); // Indigo
    const c4 = new THREE.Color('#A78BFA'); // Violet
    const c5 = new THREE.Color('#E879F9'); // Fuchsia

    const col = new THREE.Color();
    if (t < 0.25) {
      col.lerpColors(c1, c2, t / 0.25);
    } else if (t < 0.5) {
      col.lerpColors(c2, c3, (t - 0.25) / 0.25);
    } else if (t < 0.75) {
      col.lerpColors(c3, c4, (t - 0.5) / 0.25);
    } else {
      col.lerpColors(c4, c5, (t - 0.75) / 0.25);
    }
    return col;
  }, [index, total]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const impulse = impulseRef?.current || 0;
    const mouse = mouseRef?.current || { x: 0, y: 0 };

    const tNorm = (index / total) * 2 - 1; // -1 to 1 across screen width

    // Broad sweeping S-curve across the entire screen
    const baseX = tNorm * 8.5;
    const baseY = Math.sin(tNorm * Math.PI * 1.4 + time * 0.7) * 2.2 + Math.cos(time * 0.4 + tNorm * 2) * 0.6;
    const baseZ = Math.cos(tNorm * Math.PI * 1.2 + time * 0.6) * 2.0 - 0.6;

    // Interactive mouse displacement & click impulse wave traveling down the chain
    const clickWave = Math.sin(time * 6.0 - index * 0.35) * impulse * 0.8;
    const mousePush = Math.sin(tNorm * 3 + mouse.x * 2) * mouse.y * 0.6;

    meshRef.current.position.x = baseX + mouse.x * 0.8;
    meshRef.current.position.y = baseY + clickWave + mousePush;
    meshRef.current.position.z = baseZ;

    // Progressive helical twisting rotatory animation like the unzer chain
    const twistAngle = time * 0.9 + index * 0.18 + impulse * 2.0;
    meshRef.current.rotation.x = Math.sin(twistAngle) * 1.4;
    meshRef.current.rotation.y = twistAngle * 0.6 + tNorm * 0.8;
    meshRef.current.rotation.z = Math.cos(twistAngle * 0.8) * 0.9;
  });

  return (
    <mesh ref={meshRef}>
      {/* Sleek rounded blade / slab shape matching reference */}
      <boxGeometry args={[1.5, 0.18, 0.65]} />
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.48}
        roughness={0.08}
        metalness={0.18}
        clearcoat={1.0}
        clearcoatRoughness={0.05}
        transmission={0.52}
        ior={1.52}
        thickness={1.2}
        transparent
        opacity={0.94}
      />
    </mesh>
  );
}

function FullPageKineticChain({ count = 42, impulseRef, mouseRef }) {
  return (
    <group>
      {Array.from({ length: count }).map((_, idx) => (
        <KineticChainSegment
          key={idx}
          index={idx}
          total={count}
          impulseRef={impulseRef}
          mouseRef={mouseRef}
        />
      ))}
    </group>
  );
}

// -------------------------------------------------------------
// 2. FLOATING REFRACTIVE CRYSTAL PRISMS (Drifting around the chain)
// -------------------------------------------------------------

function FloatingCrystal({ initialPos, size, rotSpeed, colorTint, phase, impulseRef }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const impulse = impulseRef?.current || 0;
    const speed = 1 + impulse * 3.0;

    meshRef.current.rotation.x += delta * rotSpeed[0] * speed;
    meshRef.current.rotation.y += delta * rotSpeed[1] * speed;
    meshRef.current.rotation.z += delta * rotSpeed[2] * speed;

    meshRef.current.position.y = initialPos[1] + Math.sin(time * 0.8 + phase) * 0.3;
    meshRef.current.position.x = initialPos[0] + Math.cos(time * 0.5 + phase) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={initialPos}>
      <boxGeometry args={size} />
      <meshPhysicalMaterial
        color={colorTint}
        emissive={colorTint === '#22D3EE' ? '#0e4a5c' : '#431980'}
        emissiveIntensity={0.55}
        roughness={0.04}
        metalness={0.08}
        transmission={0.94}
        ior={1.55}
        thickness={1.8}
        clearcoat={1.0}
        clearcoatRoughness={0.04}
        iridescence={0.95}
        iridescenceIOR={1.35}
        transparent
        opacity={0.94}
      />
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(...size)]} />
        <lineBasicMaterial
          color={colorTint === '#22D3EE' ? '#a5f3fc' : '#ddd6fe'}
          transparent
          opacity={0.8}
        />
      </lineSegments>
    </mesh>
  );
}

function FloatingCrystals({ impulseRef }) {
  const crystals = useMemo(() => [
    { pos: [3.5, 2.0, 0.5], size: [0.9, 1.8, 0.45], rot: [0.15, 0.22, 0.1], color: '#22D3EE', phase: 0 },
    { pos: [-3.8, -1.8, -0.5], size: [1.0, 2.0, 0.5], rot: [-0.18, 0.2, 0.14], color: '#A78BFA', phase: 1.5 },
    { pos: [4.2, -1.5, -1.0], size: [0.8, 1.5, 0.4], rot: [0.2, -0.15, 0.18], color: '#E879F9', phase: 3.0 },
    { pos: [-4.0, 2.2, -1.5], size: [0.75, 1.4, 0.35], rot: [0.12, 0.25, -0.16], color: '#38BDF8', phase: 4.2 },
    { pos: [0.5, 3.2, -2.0], size: [0.85, 1.6, 0.4], rot: [-0.22, 0.18, 0.12], color: '#A78BFA', phase: 2.1 },
    { pos: [-0.8, -3.0, -2.2], size: [0.9, 1.7, 0.42], rot: [0.16, -0.2, 0.15], color: '#22D3EE', phase: 5.0 },
  ], []);

  return (
    <group>
      {crystals.map((c, i) => (
        <FloatingCrystal
          key={i}
          initialPos={c.pos}
          size={c.size}
          rotSpeed={c.rot}
          colorTint={c.color}
          phase={c.phase}
          impulseRef={impulseRef}
        />
      ))}
    </group>
  );
}

// -------------------------------------------------------------
// 3. PRISMATIC DEPTH PARTICLES
// -------------------------------------------------------------

function AmbientPrismaticDust({ count = 75 }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 20;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 14;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 10 - 1;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef();

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
      pointsRef.current.rotation.x += delta * 0.01;
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
        size={0.06}
        color="#38BDF8"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// -------------------------------------------------------------
// 4. MAIN SCENE CONTROLLER (Whole Page Dynamic Helical Chain)
// -------------------------------------------------------------

function FullPageHelicalChainScene() {
  const location = useLocation();
  const sceneGroupRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const impulseRef = useRef(0);

  // Route-aware camera / group transitions
  const targetPos = useMemo(() => {
    const path = location.pathname;
    if (path === '/') return { x: 0, y: 0, z: 0 };
    return { x: 0.5, y: -0.1, z: -2.4 };
  }, [location.pathname]);

  // Global Click & Mouse Listeners across whole website
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = x * 0.6;
      mouseRef.current.targetY = y * 0.6;
    };

    const handleGlobalClick = () => {
      // Global click impulse burst
      impulseRef.current = 1.0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('pointerdown', handleGlobalClick, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('pointerdown', handleGlobalClick);
    };
  }, []);

  useFrame((state, delta) => {
    // Smooth impulse decay
    impulseRef.current = THREE.MathUtils.damp(impulseRef.current, 0, 3.5, delta);

    if (sceneGroupRef.current) {
      // Smooth mouse parallax
      mouseRef.current.x = THREE.MathUtils.lerp(mouseRef.current.x, mouseRef.current.targetX, delta * 3.5);
      mouseRef.current.y = THREE.MathUtils.lerp(mouseRef.current.y, mouseRef.current.targetY, delta * 3.5);

      // Smooth route position transition
      sceneGroupRef.current.position.x = THREE.MathUtils.lerp(sceneGroupRef.current.position.x, targetPos.x + mouseRef.current.x * 0.5, delta * 2.5);
      sceneGroupRef.current.position.y = THREE.MathUtils.lerp(sceneGroupRef.current.position.y, targetPos.y + mouseRef.current.y * 0.5, delta * 2.5);
      sceneGroupRef.current.position.z = THREE.MathUtils.lerp(sceneGroupRef.current.position.z, targetPos.z, delta * 2.5);

      // Dynamic tilt
      sceneGroupRef.current.rotation.y = mouseRef.current.x * 0.25;
      sceneGroupRef.current.rotation.x = -mouseRef.current.y * 0.25;
    }
  });

  return (
    <>
      {/* Radiant High-Brightness Studio Lighting */}
      <ambientLight intensity={1.15} />
      <directionalLight position={[8, 10, 6]} intensity={2.4} color="#ffffff" />
      <directionalLight position={[-8, -6, 4]} intensity={1.6} color="#22D3EE" />

      <pointLight position={[5, 4, 4]} intensity={2.2} color="#A78BFA" distance={18} />
      <pointLight position={[-5, 3, 2]} intensity={1.9} color="#22D3EE" distance={16} />
      <pointLight position={[0, -5, 4]} intensity={1.6} color="#E879F9" distance={14} />
      <pointLight position={[3, -4, -2]} intensity={1.4} color="#38BDF8" distance={12} />

      <group ref={sceneGroupRef}>
        {/* Sweeping Full-Page Helical Kinetic Ribbon Chain (Image 3) */}
        <FullPageKineticChain count={44} impulseRef={impulseRef} mouseRef={mouseRef} />

        {/* Floating Prismatic Crystals (Image 1) */}
        <FloatingCrystals impulseRef={impulseRef} />
      </group>

      <AmbientPrismaticDust count={75} />
    </>
  );
}

// -------------------------------------------------------------
// 5. 2D CANVAS FALLBACK (High-End Sweeping Kinetic Chain)
// -------------------------------------------------------------

function Canvas2DChainFallback() {
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
      angle += 0.012;

      const total = 32;
      const w = canvas.width;
      const h = canvas.height;

      for (let i = 0; i < total; i++) {
        const t = i / total;
        const x = t * w;
        const y = h * 0.5 + Math.sin(t * Math.PI * 2 + angle) * (h * 0.25);
        const rot = angle + i * 0.2;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rot);

        const grad = ctx.createLinearGradient(-35, -8, 35, 8);
        grad.addColorStop(0, 'rgba(34, 211, 238, 0.45)');
        grad.addColorStop(0.5, 'rgba(99, 102, 241, 0.5)');
        grad.addColorStop(1, 'rgba(167, 139, 250, 0.45)');

        ctx.fillStyle = grad;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.fillRect(-45, -8, 90, 16);
        ctx.strokeRect(-45, -8, 90, 16);
        ctx.restore();
      }

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
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}

// -------------------------------------------------------------
// 6. PERSISTENT BACKGROUND WRAPPER (Full on Homepage, 38% Glassmorphism on Portals)
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
        isHomepage ? 'opacity-100' : 'opacity-[0.38]'
      }`}
      style={{
        background: 'radial-gradient(ellipse 90% 75% at 50% 40%, #15304d 0%, #0a1f33 50%, #070B10 100%)',
      }}
      aria-hidden="true"
    >
      {hasWebGL ? (
        <Canvas
          camera={{ position: [0, 0, 8.5], fov: 48 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full"
        >
          <FullPageHelicalChainScene />
        </Canvas>
      ) : (
        <Canvas2DChainFallback />
      )}
    </div>
  );
}
