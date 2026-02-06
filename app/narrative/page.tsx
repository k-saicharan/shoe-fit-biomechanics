"use client";

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

export default function NarrativePage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // FLUID spring physics - smooth, liquid-like scrolling
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,       // Lower = more fluid, slower response
        damping: 15,         // Lower = more bounce/fluidity
        restDelta: 0.0001,
        mass: 1.5            // Higher mass = more momentum/inertia
    });

    // More aggressive parallax transforms
    const heroY = useTransform(smoothProgress, [0, 0.12], [0, -200]);      // Doubled movement
    const heroOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0]);   // Faster fade
    const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.85]); // Scale down effect

    const introY = useTransform(smoothProgress, [0.03, 0.18], [150, 0]);   // Larger offset
    const introScale = useTransform(smoothProgress, [0.03, 0.18], [0.9, 1]);

    const materialsY = useTransform(smoothProgress, [0.12, 0.32], [120, 0]);
    const materialsScale = useTransform(smoothProgress, [0.12, 0.32], [0.92, 1]);

    const biomechY = useTransform(smoothProgress, [0.28, 0.48], [120, 0]);
    const biomechX = useTransform(smoothProgress, [0.28, 0.48], [50, 0]);  // Horizontal slide

    const findingsY = useTransform(smoothProgress, [0.42, 0.62], [120, 0]);
    const findingsScale = useTransform(smoothProgress, [0.42, 0.62], [0.9, 1]);

    const caseStudyY = useTransform(smoothProgress, [0.58, 0.78], [150, 0]);

    return (
        <div ref={containerRef} className="bg-[#e8e4f0]">
            {/* ============================================ */}
            {/* HERO SECTION - Full Bleed with Parallax */}
            {/* ============================================ */}
            <motion.section
                style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
            >
                {/* Animated Background Grid */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#13131a] to-[#0a0a0f]">
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: `
                                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px),
                                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)
                            `,
                            backgroundSize: '60px 60px'
                        }}
                    />
                    {/* Glow Effects */}
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
                </div>

                <div className="relative z-10 text-center px-8 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Biomechanical Paradigms
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
                            A Multidimensional Analysis of Foot-Footwear Interaction
                        </p>
                        <motion.a
                            href="#intro"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full shadow-2xl shadow-cyan-500/30"
                        >
                            Explore the Research
                        </motion.a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="text-cyan-400">
                        <path d="M15 5L15 25M15 25L8 18M15 25L22 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </motion.div>
            </motion.section>

            {/* ============================================ */}
            {/* INTRODUCTION SECTION */}
            {/* ============================================ */}
            <motion.section
                id="intro"
                style={{ y: introY, scale: introScale }}
                className="relative py-32 bg-[#1a1a2e]"
            >
                <div className="max-w-7xl mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="text-xs font-mono text-blue-400 tracking-widest mb-4">
                            01. INTRODUCTION
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            The Interface Between Human & Material
                        </h2>
                        <p className="text-blue-400 text-lg max-w-3xl mx-auto">
                            Where biomechanics meets material science
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Text Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl p-8 border border-blue-500/20"
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">The Symbiotic System</h3>
                            <p className="text-gray-400 mb-4">
                                The relationship between the human foot and footwear represents one of the most complex interfaces in modern ergonomics.
                            </p>
                            <p className="text-gray-400 mb-6">
                                This symbiotic system involves continuous exchange of kinetic energy, thermal regulation, and structural support—the failure of which can lead to profound physiological consequences.
                            </p>
                            <div className="pt-4 border-t border-blue-500/20">
                                <span className="text-xs font-mono text-blue-400">
                                    Material Performance → Pathological Prophylaxis
                                </span>
                            </div>
                        </motion.div>

                        {/* Image Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-3xl p-8 border border-cyan-500/20"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/shoe-fit-biomechanics/assets/gait-cycle.jpg"
                                alt="Gait cycle biomechanics: Heel Strike, Midstance, Toe-Off"
                                className="w-full rounded-2xl mb-6"
                            />
                            <h3 className="text-2xl font-bold text-white mb-3">Gait Cycle Dynamics</h3>
                            <p className="text-gray-400">
                                The three phases of locomotion: <strong className="text-cyan-400">Heel Strike</strong>, <strong className="text-cyan-400">Midstance</strong>, and <strong className="text-cyan-400">Toe-Off</strong> each place unique demands on footwear design.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* ============================================ */}
            {/* MATERIALS SCIENCE SECTION */}
            {/* ============================================ */}
            <motion.section
                id="materials"
                style={{ y: materialsY, scale: materialsScale }}
                className="relative min-h-screen py-32 bg-[#1a1a2e]"
            >
                <div className="max-w-7xl mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="text-xs font-mono text-cyan-400 tracking-widest mb-4">
                            02. MATERIALS SCIENCE
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Midsole Polymer Science
                        </h2>
                        <p className="text-cyan-400 text-lg">
                            The Foundation of Energy Management
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/shoe-fit-biomechanics/assets/midsole-materials.png"
                                alt="EVA, TPU, and PEBA foam comparison"
                                className="w-full rounded-2xl shadow-2xl"
                            />
                        </motion.div>

                        {/* Material Cards */}
                        <div className="space-y-6">
                            {[
                                {
                                    name: "EVA (Ethylene Vinyl Acetate)",
                                    resilience: "37%",
                                    desc: "Most ubiquitous due to weight-to-cushioning ratio. Susceptible to 'packing out' after 300-500 miles.",
                                    color: "cyan"
                                },
                                {
                                    name: "TPU (Thermoplastic Polyurethane)",
                                    resilience: "55%",
                                    desc: "Superior durability with 700+ mile lifespan. Temperature resistant. +14% heavier than EVA.",
                                    color: "purple"
                                },
                                {
                                    name: "PEBA (Polyamide Block Elastomer)",
                                    resilience: ">60%",
                                    desc: "80-85% energy return. Ultra-lightweight. Requires 48-72 hour recovery between uses.",
                                    color: "pink"
                                }
                            ].map((material, i) => (
                                <motion.div
                                    key={material.name}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all cursor-pointer"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-semibold text-white">{material.name}</h3>
                                        <span className="text-2xl font-bold text-cyan-400">{material.resilience}</span>
                                    </div>
                                    <p className="text-gray-400 text-sm">{material.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ============================================ */}
            {/* BIOMECHANICS - THE ACTIVATION PARADOX */}
            {/* ============================================ */}
            <motion.section
                id="biomechanics"
                style={{ y: biomechY, x: biomechX }}
                className="relative py-32 bg-[#1a1a2e]"
            >
                <div className="max-w-7xl mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="text-xs font-mono text-green-400 tracking-widest mb-4">
                            03. THE ACTIVATION PARADOX
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Neuromuscular Compensation
                        </h2>
                        <p className="text-green-400 text-lg max-w-3xl mx-auto">
                            How footwear alters natural biomechanics
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {/* SECTION A: Visual Evidence (Maximum Size) */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Foot Spring Image - Full Emphasis */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                                <div className="relative bg-[#0B1221] rounded-2xl p-2 ring-1 ring-white/10">
                                    <img
                                        src="/shoe-fit-biomechanics/assets/foot-spring.jpg"
                                        alt="Foot spring mechanism biomechanics"
                                        className="w-full h-auto rounded-xl shadow-2xl"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                        <h3 className="text-xl font-bold text-white">Natural Foot Spring</h3>
                                        <p className="text-sm text-gray-300 mt-1">25% arch compression reduction</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* DTML Image - Full Emphasis */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                                <div className="relative bg-[#0B1221] rounded-2xl p-2 ring-1 ring-white/10">
                                    <img
                                        src="/shoe-fit-biomechanics/assets/dtml-ligaments.jpg"
                                        alt="Deep Transverse Metatarsal Ligament strain"
                                        className="w-full h-auto rounded-xl shadow-2xl"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                        <h3 className="text-xl font-bold text-white">DTML Strain Pathway</h3>
                                        <p className="text-sm text-gray-300 mt-1">200% increase in ligament strain</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* SECTION B: Analysis & Data (Separate Layout) */}
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Paradox Explanation Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20"
                            >
                                <h3 className="text-2xl font-bold text-white mb-4">The Paradox Explained</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-red-500 text-xl">❌</span>
                                        <p className="text-gray-400 text-lg">
                                            <strong className="text-white">Traditional theory:</strong> Supportive footwear reduces workload on foot muscles.
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-green-500 text-xl">✓</span>
                                        <p className="text-gray-400 text-lg">
                                            <strong className="text-white">Actual finding:</strong> Running shoes interfere with natural foot spring, requiring <em className="text-purple-400">higher</em> neuromuscular output.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Muscle Activation Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20"
                            >
                                <div className="text-6xl font-bold text-cyan-400 mb-4">+60%</div>
                                <h3 className="text-2xl font-bold text-white mb-3">Muscle Activation Increase</h3>
                                <p className="text-gray-400 mb-6 text-lg">
                                    <strong className="text-cyan-400">FDB (Flexor Digitorum Brevis)</strong> activation increases by 60% with supportive footwear—contradicting traditional theory.
                                </p>
                                <div className="flex gap-6 text-sm">
                                    <span className="text-cyan-400 font-mono bg-cyan-900/20 px-3 py-1 rounded">+53% AbH</span>
                                    <span className="text-cyan-400 font-mono bg-cyan-900/20 px-3 py-1 rounded">+47% FHB</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ============================================ */}
            {/* CRITICAL FINDINGS */}
            {/* ============================================ */}
            <motion.section
                id="findings"
                style={{ y: findingsY, scale: findingsScale }}
                className="relative py-32 bg-[#1a1a2e]"
            >
                <div className="max-w-7xl mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="text-xs font-mono text-purple-400 tracking-widest mb-4">
                            04. CRITICAL DISCOVERIES
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Paradigm Shifts in Footwear Science
                        </h2>
                    </motion.div>

                    <div className="space-y-16">
                        {/* SECTION A: Forefoot Visuals (Maximum Size) */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Metatarsal Card - Full Emphasis */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="relative group bg-[#0B1221] rounded-2xl p-2 ring-1 ring-white/10"
                            >
                                <img
                                    src="/shoe-fit-biomechanics/assets/toe-box-anatomy.jpg"
                                    alt="Metatarsal compression analysis"
                                    className="w-full h-auto rounded-xl shadow-2xl"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                    <h4 className="text-xl font-bold text-white mb-1">Metatarsal Compression</h4>
                                    <p className="text-sm text-gray-300">15° metatarsal angle forces DTML strain</p>
                                </div>
                            </motion.div>

                            {/* Breathability Card - Full Emphasis */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="relative group bg-[#0B1221] rounded-2xl p-2 ring-1 ring-white/10"
                            >
                                <img
                                    src="/shoe-fit-biomechanics/assets/breathability.jpg"
                                    alt="Vapor trapping analysis"
                                    className="w-full h-auto rounded-xl shadow-2xl"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                    <h4 className="text-xl font-bold text-white mb-1">Vapor Trapping</h4>
                                    <p className="text-sm text-gray-300">Heat accumulation due to poor ventilation</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* SECTION B: Rearfoot & Insole Visuals (Maximum Size) */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Heel Counter Card - Full Emphasis */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="relative group bg-[#0B1221] rounded-2xl p-2 ring-1 ring-white/10"
                            >
                                <img
                                    src="/shoe-fit-biomechanics/assets/heel-counter.jpg"
                                    alt="Heel counter stability analysis"
                                    className="w-full h-auto rounded-xl shadow-2xl"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                    <h4 className="text-xl font-bold text-white mb-1">Rearfoot Instability</h4>
                                    <p className="text-sm text-gray-300">Soft counters enable subtalar eversion</p>
                                </div>
                            </motion.div>

                            {/* Total Contact Card - Full Emphasis */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="relative group bg-[#0B1221] rounded-2xl p-2 ring-1 ring-white/10"
                            >
                                <img
                                    src="/shoe-fit-biomechanics/assets/insole-curvature.jpg"
                                    alt="Insole contact area analysis"
                                    className="w-full h-auto rounded-xl shadow-2xl"
                                />
                                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                    <h4 className="text-xl font-bold text-white mb-1">Arch Gap</h4>
                                    <p className="text-sm text-gray-300">Lack of total contact concentrates pressure</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* SECTION C: Data Cards (Separate Layout) */}
                        <div className="grid lg:grid-cols-3 gap-6">
                            {/* Anthropometric Crisis */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20"
                            >
                                <div className="text-5xl font-bold text-purple-400 mb-4">60%</div>
                                <h3 className="text-xl font-bold text-white mb-3">Anthropometric Crisis</h3>
                                <p className="text-sm text-gray-400">
                                    Only 60% of shoes fit true to labeled size. &quot;Size 9&quot; length varies 6.7mm between brands.
                                </p>
                            </motion.div>

                            {/* PTI */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-500/20"
                            >
                                <div className="text-xs font-mono text-yellow-400 mb-4">PRESSURE × TIME</div>
                                <h3 className="text-xl font-bold text-white mb-3">Pressure-Time Integral</h3>
                                <p className="text-sm text-gray-400">
                                    Cumulative pressure predicts tissue damage. 160 mmHg for 20 min &gt; higher pressure for less time.
                                </p>
                            </motion.div>

                            {/* Moisture Data */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20"
                            >
                                <h3 className="text-xl font-bold text-white mb-3">Moisture Impact</h3>
                                <p className="text-sm text-gray-400">
                                    Synthetic leather (0.84 g/m²·h) is 45× worse than mesh, creating conditions for fungal growth.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ============================================ */}
            {/* CASE STUDY SECTION */}
            {/* ============================================ */}
            <motion.section
                id="case-study"
                style={{ y: caseStudyY }}
                className="relative py-32 bg-[#1a1a2e]"
            >
                <div className="max-w-7xl mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="text-xs font-mono text-emerald-400 tracking-widest mb-4">
                            05. CASE STUDY
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Design Analysis: Success vs Failure
                        </h2>
                        <p className="text-emerald-400 text-lg max-w-3xl mx-auto">
                            Comparing optimal and problematic footwear design elements
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* LEFT COLUMN: Design Analysis Lists */}
                        <div className="space-y-8">
                            {/* Success Factors Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20"
                            >
                                <div className="text-xs font-mono text-green-400 tracking-widest mb-4 flex items-center gap-2">
                                    <span className="text-green-500">✓</span> OPTIMAL DESIGN
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6">Success Factors</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <div>
                                            <strong className="text-white">Mesh breathability:</strong>
                                            <span className="text-gray-400"> ~38 g/m²·h MVTR prevents heat accumulation</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <div>
                                            <strong className="text-white">Traditional tongue:</strong>
                                            <span className="text-gray-400"> Fully adjustable, no residual constraint</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <div>
                                            <strong className="text-white">Generous forefoot:</strong>
                                            <span className="text-gray-400"> Reserve capacity for activity-induced expansion</span>
                                        </div>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Failure Mechanisms Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-8 border border-red-500/20"
                            >
                                <div className="text-xs font-mono text-red-400 tracking-widest mb-4 flex items-center gap-2">
                                    <span className="text-red-500">✗</span> FAILURE MECHANISMS
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6">Design Flaws</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">✗</span>
                                        <div>
                                            <strong className="text-white">Elasticated tongue:</strong>
                                            <span className="text-gray-400"> Sustained midfoot compression, PTI accumulation</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">✗</span>
                                        <div>
                                            <strong className="text-white">Low breathability:</strong>
                                            <span className="text-gray-400"> 0.84 g/m²·h accelerates vasodilation</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-red-500 mt-1">✗</span>
                                        <div>
                                            <strong className="text-white">Aggressive taper:</strong>
                                            <span className="text-gray-400"> Compresses interdigital nerves</span>
                                        </div>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN: Visuals Breakdown */}
                        <div className="space-y-8">
                            {/* Tongue Mechanics Image Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20"
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/shoe-fit-biomechanics/assets/tongue-mechanics.jpg"
                                    alt="Tongue mechanics comparison"
                                    className="w-full h-64 object-contain rounded-xl mb-4 bg-black/20"
                                />
                                <h3 className="text-xl font-bold text-white mb-2">Tongue Mechanics</h3>
                                <p className="text-gray-400">
                                    <strong className="text-cyan-400">Traditional adjustable tongue</strong> distributes pressure evenly. <strong className="text-red-400">Elasticated tongues</strong> create constant midfoot tension.
                                </p>
                            </motion.div>

                            {/* Key Insight Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20"
                            >
                                <div className="text-5xl font-bold text-purple-400 mb-4">45×</div>
                                <h3 className="text-2xl font-bold text-white mb-3">Breathability Difference</h3>
                                <p className="text-gray-400 mb-4">
                                    Synthetic leather allows only <strong className="text-red-400">0.84 g/m²·h</strong> moisture vapor transmission vs mesh fabric at <strong className="text-green-400">38.06 g/m²·h</strong>.
                                </p>
                                <div className="pt-4 border-t border-purple-500/20">
                                    <span className="text-xs font-mono text-purple-400">
                                        Creates &gt;90% humidity → fungal infection risk
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ============================================ */}
            {/* FOOTER */}
            {/* ============================================ */}
            <footer className="bg-[#0a0a0f] py-16 text-center">
                <div className="max-w-4xl mx-auto px-8">
                    <p className="text-gray-500 mb-2">Biomechanical Paradigms in Foot-Footwear Interaction</p>
                    <p className="text-gray-600 text-sm">A Multidimensional Analysis of Material Performance, Morphological Adaptation, and Pathological Prophylaxis</p>
                    <p className="text-gray-700 text-xs mt-8">© 2026 Research Analysis | For Educational Purposes</p>
                </div>
            </footer>

            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed bottom-8 right-8 w-12 h-12 z-50"
                style={{ opacity: smoothProgress }}
            >
                <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle
                        cx="50" cy="50" r="45"
                        fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8"
                    />
                    <motion.circle
                        cx="50" cy="50" r="45"
                        fill="none" stroke="url(#gradient)" strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="283"
                        style={{ strokeDashoffset: useTransform(smoothProgress, [0, 1], [283, 0]) }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00d4ff" />
                            <stop offset="100%" stopColor="#7b2cbf" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>
        </div>
    );
}
