'use client';

/**
 * Decorative dot-grid background with three radial gradient orbs
 * giving the page depth and atmosphere.
 */
export default function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #1E2D3D 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent-cyan/5 blur-[120px]" />
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-accent-purple/5 blur-[80px]" />
    </div>
  );
}
