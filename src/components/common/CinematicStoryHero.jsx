import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import scene1 from '../../assets/story/scene1_learning.jpg';
import scene2 from '../../assets/story/scene2_skills.jpg';
import scene3 from '../../assets/story/scene3_opportunity.jpg';
import scene4 from '../../assets/story/scene4_selection.jpg';
import scene5 from '../../assets/story/scene5_success.jpg';

const STORY_SCENES = [
  {
    id: 0,
    phase: "01",
    tag: "LEARNING",
    emotion: "FOCUSED",
    title: "Building the Foundation",
    accent: "#22D3EE",
    image: scene1,
  },
  {
    id: 1,
    phase: "02",
    tag: "SKILL GROWTH",
    emotion: "CONFIDENT",
    title: "Mastery Accelerating",
    accent: "#A78BFA",
    image: scene2,
  },
  {
    id: 2,
    phase: "03",
    tag: "OPPORTUNITY",
    emotion: "HOPEFUL",
    title: "Algorithmic Career Match",
    accent: "#F59E0B",
    image: scene3,
  },
  {
    id: 3,
    phase: "04",
    tag: "SELECTION",
    emotion: "ACHIEVEMENT",
    title: "Hiring Breakthrough",
    accent: "#4ADE80",
    image: scene4,
  },
  {
    id: 4,
    phase: "05",
    tag: "SUCCESS",
    emotion: "SUCCESSFUL",
    title: "Career Fulfillment",
    accent: "#22D3EE",
    image: scene5,
  },
];

const SCENE_DURATION = 5500; // 5.5 seconds per scene (27.5s total cycle)

export default function CinematicStoryHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const currentScene = STORY_SCENES[currentIndex];

  useEffect(() => {
    if (!isPlaying) return;

    const intervalStep = 50;
    const increment = (intervalStep / SCENE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % STORY_SCENES.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPlaying, currentIndex]);

  const handleSelectScene = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.12] dark:border-white/[0.14] bg-[#0A0F16] shadow-2xl group select-none transition-all duration-300">
      
      {/* Expansive Widescreen 16:9 Frame - Unobstructed Full View */}
      <div className="relative w-full aspect-[16/9] overflow-hidden">
        
        {/* Animated Crossfade Scene Layers with Gentle Camera Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentScene.image}
              alt={currentScene.title}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle Top & Bottom Gradient Shadows to Ensure Controls Pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />

        {/* Top Left Floating Phase Pill */}
        <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/[0.18] text-xs font-mono font-bold shadow-lg">
            <span
              className="w-2 h-2 rounded-full animate-pulse shadow-sm"
              style={{ backgroundColor: currentScene.accent, boxShadow: `0 0 8px ${currentScene.accent}` }}
            />
            <span className="text-white/95">
              PHASE {currentScene.phase} / 05
            </span>
            <span className="text-white/30">·</span>
            <span style={{ color: currentScene.accent }} className="font-extrabold tracking-wider">
              {currentScene.emotion}
            </span>
          </div>
        </div>

        {/* Top Right Play / Pause Toggle */}
        <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-20">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-2.5 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md border border-white/[0.18] text-white/95 hover:text-white transition-all shadow-lg flex items-center justify-center group"
            title={isPlaying ? "Pause cinematic story" : "Play cinematic story"}
          >
            {isPlaying ? (
              <Pause className="w-3.5 h-3.5" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />
            )}
          </button>
        </div>

        {/* Bottom Interactive Chapter Stepper / Scrubber Bar (Discrete, Clean, Zero Image Block) */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-5 sm:right-5 z-20">
          <div className="p-1 sm:p-1.5 rounded-xl bg-black/75 backdrop-blur-xl border border-white/[0.14] grid grid-cols-5 gap-1 sm:gap-2 shadow-2xl">
            {STORY_SCENES.map((scene, idx) => {
              const isActive = currentIndex === idx;
              const isPassed = currentIndex > idx;

              return (
                <button
                  key={scene.id}
                  onClick={() => handleSelectScene(idx)}
                  className="relative group py-1.5 px-1 sm:px-2 rounded-lg text-left transition-all overflow-hidden"
                >
                  {/* Progress background bar for active scene */}
                  <div className="absolute inset-0 bg-white/[0.06] rounded-lg" />
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-white/[0.22] rounded-lg origin-left"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                  {isPassed && (
                    <div className="absolute inset-0 bg-white/[0.14] rounded-lg" />
                  )}

                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono font-bold transition-colors truncate ${
                        isActive
                          ? 'text-white font-extrabold'
                          : 'text-white/50 group-hover:text-white/80'
                      }`}
                    >
                      {scene.phase} {scene.tag}
                    </span>
                    {isActive && (
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 ml-1"
                        style={{ backgroundColor: scene.accent, boxShadow: `0 0 6px ${scene.accent}` }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
