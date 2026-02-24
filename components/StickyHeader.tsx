// components/StickyHeader.tsx
"use client";

import { useEffect, useRef } from "react";

export default function StickyHeader({ children }: { children: React.ReactNode }) {
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (headerRef.current) {
                    if (!entry.isIntersecting) {
                        headerRef.current.classList.add("scrolled-past-header", "shadow-md");
                    } else {
                        headerRef.current.classList.remove("scrolled-past-header", "shadow-md");
                    }
                }
            },
            { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
        );

        if (headerRef.current) {
            observer.observe(headerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return <div ref={headerRef} className="sticky-header">{children}</div>;
}