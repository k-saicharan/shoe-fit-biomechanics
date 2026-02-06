"use client";

import React, { ReactNode } from "react";

interface SectionProps {
    id?: string;
    backgroundImage?: string;
    className?: string;
    children: ReactNode;
}

export default function Section({ id, backgroundImage, className = "", children }: SectionProps) {
    return (
        <section
            id={id}
            className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden ${className}`}
        >
            {/* Background Image */}
            {backgroundImage && (
                <div className="absolute inset-0 opacity-40">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={backgroundImage}
                        alt="Background visualization"
                        className="w-full h-full object-cover mix-blend-screen"
                    />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-16">
                {children}
            </div>
        </section>
    );
}
