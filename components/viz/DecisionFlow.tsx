import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface DecisionFlowProps {
    vizState?: string;
}

export default function DecisionFlow({ vizState = "diagnostics-intro" }: DecisionFlowProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const [lacingMode, setLacingMode] = useState<"standard" | "window">("standard");

    // Reset lacing mode when entering the step
    useEffect(() => {
        if (vizState === "diagnostics-window-lacing") {
            setLacingMode("standard"); // Default to problem state
        }
    }, [vizState]);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);

        // const width = 400; // Unused
        // const height = 600; // Unused

        // --- Data: Paths ---
        // Approximate Top-Down Foot Outline
        const footPath = "M 150,550 C 120,550 100,450 90,350 C 85,250 80,150 120,100 C 140,80 260,80 280,100 C 320,150 315,250 310,350 C 300,450 280,550 250,550 Z";

        // Nerve Path (Deep Peroneal) - running down the center/dorsum
        const nervePath = "M 200,100 Q 210,200 200,300 T 195,450";

        // Lacing Eyelet Positions (Left and Right banks)
        const eyeletsLeft = [
            { x: 130, y: 180 }, { x: 135, y: 220 }, { x: 140, y: 260 }, { x: 145, y: 300 }
        ];
        const eyeletsRight = [
            { x: 270, y: 180 }, { x: 265, y: 220 }, { x: 260, y: 260 }, { x: 255, y: 300 }
        ];

        // --- Layer Setup ---
        let baseLayer: any = svg.select(".base-layer");
        if (baseLayer.empty()) {
            baseLayer = svg.append("g").attr("class", "base-layer");
            // Foot Outline
            baseLayer.append("path")
                .attr("d", footPath)
                .attr("fill", "#1a1a1a")
                .attr("stroke", "#444")
                .attr("stroke-width", 2);
        }

        let nerveLayer: any = svg.select(".nerve-layer");
        if (nerveLayer.empty()) {
            nerveLayer = svg.append("g").attr("class", "nerve-layer");
            // Nerve trunk
            nerveLayer.append("path")
                .attr("class", "nerve-main")
                .attr("d", nervePath)
                .attr("fill", "none")
                .attr("stroke", "#fbbf24") // Amber-400
                .attr("stroke-width", 3)
                .attr("stroke-opacity", 0);

            // Hotspot (Compression point)
            nerveLayer.append("circle")
                .attr("class", "compression-point")
                .attr("cx", 200)
                .attr("cy", 240) // Instep area
                .attr("r", 0)
                .attr("fill", "red")
                .attr("filter", "blur(5px)")
                .attr("opacity", 0);
        }

        let lacingLayer: any = svg.select(".lacing-layer");
        if (lacingLayer.empty()) {
            lacingLayer = svg.append("g").attr("class", "lacing-layer");
        }

        const t: any = svg.transition().duration(1000);

        // --- Render Logic ---

        // --- Render Logic ---

        if (vizState === "diagnostics-intro") {
            // 1. Show Nerve
            // 1. Show Nerve
            nerveLayer.select(".nerve-main")
                .transition(t as any) // Cast transition to any to avoid d3 type strictness
                .attr("stroke-opacity", 0.8);

            // 2. Show Compression
            nerveLayer.select(".compression-point")
                .transition(t as any)
                .attr("r", 25)
                .attr("opacity", 0.8)
                .on("end", function repeat(this: any) {
                    // Pulse animation
                    d3.select(this)
                        .transition()
                        .duration(1000)
                        .attr("r", 30)
                        .attr("opacity", 0.4)
                        .transition()
                        .duration(1000)
                        .attr("r", 25)
                        .attr("opacity", 0.8)
                        .on("end", repeat);
                });

            // Hide lacing
            lacingLayer.transition(t as any).attr("opacity", 0);
        } else {
            // Stop nerve animation/pulse if leaving
            nerveLayer.select(".compression-point").interrupt();
        }

        if (vizState === "diagnostics-window-lacing") {
            // 1. Dim Nerve (Context)
            nerveLayer.select(".nerve-main")
                .transition(t as any)
                .attr("stroke-opacity", 0.3);

            // Show base lacing layer
            lacingLayer.transition(t as any).attr("opacity", 1);

            // 2. Draw Laces based on Mode
            const laces = lacingLayer.selectAll(".lace-segment")
                .data(getLaceSegments(lacingMode, eyeletsLeft, eyeletsRight), (d: any) => d.id);

            // Enter
            laces.enter()
                .append("line")
                .attr("class", "lace-segment")
                .attr("stroke", "#fff")
                .attr("stroke-width", 4)
                .attr("stroke-linecap", "round")
                .attr("opacity", 0)
                .attr("x1", (d: any) => d.x1)
                .attr("y1", (d: any) => d.y1)
                .attr("x2", (d: any) => d.x1) // Start as point
                .attr("y2", (d: any) => d.y1)
                .merge(laces as any) // Update
                .transition(t as any)
                .attr("opacity", 1)
                .attr("x1", (d: any) => d.x1)
                .attr("y1", (d: any) => d.y1)
                .attr("x2", (d: any) => d.x2)
                .attr("y2", (d: any) => d.y2);

            // Exit
            laces.exit()
                .transition(t as any)
                .attr("opacity", 0)
                .remove();

            // 3. Update Compression/Pressure Point based on Mode
            const compressionColor = lacingMode === "window" ? "#4ade80" : "#ef4444"; // Green vs Red
            nerveLayer.select(".compression-point")
                .transition(t as any)
                .attr("fill", compressionColor)
                .attr("r", lacingMode === "window" ? 15 : 25) // Shrink if relieved
                .attr("opacity", 0.6);
        }

    }, [vizState, lacingMode]);

    // Helper to calculate lace segments
    const getLaceSegments = (mode: string, left: any[], right: any[]) => {
        const segments = [];
        // Standard Criss-Cross logic placeholder
        // Window logic placeholder

        // Simple Index-based mapping
        // 0: 180y (Top)
        // 1: 220y (Critical Zone - Window here)
        // 2: 260y 
        // 3: 300y

        // Always connect bottom (3)
        segments.push({ id: "base", x1: left[3].x, y1: left[3].y, x2: right[3].x, y2: right[3].y });

        if (mode === "standard") {
            // Criss Cross over the critical zone
            segments.push({ id: "cross-1", x1: left[3].x, y1: left[3].y, x2: right[2].x, y2: right[2].y });
            segments.push({ id: "cross-2", x1: right[3].x, y1: right[3].y, x2: left[2].x, y2: left[2].y });

            // Critical area crossing (The problem)
            segments.push({ id: "problem-1", x1: left[2].x, y1: left[2].y, x2: right[1].x, y2: right[1].y });
            segments.push({ id: "problem-2", x1: right[2].x, y1: right[2].y, x2: left[1].x, y2: left[1].y });

            segments.push({ id: "top-1", x1: left[1].x, y1: left[1].y, x2: right[0].x, y2: right[0].y });
            segments.push({ id: "top-2", x1: right[1].x, y1: right[1].y, x2: left[0].x, y2: left[0].y });
        } else {
            // Window Mode (Parallel bars or Skip)

            // Skip the crossing over index 1-2 gap
            // Go vertical instead
            segments.push({ id: "vert-l", x1: left[2].x, y1: left[2].y, x2: left[1].x, y2: left[1].y });
            segments.push({ id: "vert-r", x1: right[2].x, y1: right[2].y, x2: right[1].x, y2: right[1].y });

            // Resume crossing above
            segments.push({ id: "top-1", x1: left[1].x, y1: left[1].y, x2: right[0].x, y2: right[0].y });
            segments.push({ id: "top-2", x1: right[1].x, y1: right[1].y, x2: left[0].x, y2: left[0].y });

            // Base cross still exists
            segments.push({ id: "cross-1", x1: left[3].x, y1: left[3].y, x2: right[2].x, y2: right[2].y });
            segments.push({ id: "cross-2", x1: right[3].x, y1: right[3].y, x2: left[2].x, y2: left[2].y });
        }
        return segments;
    };


    return (
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center bg-neutral-900/50 rounded-lg overflow-hidden">
            <svg
                ref={svgRef}
                viewBox="0 0 400 600"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full max-w-[400px]"
            >
                {/* D3 Content */}
            </svg>

            {/* Controls for Interactive Step */}
            {vizState === "diagnostics-window-lacing" && (
                <div className="absolute bottom-8 left-0 w-full flex justify-center gap-4">
                    <button
                        onClick={() => setLacingMode("standard")}
                        className={`px-4 py-2 rounded text-sm font-bold transition-colors ${lacingMode === "standard"
                            ? "bg-red-500 text-white shadow-lg shadow-red-500/30"
                            : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                            }`}
                    >
                        Standard Lacing
                    </button>
                    <button
                        onClick={() => setLacingMode("window")}
                        className={`px-4 py-2 rounded text-sm font-bold transition-colors ${lacingMode === "window"
                            ? "bg-green-500 text-white shadow-lg shadow-green-500/30"
                            : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                            }`}
                    >
                        Window Lacing
                    </button>
                </div>
            )}

            <div className="absolute top-4 left-4">
                <h3 className="text-white font-bold text-lg">
                    {vizState === "diagnostics-intro" && "Nerve Compression Analysis"}
                    {vizState === "diagnostics-window-lacing" && "Lacing Strategy"}
                </h3>
            </div>
        </div>
    );
}
