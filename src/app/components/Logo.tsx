import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' for white logo on dark bg, 'dark' for dark logo on light bg
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'light' }) => {
  const fillColor = variant === 'light' ? '#FFFFFF' : '#0A1628';
  const bgColor = variant === 'light' ? '#0A1628' : '#FFFFFF';

  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Speech bubble icon */}
      <path
        d="M8 8C8 4.68629 10.6863 2 14 2H28C31.3137 2 34 4.68629 34 8V22C34 25.3137 31.3137 28 28 28H20L14 34V28H14C10.6863 28 8 25.3137 8 22V8Z"
        fill={fillColor}
      />
      <path
        d="M16 12C16 10.8954 16.8954 10 18 10H24C25.1046 10 26 10.8954 26 12V18C26 19.1046 25.1046 20 24 20H18C16.8954 20 16 19.1046 16 18V12Z"
        fill={bgColor}
      />
      
      {/* Care24 text */}
      <text
        x="42"
        y="32"
        fill={fillColor}
        fontFamily="Arial, sans-serif"
        fontSize="28"
        fontWeight="800"
        fontStyle="italic"
      >
        Care24
      </text>
      
      {/* Plus symbol */}
      <text
        x="168"
        y="20"
        fill={fillColor}
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="800"
      >
        +
      </text>
    </svg>
  );
};
