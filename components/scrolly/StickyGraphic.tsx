"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

interface StickyGraphicProps {
    currentStep: number;
    stepsContent: React.ReactNode[];
}

export default function StickyGraphic({ currentStep, stepsContent }: StickyGraphicProps) {
    return (
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black hidden lg:flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {stepsContent[currentStep] || (
                        <div className="text-neutral-500 font-mono text-sm">
                            Waiting for visualization... [Step {currentStep}]
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
