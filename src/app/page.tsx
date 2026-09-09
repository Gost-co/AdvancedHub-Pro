"use client";

import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, ShieldCheck, Database, Zap, Activity, Volume2 } from "lucide-react";

// --- 3D Scene Components ---

function MathematicalCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </mesh>
      <mesh ref={meshRef} scale={1.4}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.2}
          speed={1.5}
          roughness={0.1}
          metalness={0.9}
          transparent={true}
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <MathematicalCore />
      </Canvas>
    </div>
  );
}

// --- UI Components ---

export default function AdvancedHubPro() {
  const [analyzing, setAnalyzing] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [isResolved, setIsResolved] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playLecture = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    
    const audio1 = new Audio("/phd_response_1.mp3");
    const audio2 = new Audio("/phd_response_2.mp3");
    const audio3 = new Audio("/phd_response_3.mp3");

    audio1.play();
    audio1.onended = () => {
      audio2.play();
      audio2.onended = () => {
        audio3.play();
        audio3.onended = () => setIsPlaying(false);
      }
    };
  };

  const startRecheck = () => {
    if (analyzing) return;
    setAnalyzing(true);
    setLogs([]);
    setProgress(0);
    setIsResolved(false);

    const simulationSteps = [
      "Initializing heuristic quantum bug-search protocol...",
      "Analyzing abstract syntax trees for ontological deviations...",
      "Warning: Null-pointer paradigms detected in the ether. Resolving...",
      "Re-calibrating the event loop temporal mechanics...",
      "Applying multi-layered polymorphic patches...",
      "Enforcing strict pedagogical architectures...",
      "Bug recheck complete. Entropy reversed."
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < simulationSteps.length) {
        setLogs(prev => [...prev, simulationSteps[currentStep]]);
        setProgress(((currentStep + 1) / simulationSteps.length) * 100);
        currentStep++;
      } else {
        clearInterval(interval);
        setAnalyzing(false);
        setIsResolved(true);
      }
    }, 800);
  };

  return (
    <main className="relative min-h-screen text-white overflow-hidden font-sans selection:bg-purple-500/30">
      <Scene />
      
      <div className="relative z-10 container mx-auto px-6 py-12 h-screen flex flex-col justify-between pointer-events-none">
        
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-between items-center w-full"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
              <BrainCircuit className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                ADVANCEDHUB-PRO
              </h1>
              <p className="text-xs text-white/50 uppercase tracking-widest">
                Post-Doctoral Analytics Engine
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={playLecture}
              className={`flex items-center gap-2 text-sm text-white/90 bg-purple-600/20 hover:bg-purple-600/40 px-4 py-2 rounded-full border border-purple-500/30 backdrop-blur-sm transition-all ${isPlaying ? 'animate-pulse' : ''}`}
            >
              <Volume2 className="w-4 h-4 text-purple-400" /> {isPlaying ? "Lecture in Progress..." : "Listen to Professor's Lecture"}
            </button>
            <div className="flex items-center gap-2 text-sm text-white/70 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-green-400" /> Strictly Legal Protocol
            </div>
          </div>
        </motion.header>

        {/* Central Content */}
        <div className="flex-1 flex flex-col items-center justify-center pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center max-w-3xl"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              The Architecture of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-300">
                Pure Logic.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 mb-10 font-light leading-relaxed">
              As an academic mechanism of unparalleled rigor, this hub transcends mere "open source" by instantiating a proprietary nexus of flawless execution. We recheck all systemic anomalies—not by trial, but by deterministic proof.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={startRecheck}
              disabled={analyzing}
              className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-white/20"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 blur-md group-hover:bg-white/0 transition-all duration-300 pointer-events-none" />
              <div className="flex items-center gap-3">
                <Zap className={`${analyzing ? 'animate-pulse' : ''}`} />
                {analyzing ? "Synthesizing Solutions..." : "Initiate Systemic Recheck & Fix"}
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* Logs & Diagnostics Panel */}
        <div className="w-full flex justify-center pointer-events-auto mt-8">
          <AnimatePresence>
            {(logs.length > 0 || isResolved) && (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="w-full max-w-2xl bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-semibold tracking-wider text-white/80 uppercase flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-400" /> Diagnostic Terminal
                  </h3>
                  <div className="text-xs font-mono text-purple-400">{progress.toFixed(0)}%</div>
                </div>
                
                {/* Progress bar */}
                <div className="h-1 w-full bg-white/10 rounded-full mb-4 overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="space-y-2 h-40 overflow-y-auto font-mono text-sm">
                  {logs.map((log, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-start gap-2 text-white/70"
                    >
                      <span className="text-green-400 mt-0.5">›</span>
                      {log}
                    </motion.div>
                  ))}
                  {isResolved && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 flex items-center gap-3"
                    >
                      <Activity className="w-5 h-5" />
                      All ontological anomalies purged. The system achieves perfection.
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
