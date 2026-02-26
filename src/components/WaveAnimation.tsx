import * as React from 'react';

export default function WaveAnimation() {
  return (
    <div className="relative w-full h-96 overflow-hidden bg-gradient-to-b from-blue-50 to-teal-50">
      {/* Multiple wave layers for depth */}
      <svg
        className="absolute bottom-0 left-0 w-full h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ animation: 'wave 8s ease-in-out infinite' }}
      >
        <path
          fill="rgba(59, 130, 246, 0.3)"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ animation: 'wave 10s ease-in-out infinite reverse' }}
      >
        <path
          fill="rgba(20, 184, 166, 0.3)"
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,208C960,213,1056,171,1152,149.3C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-full h-64"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={{ animation: 'wave 12s ease-in-out infinite' }}
      >
        <path
          fill="rgba(59, 130, 246, 0.5)"
          d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25px) translateY(10px); }
        }
      `}</style>
    </div>
  );
}