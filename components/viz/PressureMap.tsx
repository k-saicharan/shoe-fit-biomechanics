"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface PressureMapProps {
    intensity: number;
    vizState?: string;
}

export default function PressureMap({ intensity, vizState = "pressure-last" }: PressureMapProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);
        const width = 400;
        const height = 600;

        // --- Data: Paths ---
        // Coordinates are rough approximations for a 400x600 view
        // Heel at bottom (200, 500), Toes at top (200, 100)

        // Natural Foot: Wide toes, splay
        const footPath = "M 170,550 C 140,550 130,450 120,350 C 115,250 100,150 140,100 C 160,80 220,80 250,110 C 280,140 290,250 280,350 C 270,450 260,550 230,550 Z";

        // Fashion Last: Tapered toe box
        const shoePath = "M 170,560 C 130,560 120,450 120,350 C 120,250 160,100 200,80 C 240,100 280,250 280,350 C 280,450 270,560 230,560 Z";

        // Hotspots (Circles for pressure points)
        // Medial Forefoot (Bunion area), Lateral Forefoot (Pinky), Top of instep
        const hotspots = [
            { x: 140, y: 140, r: 30, id: "medial" }, // Big toe joint
            { x: 260, y: 160, r: 25, id: "lateral" }, // Pinky toe
            { x: 200, y: 250, r: 40, id: "instep" }   // Instep/Vamp
        ];

        // --- Setup ---
        // Clear previous generic elements if needed, but react handles unmounting. 
        // We'll use D3 pattern for updates.

        // Layers
        // Layers
        let shoeLayer: any = svg.select(".shoe-layer");
        if (shoeLayer.empty()) {
            shoeLayer = svg.append("g").attr("class", "shoe-layer");
            shoeLayer.append("path")
                .attr("class", "shoe-outline")
                .attr("d", shoePath)
                .attr("fill", (d: any) => { /* colorScale(d.value) */ return "none"; }) // Placeholder for colorScale
                .attr("stroke", "#444")
                .attr("stroke-width", 2)
                .attr("opacity", 0);
        }

        let footLayer: any = svg.select(".foot-layer");
        if (footLayer.empty()) {
            footLayer = svg.append("g").attr("class", "foot-layer");
            footLayer.append("path")
                .attr("class", "foot-outline")
                .attr("d", footPath)
                .attr("fill", "#3b82f6") // Blue-500
                .attr("fill-opacity", 0.1)
                .attr("stroke", "#60a5fa") // Blue-400
                .attr("stroke-width", 2)
                .attr("stroke-dasharray", "5,5")
                .attr("opacity", 0);
        }

        let pressureLayer: any = svg.select(".pressure-layer");
        if (pressureLayer.empty()) {
            pressureLayer = svg.append("g").attr("class", "pressure-layer");

            // Defs for gradients/blur
            const defs = svg.append("defs");
            const filter = defs.append("filter")
                .attr("id", "heat-blur")
                .attr("x", "-50%")
                .attr("y", "-50%")
                .attr("width", "200%")
                .attr("height", "200%");
            filter.append("feGaussianBlur")
                .attr("stdDeviation", 15)
                .attr("result", "blurred");

            // Heatmap circles
            pressureLayer.selectAll("circle")
                .data(hotspots)
                .join("circle")
                .attr("cx", (d: any) => d.x)
                .attr("cy", (d: any) => { /* yScale(d.y) */ return d.y; }) // Placeholder for yScale, using cy for circles
                .attr("r", (d: any) => d.r)
                .attr("fill", "red")
                .attr("filter", "url(#heat-blur)")
                .attr("opacity", 0);
        }

        // --- Transitions based on vizState ---

        const t = svg.transition().duration(1000) as any;

        if (vizState === "pressure-last") {
            // Show Geometry Mismatch
            // Reveal Foot
            footLayer.select(".foot-outline")
                .transition(t)
                .attr("opacity", 1)
                .attr("fill-opacity", 0.1)
                .attr("stroke", "#60a5fa");

            // Reveal Shoe
            shoeLayer.select(".shoe-outline")
                .transition(t)
                .attr("opacity", 1)
                .attr("stroke", "#fff")
                .attr("stroke-width", 2);

            // Hide Pressure
            pressureLayer.selectAll("circle")
                .transition(t)
                .attr("opacity", 0);
        }
        else if (vizState === "pressure-warning") {
            // 55mmHg Threshold
            // Dim Foot/Shoe slightly
            footLayer.select(".foot-outline")
                .transition(t)
                .attr("opacity", 0.3);
            shoeLayer.select(".shoe-outline")
                .transition(t)
                .attr("opacity", 0.5);

            // Show Intense Pressure Spots
            pressureLayer.selectAll("circle")
                .transition(t)
                .attr("opacity", 0.8)
                .attr("fill", "#ff0000") // Pure Red
                .attr("r", (d: any) => d.r); // Normal size
        }
        else if (vizState === "pressure-thermal") {
            // Thermal Feedback Loop
            // Expand heat zones
            pressureLayer.selectAll("circle")
                .transition(t)
                .attr("opacity", 0.6)
                .attr("fill", "#ff4400") // Orange/Red
                .attr("r", (d: any) => d.r * 1.5); // Bloomed out

            // Pulse animation
            pressureLayer.selectAll("circle")
                .transition()
                .delay(1000)
                .duration(2000)
                .attr("r", (d: any) => d.r * 1.8)
                .attr("opacity", 0.4)
                .on("end", function repeat(this: any) {
                    d3.select(this)
                        .transition()
                        .duration(2000)
                        .attr("r", (d: any) => (d as any).r * 1.5)
                        .attr("opacity", 0.6)
                        .transition()
                        .duration(2000)
                        .attr("r", (d: any) => (d as any).r * 1.8)
                        .attr("opacity", 0.4)
                        .on("end", repeat);
                });
        }

    }, [vizState]);

    return (
        <div ref={containerRef} className="relative w-full h-full flex items-center justify-center bg-neutral-900/50 rounded-lg overflow-hidden">
            <svg
                ref={svgRef}
                viewBox="0 0 400 600"
                preserveAspectRatio="xMidYMid meet"
                className="w-full h-full max-w-[400px]"
            >
                {/* D3 Content Injected Here */}
            </svg>

            {/* Overlay Text for Context */}
            <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
                <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                    {vizState === "pressure-last" && "Geometry Comparison"}
                    {vizState === "pressure-warning" && "Pressure > 55mmHg"}
                    {vizState === "pressure-thermal" && "Thermal Accumulation"}
                </p>
            </div>
        </div>
    );
}
