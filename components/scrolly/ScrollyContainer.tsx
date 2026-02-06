"use client";

import React, { useEffect, useState, useRef } from "react";
import scrollama from "scrollama";

interface ScrollyContainerProps {
    children: React.ReactNode;
    onStepEnter: (response: { index: number; direction: "up" | "down" }) => void;
}

export default function ScrollyContainer({
    children,
    onStepEnter,
}: ScrollyContainerProps) {
    const [isMounted, setIsMounted] = useState(false);
    const scrollerRef = useRef<any>(null);

    useEffect(() => {
        // eslint-disable-next-line
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        // Instantiate scrollama
        scrollerRef.current = scrollama();

        // Setup the scroller
        scrollerRef.current
            .setup({
                step: ".scrolly-step",
                offset: 0.5,
                debug: false,
            })
            .onStepEnter((response: any) => {
                onStepEnter({
                    index: response.index,
                    direction: response.direction,
                });
            });

        return () => {
            if (scrollerRef.current) {
                scrollerRef.current.destroy();
            }
        };
    }, [isMounted, onStepEnter]);

    return <div className="scrolly-container relative">{children}</div>;
}
