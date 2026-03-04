'use client';

import { useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';

export function Loader() {
  const { active, progress } = useProgress();

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-charcoal z-50"
        >
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-gold font-display text-4xl tracking-widest">LOADING</h2>
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gold"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-beige/50 font-mono">{progress.toFixed(0)}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
