"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContentCardProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    className?: string;
}

export default function ContentCard({ title, subtitle, children, className = "" }: ContentCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`card p-8 md:p-12 max-w-xl ${className}`}
        >
            {subtitle && (
                <div className="text-sm font-mono uppercase tracking-wider text-gray-500 mb-2">
                    {subtitle}
                </div>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {title}
            </h2>
            <div className="text-gray-600 leading-relaxed">
                {children}
            </div>
        </motion.div>
    );
}
