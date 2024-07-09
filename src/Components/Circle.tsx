"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Circle: React.FC = () => {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ball = ballRef.current;
    const mouse = { x: 0, y: 0 };
    const pos = { x: 0, y: 0 };
    const ratio = 0.3;

    gsap.set(ball, { xPercent: -50, yPercent: -50 });

    const mouseMove = (e: { clientX: number; clientY: number; }) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };

    document.addEventListener("mousemove", mouseMove);

    gsap.ticker.add(() => {
      pos.x += (mouse.x - pos.x) * ratio;
      pos.y += (mouse.y - pos.y) * ratio;
      gsap.set(ball, { x: pos.x, y: pos.y });
    });

    return () => {
      document.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div id="magic-cursor" >
      <div id="ball" ref={ballRef}></div>
    </div>
  );
};

export default Circle;
