import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bird_gif from "../assets/backgrounds/garden/bird.gif";

function BirdsFlock() {
  const [birds, setBirds] = useState([]);

  // Generate random bird properties
  const createBird = () => {
    return {
      id: Date.now() + Math.random(),
      delay: Math.random() * 2, // Random delay 0-2 seconds
      duration: 4 + Math.random() * 2, // Random duration 4-6 seconds
      yOffset: Math.random() * 20 - 10, // Random vertical offset -10 to +10%
      size: 30 + Math.random() * 20, // Random size 30-50px
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBirds((prevBirds) => {
        if (prevBirds.length >= 10) return prevBirds;
        const newFlock = Array.from({ length: 10 }, () => createBird());
        return [...prevBirds, ...newFlock];
      });
    }, 180000); // 3 mins

    return () => {
      clearInterval(interval);
      setBirds([]);
    };
  }, []);

  // Remove birds after they complete animation
  const removeBird = (birdId) => {
    setBirds((prevBirds) => prevBirds.filter((bird) => bird.id !== birdId));
  };

  return (
    <>
      <AnimatePresence>
        {birds.map((bird) => (
          <motion.div
            key={bird.id}
            initial={{
              x: "100%",
              y: `${-80 + bird.yOffset}%`,
            }}
            animate={{
              x: ["calc(100% - 4%)", "0%", "calc(-100% + 4%)"],
              y: [
                `${-80 + bird.yOffset}%`,
                `${-50 + bird.yOffset}%`,
                `${-10 + bird.yOffset}%`,
                `${0 + bird.yOffset}%`,
                `${-20 + bird.yOffset}%`,
                `${-30 + bird.yOffset}%`,
              ],
            }}
            exit={{
              x: "calc(-100%)",
              y: `${-20 + bird.yOffset}%`,
            }}
            transition={{
              ease: "linear",
              duration: bird.duration,
              delay: bird.delay,
            }}
            style={{
              position: "fixed",
              zIndex: 300,
              top: "30%",
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
            onAnimationComplete={() => removeBird(bird.id)}
          >
            <img
              src={bird_gif}
              alt="bird"
              style={{
                width: `${bird.size}px`,
                height: `auto`,
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Single Bird Animated curved flow path
       <AnimatePresence>
          <motion.div
            initial={{
              x: "100%",
              y: "-80%",
            }}
            animate={{
              x: ["calc(100% - 4%)", "0%", "calc(-100% + 4%)"],
              y: ["-80%", "-50%", "-10%", "10%", "-10%", "-20%"],
            }}
            exit={{ x: "calc(-100%)", y: "-20%" }}
            transition={{
              ease: "linear", // Linear for constant speed
              duration: 5,
              repeat:
                Math.random() > 0 && Math.random() < 60 && Math.random() * 1000,
              repeatType: "loop",
              // times: [0, 0.5, 1],
            }}
            style={{
              position: "fixed", // Use fixed instead of absolute
              zIndex: 300,
              top: "30%",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={bird}
              alt="bird"
              style={{
                width: "4%",
                height: "auto",
              }}
            />
          </motion.div>
        </AnimatePresence> */}
    </>
  );
}

export default BirdsFlock;
