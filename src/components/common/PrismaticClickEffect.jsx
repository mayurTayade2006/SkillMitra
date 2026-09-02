import React, { useState, useEffect } from 'react';

export default function PrismaticClickEffect() {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-6), newRipple]); // keep last 6

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    window.addEventListener('pointerdown', handleClick, { passive: true });
    return () => window.removeEventListener('pointerdown', handleClick);
  }, []);

  if (ripples.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {ripples.map((r) => (
        <div
          key={r.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ left: r.x, top: r.y }}
        >
          {/* Outer Prismatic Ring */}
          <div
            className="w-16 h-16 rounded-full border border-[#22D3EE]/70 animate-ping opacity-75"
            style={{
              boxShadow: '0 0 15px rgba(34, 211, 238, 0.4), inset 0 0 10px rgba(167, 139, 250, 0.3)',
              animationDuration: '550ms',
            }}
          />

          {/* Rotating Geometric Diamond Shockwave */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rotate-45 border border-[#A78BFA]/90 animate-spin"
            style={{
              animationDuration: '600ms',
              boxShadow: '0 0 10px rgba(167, 139, 250, 0.5)',
            }}
          />

          {/* Core Electric Flash */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#22D3EE] animate-pulse" />
        </div>
      ))}
    </div>
  );
}
