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
    const ctx = canvas.getContext('2d', { alpha: false });
    let animId;
    let time = 0;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let isMobile = width < 768;

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      isMobile = width < 768;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const onMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // -------------------------------------------------------------
    // 1. CIRCUIT GRID & DATA PULSES
    // -------------------------------------------------------------
    const circuitLines = [
      { path: [[0.05, 0.08], [0.15, 0.08], [0.15, 0.18], [0.28, 0.18], [0.28, 0.28]], progress: 0, speed: 0.003, color: '#38BDF8' },
      { path: [[0.95, 0.06], [0.82, 0.06], [0.82, 0.16], [0.70, 0.16], [0.70, 0.26]], progress: 0.2, speed: 0.0028, color: '#22D3EE' },
      { path: [[0.06, 0.92], [0.18, 0.92], [0.18, 0.80], [0.30, 0.80]], progress: 0.35, speed: 0.003, color: '#A78BFA' },
      { path: [[0.95, 0.90], [0.84, 0.90], [0.84, 0.78], [0.72, 0.78]], progress: 0.15, speed: 0.0034, color: '#38BDF8' },
    ];

    // -------------------------------------------------------------
    // 2. INTERACTIVE CLICK EXPLOSION SYSTEM
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
        radius: 4,
        maxRadius: isMobile ? 180 : Math.max(width, height) * 0.4,
        alpha: 0.9,
        lineWidth: isMobile ? 2.0 : 3.0,
        speed: isMobile ? 9 : 13,
        color: Math.random() > 0.5 ? '#22D3EE' : '#A78BFA',
      });

      // 2. Radiating Laser Beams
      const beamCount = isMobile ? 5 : 8;
      for (let i = 0; i < beamCount; i++) {
        const angle = (Math.PI * 2 * i) / beamCount;
        clickBeams.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * (isMobile ? 10 : 14),
          vy: Math.sin(angle) * (isMobile ? 10 : 14),
          color: i % 2 === 0 ? '#22D3EE' : '#C084FC',
          alpha: 1.0,
        });
      }

      // 3. Glowing Micro-Sparks
      const sparkCount = isMobile ? 10 : 20;
      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2.0 + Math.random() * (isMobile ? 4.5 : 7.0);
        const isCyan = Math.random() > 0.45;
        clickBursts.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1.5,
          size: 1.8 + Math.random() * 3.0,
          color: isCyan ? '#22D3EE' : '#C084FC',
          glowColor: isCyan ? 'rgba(34, 211, 238, 0.7)' : 'rgba(192, 132, 252, 0.7)',
          alpha: 1.0,
          decay: isMobile ? 0.025 : 0.016,
        });
      }
    };

    window.addEventListener('pointerdown', onGlobalClick, { passive: true });

    // -------------------------------------------------------------
    // DRAW FIBER-OPTIC SWIRL VORTEX
    // -------------------------------------------------------------
    const drawSpiralVortex = (cx, cy, radius, startAngle, color, alpha = 0.7) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      if (!isMobile) {
        ctx.shadowColor = color;
        ctx.shadowBlur = 14;
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.6;

      ctx.beginPath();
      const loops = 2.8;
      for (let a = 0; a < Math.PI * 2 * loops; a += 0.18) {
        const r = (radius * a) / (Math.PI * 2 * loops);
        const curA = startAngle + a;
        const px = cx + Math.cos(curA) * r;
        const py = cy + Math.sin(curA) * r;
        if (a === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 3.0, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
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

      // Deep Dark Space Base
      if (isDark) {
        ctx.fillStyle = '#060A10';
        ctx.fillRect(0, 0, width, height);

        // Ambient Color Atmosphere Blooms
        const gradCyan = ctx.createRadialGradient(width * 0.25, height * 0.4, 10, width * 0.25, height * 0.4, Math.max(width, height) * 0.55);
        gradCyan.addColorStop(0, 'rgba(14, 116, 144, 0.22)');
        gradCyan.addColorStop(0.6, 'rgba(6, 78, 120, 0.06)');
        gradCyan.addColorStop(1, 'rgba(6, 10, 16, 0)');
        ctx.fillStyle = gradCyan;
        ctx.fillRect(0, 0, width, height);

        const gradViolet = ctx.createRadialGradient(width * 0.8, height * 0.6, 10, width * 0.8, height * 0.6, Math.max(width, height) * 0.55);
        gradViolet.addColorStop(0, 'rgba(109, 40, 217, 0.18)');
        gradViolet.addColorStop(0.6, 'rgba(76, 29, 149, 0.05)');
        gradViolet.addColorStop(1, 'rgba(6, 10, 16, 0)');
        ctx.fillStyle = gradViolet;
        ctx.fillRect(0, 0, width, height);
      } else {
        // Light Mode Base
        ctx.fillStyle = '#F8FAFC';
        ctx.fillRect(0, 0, width, height);

        const gradLight = ctx.createRadialGradient(width * 0.5, height * 0.4, 20, width * 0.5, height * 0.4, width * 0.6);
        gradLight.addColorStop(0, 'rgba(224, 242, 254, 0.8)');
        gradLight.addColorStop(0.7, 'rgba(240, 249, 255, 0.4)');
        gradLight.addColorStop(1, 'rgba(248, 250, 252, 0)');
        ctx.fillStyle = gradLight;
        ctx.fillRect(0, 0, width, height);
      }

      // =========================================================
      // LAYER 1: CYBER CIRCUIT TRACES & DATA PACKETS
      // =========================================================
      ctx.save();
      circuitLines.forEach((circuit) => {
        circuit.progress = (circuit.progress + circuit.speed) % 1;

        ctx.beginPath();
        circuit.path.forEach((pt, idx) => {
          const px = pt[0] * width;
          const py = pt[1] * height;
          if (idx === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.12)' : 'rgba(2, 132, 199, 0.14)';
        ctx.lineWidth = 1.0;
        ctx.stroke();

        // Energy Pulse
        const totalSegments = circuit.path.length - 1;
        const currentSegmentProgress = circuit.progress * totalSegments;
        const segIdx = Math.min(Math.floor(currentSegmentProgress), totalSegments - 1);
        const segT = currentSegmentProgress - segIdx;

        const p1 = circuit.path[segIdx];
        const p2 = circuit.path[segIdx + 1];
        if (p1 && p2) {
          const pulseX = (p1[0] + (p2[0] - p1[0]) * segT) * width;
          const pulseY = (p1[1] + (p2[1] - p1[1]) * segT) * height;

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = '#FFFFFF';
          ctx.fill();

          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 5.0, 0, Math.PI * 2);
          ctx.fillStyle = circuit.color + (isDark ? '55' : '77');
          ctx.fill();
        }
      });
      ctx.restore();

      // =========================================================
      // LAYER 2: 3D PARTICLE MESH WAVE (Adaptive Resolution)
      // =========================================================
      ctx.save();
      const cols = isMobile ? 18 : 36;
      const rows = isMobile ? 12 : 22;
      const cellW = width / (cols - 1);
      const cellH = height / (rows - 1);
      const mouseParallaxX = (mouseX - width / 2) * 0.025;
      const mouseParallaxY = (mouseY - height / 2) * 0.025;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const normX = c / cols;
          const normY = r / rows;

          const wave1 = Math.sin(normX * 4.8 + time * 1.6) * Math.cos(normY * 3.6 + time * 1.0) * (isMobile ? 16 : 22);
          const wave2 = Math.sin((normX + normY) * 5.5 + time * 1.8) * (isMobile ? 8 : 12);
          const waveElevation = wave1 + wave2;

          const px = c * cellW + mouseParallaxX;
          const py = r * cellH + waveElevation + mouseParallaxY;

          const depthAlpha = Math.max(0.08, (waveElevation + 30) / 60);
          const pSize = 1.0 + depthAlpha * (isMobile ? 1.2 : 1.6);
          const isCyanWave = (c + r) % 3 !== 0;

          ctx.beginPath();
          ctx.arc(px, py, pSize, 0, Math.PI * 2);
          ctx.fillStyle = isDark
            ? (isCyanWave ? `rgba(34, 211, 238, ${depthAlpha * 0.4})` : `rgba(167, 139, 250, ${depthAlpha * 0.4})`)
            : (isCyanWave ? `rgba(2, 132, 199, ${depthAlpha * 0.3})` : `rgba(124, 58, 237, ${depthAlpha * 0.3})`);
          ctx.fill();
        }
      }
      ctx.restore();

      // =========================================================
      // LAYER 3: LUMINOUS NEON CYBER FIBER RIBBONS
      // =========================================================
      ctx.save();
      const ribbonCount = isMobile ? 3 : 6;
      const ribbonStep = isMobile ? 36 : 18;
      const centerY = height * 0.52;

      for (let i = 0; i < ribbonCount; i++) {
        const offset = i * 0.32;
        const isCyan = i < (ribbonCount / 2);

        ctx.beginPath();
        for (let x = 0; x <= width + ribbonStep; x += ribbonStep) {
          const nx = x / width;
          const y1 = Math.sin(nx * 3.2 + time * 1.3 + offset) * (height * 0.14);
          const y2 = Math.cos(nx * 4.8 - time * 1.0 + offset * 1.4) * (height * 0.07);
          const y = centerY + y1 + y2 + (i - ribbonCount / 2) * 12 + (mouseY - height / 2) * 0.03;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        const strokeColor = isCyan
          ? (isDark ? '#22D3EE' : '#0284C7')
          : (isDark ? '#C084FC' : '#7C3AED');
        
        if (!isMobile) {
          ctx.shadowColor = strokeColor;
          ctx.shadowBlur = isDark ? 18 : 10;
        }
        ctx.strokeStyle = strokeColor + (isDark ? '99' : '88');
        ctx.lineWidth = i === 1 ? 2.4 : 1.4;
        ctx.stroke();
      }

      // Single Swirl Vortex on Mobile, Dual on Desktop
      const swirl1X = width * (isMobile ? 0.65 : 0.52) + Math.sin(time * 0.8) * 30;
      const swirl1Y = centerY - height * 0.10 + Math.cos(time * 0.6) * 20;
      drawSpiralVortex(swirl1X, swirl1Y, isMobile ? 26 : 34, time * 0.8, '#38BDF8', isDark ? 0.7 : 0.45);

      if (!isMobile) {
        const swirl2X = width * 0.38 + Math.cos(time * 0.7) * 25;
        const swirl2Y = centerY + height * 0.14 + Math.sin(time * 0.9) * 20;
        drawSpiralVortex(swirl2X, swirl2Y, 30, -time * 0.9, '#C084FC', isDark ? 0.7 : 0.45);
      }
      ctx.restore();

      // =========================================================
      // LAYER 4: INTERACTIVE CLICK SHOCKWAVES & BEAMS
      // =========================================================

      // 1. Shockwaves
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
        if (!isMobile) {
          ctx.shadowColor = sw.color;
          ctx.shadowBlur = 18;
        }
        ctx.lineWidth = sw.lineWidth * sw.alpha;
        ctx.globalAlpha = sw.alpha * 0.8;
        ctx.stroke();
        ctx.restore();
      }

      // 2. Beams
      for (let i = clickBeams.length - 1; i >= 0; i--) {
        const b = clickBeams[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.92;
        b.vy *= 0.92;
        b.alpha *= 0.93;

        if (b.alpha <= 0.05) {
          clickBeams.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(b.x - b.vx * 3.0, b.y - b.vy * 3.0);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = b.color;
        ctx.lineWidth = isMobile ? 1.8 : 2.2;
        ctx.globalAlpha = b.alpha;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(b.x, b.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.restore();
      }

      // 3. Sparks
      for (let i = clickBursts.length - 1; i >= 0; i--) {
        const p = clickBursts[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08;
        p.vx *= 0.96;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          clickBursts.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
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
