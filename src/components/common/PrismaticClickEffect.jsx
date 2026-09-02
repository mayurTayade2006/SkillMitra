import React, { useState, useEffect } from 'react';

// -------------------------------------------------------------
// QUIET CLICK FEEDBACK
// Minimal, whisper-quiet micro-glow ripple (Quiet Futurism)
// -------------------------------------------------------------

export default function PrismaticClickEffect() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-3), newRipple]); // keep max 3

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 400);
    };

    window.addEventListener('pointerdown', handleClick, { passive: true });
    return () => window.removeEventListener('pointerdown', handleClick);
  }, []);

  if (ripples.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {ripples.map((r) => (
        <div
          key={r.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ left: r.x, top: r.y }}
        >
          {/* Subtle 8px expanding soft micro-glow ring */}
          <div
            className="w-10 h-10 rounded-full border border-teal-400/30 animate-ping"
            style={{
              animationDuration: '400ms',
            }}
          />
        </div>
      ))}
    </div>
  );
}
