'use client';

import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Stars, Html } from '@react-three/drei';
import { BuildingModel } from '@/components/3d/BuildingModel';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import Link from 'next/link';

// Floor Data
const FLOOR_INFO = {
  ground: {
    title: "Ground Floor: BkCooks & Lobby",
    description: "Experience world-class dining at BkCooks, where culinary artistry meets luxury. The lobby offers a grand welcome with bespoke concierge services.",
    features: ["BkCooks Restaurant", "Concierge Desk", "Valet Waiting Area", "Art Gallery Corridor"],
    image: "/images/fine_dining_interior.png"
  },
  first: {
    title: "First Floor: The Spaces",
    description: "Versatile meeting rooms and event spaces designed for productivity and elegance. Perfect for board meetings, private launches, or intimate gatherings.",
    features: ["The Boardroom", "The Lounge", "Private Suites", "High-Tech AV Systems"],
    image: "/images/luxury_boardroom.png"
  }
};

export function ExploreClient() {
  const [selectedFloor, setSelectedFloor] = useState<'ground' | 'first' | null>(null);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Back Button */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/">
          <Button variant="outline" className="bg-black/50 backdrop-blur border-white/20 hover:bg-gold/20 text-white gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Button>
        </Link>
      </div>

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas shadows gl={{ antialias: true }}>
            <Suspense fallback={<Html center><div className="text-gold animate-pulse">Loading Experience...</div></Html>}>
                <PerspectiveCamera makeDefault position={[40, 30, 40]} />
                <OrbitControls 
                    enablePan={true} 
                    maxPolarAngle={Math.PI / 2.1} 
                    minDistance={20}
                    maxDistance={80}
                    autoRotate={!selectedFloor} // Stop rotation when detail is open
                    autoRotateSpeed={0.5}
                />
                
                <Environment preset="night" />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                
                <ambientLight intensity={0.2} />
                <directionalLight 
                    position={[10, 10, 5]} 
                    intensity={1} 
                    castShadow 
                    shadow-mapSize={[1024, 1024]} 
                />

                <BuildingModel onFloorSelect={setSelectedFloor} />
            </Suspense>
        </Canvas>
      </div>

      {/* Instructions Overlay (Before Selection) */}
      {!selectedFloor && (
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center">
            <p className="text-beige/60 text-sm animate-pulse">Click on a floor to explore details</p>
         </div>
      )}

      {/* Floor Detail Overlay */}
      <AnimatePresence>
        {selectedFloor && FLOOR_INFO[selectedFloor] && (
            <motion.div 
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute top-0 right-0 h-full w-full md:w-[480px] bg-charcoal/95 backdrop-blur-md border-l border-white/10 z-30 p-8 flex flex-col shadow-2xl"
            >
                <div className="flex justify-between items-start mb-6">
                    <h2 className="text-3xl font-display text-gold">{FLOOR_INFO[selectedFloor].title}</h2>
                    <button 
                        onClick={() => setSelectedFloor(null)}
                        className="p-2 rounded-full hover:bg-white/10 text-white/70 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div 
                    className="w-full h-48 rounded-lg bg-cover bg-center mb-6 border border-white/10 shadow-inner"
                    style={{ backgroundImage: `url('${FLOOR_INFO[selectedFloor].image}')` }}
                />

                <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                    <p className="text-beige/80 leading-relaxed font-light">
                        {FLOOR_INFO[selectedFloor].description}
                    </p>

                    <div>
                        <h4 className="text-sm uppercase tracking-widest text-gold/60 mb-3 border-b border-white/5 pb-2">Features</h4>
                        <ul className="space-y-2">
                            {FLOOR_INFO[selectedFloor].features.map((feature, i) => (
                                <li key={i} className="flex items-center text-white/90 font-light">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                    <Link
                        href={selectedFloor === 'ground' ? '/contact?type=reservation' : '/contact?type=space&space=boardroom'}
                        className="block"
                    >
                        <Button className="w-full bg-gold hover:bg-gold/90 text-charcoal font-semibold">
                            Inquire About This Space
                        </Button>
                    </Link>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
