"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clicked, setClicked] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseClick = () => {
            setClicked(true);
            setTimeout(() => setClicked(false), 150);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseClick);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseClick);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-brand-red rounded-full pointer-events-none z-50 mix-blend-screen"
                animate={{
                    x: position.x - 8,
                    y: position.y - 8,
                    scale: clicked ? 0.5 : isHovering ? 1.5 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            {/* Outer trailing ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-brand-blue-light rounded-full pointer-events-none z-40 hidden md:block"
                animate={{
                    x: position.x - 20,
                    y: position.y - 20,
                    scale: clicked ? 1.2 : isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.3 : 1,
                }}
                transition={{ type: "tween", ease: "circOut", duration: 0.3 }}
            />
        </>
    );
}
