"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GaitCycleViz() {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-black rounded-lg p-8">
            <div className="text-center">
                <motion.div
                    animate={{ rotate: [0, 10, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="text-6xl mb-4"
                >
                    🦶
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">The Dynamic Foot</h3>
                <p className="text-neutral-400 font-mono text-sm max-w-xs mx-auto">
                    ACT I: Visualizing the 3-5% volumetric expansion during the stance phase.
                </p>
            </div>
        </div>
    );
}
