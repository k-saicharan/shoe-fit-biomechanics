"use client";

import React from "react";
import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
            <div className="max-w-[90vw] mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-[#1a1a2e] font-bold text-xl tracking-tight">
                    BioPad
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#intro" className="text-sm text-gray-600 hover:text-[#2D23FF] transition-colors">Introduction</a>
                    <a href="#materials" className="text-sm text-gray-600 hover:text-[#2D23FF] transition-colors">Materials</a>
                    <a href="#biomechanics" className="text-sm text-gray-600 hover:text-[#2D23FF] transition-colors">Biomechanics</a>
                    <a href="#findings" className="text-sm text-gray-600 hover:text-[#2D23FF] transition-colors">Findings</a>
                    <a href="#case-study" className="text-sm text-gray-600 hover:text-[#2D23FF] transition-colors">Case Study</a>
                </div>

                {/* Mobile Menu */}
                <button className="md:hidden px-4 py-2 bg-[#1a1a2e] text-white text-sm font-medium rounded-full">
                    Menu
                </button>
            </div>
        </nav>
    );
}
