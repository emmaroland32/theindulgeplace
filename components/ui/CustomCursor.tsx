'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotX = useSpring(mouseX, { damping: 50, stiffness: 600 });
  const dotY = useSpring(mouseY, { damping: 50, stiffness: 600 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    function onMove(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    }

    function onOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      setHovered(
        !!target.closest('a, button, [role="button"], input, textarea, select, label')
      );
    }

    function onDown() { setClicking(true); }
    function onUp() { setClicking(false); }

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.classList.add('cursor-none');

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.classList.remove('cursor-none');
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Outer ring — lags slightly for luxury feel */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-gold/60"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovered ? 44 : clicking ? 28 : 36,
          height: hovered ? 44 : clicking ? 28 : 36,
          opacity: 1,
          borderColor: hovered ? 'rgba(212,175,55,1)' : 'rgba(212,175,55,0.5)',
          backgroundColor: hovered ? 'rgba(212,175,55,0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
      {/* Center dot — snaps immediately */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-gold"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hovered ? 6 : clicking ? 10 : 5,
          height: hovered ? 6 : clicking ? 10 : 5,
          opacity: 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 400 }}
      />
    </>
  );
}
