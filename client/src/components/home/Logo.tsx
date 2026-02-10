import React from 'react';

interface LogoProps {
  width?: number | string;
  className?: string;
}

const DevTeamLogo: React.FC<LogoProps> = ({ width = 300, className }) => {
  return (
    <div className={className} style={{ width, height: 'auto' }}>
      <svg
        viewBox="0 0 300 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto' }}
      >

        <defs>
          <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e96196" />
            <stop offset="100%" stopColor="#6c72f1" />
          </linearGradient>
        </defs>

        <circle cx="50" cy="50" r="35" fill="url(#circleGrad)" />


        <rect
          x="38"
          y="44"
          width="24"
          height="18"
          rx="2"
          stroke="white"
          strokeWidth="2.5"
        />
        <path
          d="M44 41V47M56 41V47"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

      
        <text
          x="100"
          y="50"
          fill="#2D2D4B"
          style={{
            fontFamily: 'Segoe UI, Roboto, Helvetica, sans-serif',
            fontWeight: '700',
            fontSize: '28px',
          }}
        >
          DevTeam
        </text>
        <text
          x="100"
          y="80"
          fill="#8E8DB3"
          style={{
            fontFamily: 'Segoe UI, Roboto, Helvetica, sans-serif',
            fontWeight: '400',
            fontSize: '20px',
          }}
        >
          Scheduler
        </text>

   
        <path
          d="M210 65L212 70L217 72L212 74L210 79L208 74L203 72L208 70L210 65Z"
          fill="#FFB38A"
        />
      </svg>
    </div>
  );
};

export default DevTeamLogo;