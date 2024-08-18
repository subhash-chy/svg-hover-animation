import { RectangleGroupIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React, { useState } from 'react';

type Props = {
  className?: string;
};

function StackIcon({ className }: Props) {
  const [positionInPercent, setPositionInPercent] = useState({
    xPercent: 0,
    yPercent: 0,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Finds Pointer Position
    const pointerPosition = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };

    // Let's convert the positon into percentage values
    const percentage = {
      xPercent: (pointerPosition.x * 100) / rect.width,
      yPercent: (pointerPosition.y * 100) / rect.height,
    };

    setPositionInPercent(percentage);
  };
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={clsx('transition-all duration-1000', className)}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <defs>
        <radialGradient
          id='custom-gradient'
          gradientUnits='userSpaceOnUse'
          cx={`${positionInPercent.xPercent}%`}
          cy={`${positionInPercent.yPercent}%`}
        >
          {isHovered && <stop stopColor='#f97316' />}
          <stop offset={1} stopColor='#505050' />
        </radialGradient>
      </defs>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        stroke='url(#custom-gradient)'
        d='M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122'
      />
    </svg>
  );
}

export default StackIcon;
