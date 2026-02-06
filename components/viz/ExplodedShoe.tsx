"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ExplodedShoeProps {
    vizState?: string;
}

export default function ExplodedShoe({ vizState = "shoe-comparison" }: ExplodedShoeProps) {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-neutral-900 rounded-lg p-8 overflow-hidden">
            <AnimatePresence mode="wait">
                {vizState === "shoe-comparison" && <ComparisonView key="comparison" />}
                {vizState === "shoe-exploded-lacoste" && <ExplodedView key="exploded" />}
                {vizState === "shoe-pti-graph" && <PTIGraph key="graph" />}
            </AnimatePresence>
        </div>
    );
}

function ComparisonView() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col md:flex-row gap-8 items-center"
        >
            <ShoeCard
                name="Puma Rider FV"
                type="Retro Runner"
                features={["Mesh Upper", "Traditional Lacing", "Wide Toe Box"]}
                color="text-emerald-400"
                icon="👟"
            />
            <div className="text-2xl text-gray-600 font-bold">VS</div>
            <ShoeCard
                name="Lacoste L003"
                type="Tech Fashion"
                features={["Ripstop/Synthetic", "Elastic Tongue", "Tapered Toe"]}
                color="text-rose-400"
                icon="👞"
            />
        </motion.div>
    );
}

function ShoeCard({ name, type, features, color, icon }: { name: string, type: string, features: string[], color: string, icon: string }) {
    return (
        <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700 w-64 text-center">
            <div className="text-6xl mb-4">{icon}</div>
            <h3 className={`text-xl font-bold mb-1 ${color}`}>{name}</h3>
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-4">{type}</div>
            <ul className="text-left space-y-2">
                {features.map((f, i) => (
                    <li key={i} className="text-sm text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                        {f}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function ExplodedView() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full max-w-md h-96 flex items-center justify-center"
        >
            <div className="absolute top-4 left-0 bg-rose-500/20 text-rose-300 px-3 py-1 rounded text-xs font-mono border border-rose-500/30">
                ⚠️ FATAL FLAW DETECTED
            </div>

            {/* Layers */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: -60 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute bg-neutral-800 w-64 h-24 rounded-t-3xl border-2 border-dashed border-rose-500/50 flex items-center justify-center z-20"
            >
                <div className="text-rose-400 font-mono text-sm font-bold bg-neutral-900 px-2">ELASTIC TONGUE</div>
                <div className="absolute -right-4 top-1/2 w-8 h-8 rounded-full border-2 border-rose-500 animate-ping" />
            </motion.div>

            <motion.div
                className="absolute bg-neutral-700 w-64 h-32 rounded-xl border border-neutral-600 z-10 flex items-end justify-center pb-4"
            >
                <span className="text-neutral-400 text-xs">SYNTHETIC UPPER</span>
            </motion.div>

            <motion.div
                initial={{ y: 0 }}
                animate={{ y: 60 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute bg-neutral-600 w-64 h-16 rounded-b-xl mt-32 border-t border-neutral-800 flex items-center justify-center"
            >
                <span className="text-neutral-300 text-xs">EVA MIDSOLE</span>
            </motion.div>

            <div className="absolute bottom-0 text-center w-full">
                <p className="text-gray-400 text-sm mt-4">
                    The elastic band applies constant downward pressure,<br />even when laces are untied.
                </p>
            </div>
        </motion.div>
    );
}

function PTIGraph() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-lg"
        >
            <h3 className="text-xl font-bold text-white mb-6 text-center">Pressure-Time Integral</h3>
            <div className="relative h-64 border-l border-b border-gray-600 ml-8 mb-8">
                {/* Y-Axis Label */}
                <div className="absolute -left-12 top-0 bottom-0 h-full flex items-center -rotate-90 text-xs text-gray-500">
                    Pressure (mmHg)
                </div>

                {/* Threshold Line */}
                <div className="absolute left-0 right-0 top-1/4 border-b border-rose-500/50 border-dashed w-full h-px">
                    <span className="absolute right-0 -top-6 text-rose-500 text-xs">Nerve Damage Threshold</span>
                </div>

                {/* Graph Line */}
                <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.path
                        d="M0,250 C50,230 150,150 200,100 S350,50 450,20"
                        fill="none"
                        stroke="#fb7185"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.circle cx="0" cy="250" r="4" fill="#fb7185" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0 }} />
                    <motion.circle cx="450" cy="20" r="4" fill="#fb7185" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} />
                </svg>

                {/* X-Axis Label */}
                <div className="absolute -bottom-8 left-0 right-0 w-full text-center text-xs text-gray-500">
                    Time (Duration of Wear)
                </div>
            </div>
            <p className="text-sm text-neutral-500">Interact to explore the shoe&apos;s components.</p>
            <p className="text-center text-neutral-400 text-sm">
                Pressure accumulates over time, eventually exceeding the nerve's recovery capacity.
            </p>
        </motion.div>
    );
}
