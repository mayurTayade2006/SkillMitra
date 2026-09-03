import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export default function PersistentBackground() {
  const canvasRef = useRef(null);
  const location = useLocation();
  const { isDark } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let time = 0;

    let width = window.innerWidth;
    let height = window.innerHeight;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // -------------------------------------------------------------
    // 1. CIRCUIT GRID & DATA PULSES (Image 2 Reference)
    // -------------------------------------------------------------
    const circuitLines = [
      // Top Left Circuit Network
      { path: [[0.05, 0.08], [0.15, 0.08], [0.15, 0.18], [0.28, 0.18], [0.28, 0.28], [0.38, 0.28]], progress: 0, speed: 0.003, color: '#38BDF8' },
      { path: [[0.02, 0.22], [0.12, 0.22], [0.12, 0.32], [0.22, 0.32], [0.22, 0.42]], progress: 0.4, speed: 0.0025, color: '#A78BFA' },
      { path: [[0.20, 0.02], [0.20, 0.12], [0.32, 0.12], [0.32, 0.22]], progress: 0.7, speed: 0.0035, color: '#22D3EE' },

      // Top Right Circuit Network
      { path: [[0.95, 0.06], [0.82, 0.06], [0.82, 0.16], [0.70, 0.16], [0.70, 0.26]], progress: 0.2, speed: 0.0028, color: '#22D3EE' },
      { path: [[0.98, 0.18], [0.88, 0.18], [0.88, 0.28], [0.78, 0.28], [0.78, 0.38]], progress: 0.6, speed: 0.0032, color: '#C084FC' },
      { path: [[0.80, 0.02], [0.80, 0.10], [0.65, 0.10], [0.65, 0.20]], progress: 0.85, speed: 0.0022, color: '#38BDF8' },

      // Bottom Left Circuit Network
      { path: [[0.06, 0.92], [0.18, 0.92], [0.18, 0.80], [0.30, 0.80], [0.30, 0.70]], progress: 0.35, speed: 0.003, color: '#A78BFA' },
      { path: [[0.02, 0.78], [0.14, 0.78], [0.14, 0.68], [0.25, 0.68]], progress: 0.75, speed: 0.0026, color: '#22D3EE' },

      // Bottom Right Circuit Network
      { path: [[0.95, 0.90], [0.84, 0.90], [0.84, 0.78], [0.72, 0.78], [0.72, 0.68]], progress: 0.15, speed: 0.0034, color: '#38BDF8' },
      { path: [[0.90, 0.98], [0.90, 0.85], [0.76, 0.85], [0.76, 0.74]], progress: 0.55, speed: 0.0029, color: '#C084FC' },
    ];

    // -------------------------------------------------------------
    // 2. 3D PARTICLE MESH WAVE GRID (Image 3 Reference)
    // -------------------------------------------------------------
    const cols = 48;
    const rows = 28;

    // -------------------------------------------------------------
    // 3. INTERACTIVE CLICK EXPLOSION & SHOCKWAVE SYSTEM
    // -------------------------------------------------------------
    let clickBursts = [];
    let clickBeams = [];
    let shockwaves = [];

    const onGlobalClick = (e) => {
      const cx = e.clientX;
      const cy = e.clientY;

      // 1. Concentric Luminous Shockwave Ripple
      shockwaves.push({
        x: cx,
        y: cy,
        radius: 5,
        maxRadius: Math.max(width, height) * 0.45,
        alpha: 0.95,
        lineWidth: 3.5,
        speed: 12 + Math.random() * 4,
        color: Math.random() > 0.5 ? '#22D3EE' : '#A78BFA',
      });

      // 2. Radiating Circuit Laser Beams (8 Cardinal/Diagonal Beams)
      const beamCount = 8;
      for (let i = 0; i < beamCount; i++) {
        const angle = (Math.PI * 2 * i) / beamCount;
        const length = 120 + Math.random() * 160;
        clickBeams.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * (14 + Math.random() * 6),
          vy: Math.sin(angle) * (14 + Math.random() * 6),
          length,
          currentLength: 0,
          color: i % 2 === 0 ? '#22D3EE' : '#C084FC',
          alpha: 1.0,
          tail: [],
        });
      }

      // 3. Radiant Glowing Embers & Micro-Sparks
      const sparkCount = 26;
      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2.5 + Math.random() * 8.0;
        const isCyan = Math.random() > 0.45;
        clickBursts.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.8, // gentle upward burst
          size: 2.0 + Math.random() * 4.5,
          color: isCyan ? '#22D3EE' : '#C084FC',
          glowColor: isCyan ? 'rgba(34, 211, 238, 0.8)' : 'rgba(192, 132, 252, 0.8)',
          alpha: 1.0,
          decay: 0.015 + Math.random() * 0.012,
        });
      }
    };

    window.addEventListener('pointerdown', onGlobalClick, { passive: true });

    // -------------------------------------------------------------
    // DRAW FIBER-OPTIC SWIRL VORTEX (Image 1 Swirls)
    // -------------------------------------------------------------
    const drawSpiralVortex = (cx, cy, radius, startAngle, color, glowColor, alpha = 0.8) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 18;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.8;

      ctx.beginPath();
      const loops = 3.2;
      for (let a = 0; a < Math.PI * 2 * loops; a += 0.12) {
        const r = (radius * a) / (Math.PI * 2 * loops);
        const curA = startAngle + a;
        const px = cx + Math.cos(curA) * r;
        const py = cy + Math.sin(curA) * r;
        if (a === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Glowing Center Core Dot
      ctx.beginPath();
      ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowColor = '#FFFFFF';
      ctx.shadowBlur = 12;
      ctx.fill();

      ctx.restore();
    };

    // -------------------------------------------------------------
    // MAIN ANIMATION LOOP
    // -------------------------------------------------------------
    const render = () => {
      time += 0.012;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep Dark Space / Midnight Canvas Base
      if (isDark) {
        ctx.fillStyle = '#060A10';
        ctx.fillRect(0, 0, width, height);

        // Ambient Color Atmosphere Blooms
        const gradCyan = ctx.createRadialGradient(width * 0.25, height * 0.45, 10, width * 0.25, height * 0.45, width * 0.55);
        gradCyan.addColorStop(0, 'rgba(14, 116, 144, 0.25)');
        gradCyan.addColorStop(0.6, 'rgba(6, 78, 120, 0.08)');
        gradCyan.addColorStop(1, 'rgba(6, 10, 16, 0)');
        ctx.fillStyle = gradCyan;
        ctx.fillRect(0, 0, width, height);

        const gradViolet = ctx.createRadialGradient(width * 0.8, height * 0.65, 10, width * 0.8, height * 0.65, width * 0.6);
        gradViolet.addColorStop(0, 'rgba(109, 40, 217, 0.22)');
        gradViolet.addColorStop(0.6, 'rgba(76, 29, 149, 0.06)');
        gradViolet.addColorStop(1, 'rgba(6, 10, 16, 0)');
        ctx.fillStyle = gradViolet;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Light Mode Ethereal Gradient
        ctx.fillStyle = '#F8FAFC';
        ctx.fillRect(0, 0, width, height);

        const gradLight = ctx.createRadialGradient(width * 0.5, height * 0.4, 20, width * 0.5, height * 0.4, width * 0.7);
        gradLight.addColorStop(0, 'rgba(224, 242, 254, 0.85)');
        gradLight.addColorStop(0.7, 'rgba(240, 249, 255, 0.45)');
        gradLight.addColorStop(1, 'rgba(248, 250, 252, 0)');
        ctx.fillStyle = gradLight;
        ctx.fillRect(0, 0, width, height);
      }

      // =========================================================
      // LAYER 1: CYBER CIRCUIT TRACES & DATA PACKETS (Image 2)
      // =========================================================
      ctx.save();
      circuitLines.forEach((circuit) => {
        circuit.progress = (circuit.progress + circuit.speed) % 1;

        // Draw Circuit Track Lines
        ctx.beginPath();
        circuit.path.forEach((pt, idx) => {
          const px = pt[0] * width;
          const py = pt[1] * height;
          if (idx === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.14)' : 'rgba(2, 132, 199, 0.16)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Draw Circuit Solder Nodes
        circuit.path.forEach((pt) => {
          const px = pt[0] * width;
          const py = pt[1] * height;
          ctx.beginPath();
          ctx.arc(px, py, 2.0, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.35)' : 'rgba(2, 132, 199, 0.4)';
          ctx.fill();
        });

        // Calculate and Draw Glowing Energy Pulse Traveling on the Path
        const totalSegments = circuit.path.length - 1;
        const totalDist = totalSegments;
        const currentSegmentProgress = circuit.progress * totalDist;
        const segIdx = Math.min(Math.floor(currentSegmentProgress), totalSegments - 1);
        const segT = currentSegmentProgress - segIdx;

        const p1 = circuit.path[segIdx];
        const p2 = circuit.path[segIdx + 1];
        if (p1 && p2) {
          const pulseX = (p1[0] + (p2[0] - p1[0]) * segT) * width;
          const pulseY = (p1[1] + (p2[1] - p1[1]) * segT) * height;

          ctx.shadowColor = circuit.color;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 3.2, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 6.0, 0, Math.PI * 2);
          ctx.fillStyle = circuit.color + (isDark ? '66' : '88');
          ctx.fill();
        }
      });
      ctx.restore();

      // =========================================================
      // LAYER 2: 3D PARTICLE MESH WAVE (Image 3)
      // =========================================================
      ctx.save();
      const cellW = width / (cols - 1);
      const cellH = height / (rows - 1);
      const mouseParallaxX = (mouseX - width / 2) * 0.035;
      const mouseParallaxY = (mouseY - height / 2) * 0.035;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const normX = c / cols;
          const normY = r / rows;

          // Multi-frequency undulating wave equation
          const wave1 = Math.sin(normX * 5.2 + time * 1.8) * Math.cos(normY * 4.0 + time * 1.2) * 24;
          const wave2 = Math.sin((normX + normY) * 6.5 + time * 2.2) * 14;
          const wave3 = Math.cos(normX * 8.0 - time * 1.5) * 8;
          const waveElevation = wave1 + wave2 + wave3;

          const px = c * cellW + mouseParallaxX;
          const py = r * cellH + waveElevation + mouseParallaxY;

          // Particle brightness and size based on elevation crests
          const depthAlpha = Math.max(0.08, (waveElevation + 38) / 76);
          const pSize = 1.0 + depthAlpha * 1.8;

          // Color interpolate between Cyan and Violet across elevation
          const isCyanWave = (c + r) % 3 !== 0;
          ctx.beginPath();
          ctx.arc(px, py, pSize, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? (isCyanWave ? `rgba(34, 211, 238, ${depthAlpha * 0.45})` : `rgba(167, 139, 250, ${depthAlpha * 0.45})`)
            : (isCyanWave ? `rgba(2, 132, 199, ${depthAlpha * 0.35})` : `rgba(124, 58, 237, ${depthAlpha * 0.35})`);
          ctx.fill();
        }
      }
      ctx.restore();

      // =========================================================
      // LAYER 3: LUMINOUS NEON CYBER FIBER RIBBONS (Image 1)
      // =========================================================
      ctx.save();
      const ribbonCount = 7;
      const centerY = height * 0.55;

      for (let i = 0; i < ribbonCount; i++) {
        const offset = i * 0.28;
        const isCyan = i < 4;

        ctx.beginPath();
        const step = 18;
        for (let x = 0; x <= width + step; x += step) {
          const nx = x / width;

          // Flowing ribbon harmonic wave formula
          const y1 = Math.sin(nx * 3.4 + time * 1.4 + offset) * (height * 0.16);
          const y2 = Math.cos(nx * 5.2 - time * 1.1 + offset * 1.5) * (height * 0.08);
          const y3 = Math.sin((nx * 8.0) + time * 2.0) * (height * 0.035);
          const y = centerY + y1 + y2 + y3 + (i - 3) * 14 + (mouseY - height / 2) * 0.05;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // Dual Tone Neon Glowing Ribbon Strokes
        const strokeColor = isCyan
          ? (isDark ? '#22D3EE' : '#0284C7')
          : (isDark ? '#C084FC' : '#7C3AED');
        
        ctx.shadowColor = strokeColor;
        ctx.shadowBlur = isDark ? 22 : 12;
        ctx.strokeStyle = strokeColor + (isDark ? (i === 2 ? 'CC' : '77') : '88');
        ctx.lineWidth = i === 2 ? 3.0 : 1.6;
        ctx.stroke();

        // Inner Specular White Core Streak for Central Crest
        if (i === 2) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }

      // Swirling Fiber Spiral Vortices (Image 1 Reference)
      const swirl1X = width * 0.52 + Math.sin(time * 0.8) * 40;
      const swirl1Y = centerY - height * 0.12 + Math.cos(time * 0.6) * 30;
      drawSpiralVortex(swirl1X, swirl1Y, 36, time * 0.8, '#38BDF8', 'rgba(56, 189, 248, 0.8)', isDark ? 0.75 : 0.5);

      const swirl2X = width * 0.38 + Math.cos(time * 0.7) * 30;
      const swirl2Y = centerY + height * 0.16 + Math.sin(time * 0.9) * 25;
      drawSpiralVortex(swirl2X, swirl2Y, 32, -time * 0.9, '#C084FC', 'rgba(192, 132, 252, 0.8)', isDark ? 0.75 : 0.5);
      ctx.restore();

      // =========================================================
      // INTERACTIVE CLICK SHOCKWAVES, BEAMS & SPARKS
      // =========================================================

      // 1. Shockwave Rings
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += sw.speed;
        sw.alpha = Math.max(0, 1 - sw.radius / sw.maxRadius);

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = sw.color;
        ctx.shadowColor = sw.color;
        ctx.shadowBlur = 24;
        ctx.lineWidth = sw.lineWidth * sw.alpha;
        ctx.globalAlpha = sw.alpha * 0.85;
        ctx.stroke();
        ctx.restore();
      }

      // 2. Circuit Laser Beams
      for (let i = clickBeams.length - 1; i >= 0; i--) {
        const b = clickBeams[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.94;
        b.vy *= 0.94;
        b.alpha *= 0.95;

        if (b.alpha <= 0.05) {
          clickBeams.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(b.x - b.vx * 3.5, b.y - b.vy * 3.5);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = b.color;
        ctx.shadowColor = b.color;
        ctx.shadowBlur = 16;
        ctx.lineWidth = 2.5;
        ctx.globalAlpha = b.alpha;
        ctx.stroke();

        // Glowing Beam Head
        ctx.beginPath();
        ctx.arc(b.x, b.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.restore();
      }

      // 3. Glowing Embers & Micro-Sparks
      for (let i = clickBursts.length - 1; i >= 0; i--) {
        const p = clickBursts[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08; // subtle gravity
        p.vx *= 0.97;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          clickBursts.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.shadowColor = p.glowColor;
        ctx.shadowBlur = 14;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('pointerdown', onGlobalClick);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
