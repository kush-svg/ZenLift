"use client";

import React, { useEffect, useRef } from "react";

const DotCorridorBg = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Refs for tracking interactive states
  const scrollYRef = useRef(0);
  const targetScrollYRef = useRef(0);
  const mouseXRef = useRef(0);
  const mouseYRef = useRef(0);
  const targetMouseXRef = useRef(0);
  const targetMouseYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set high-DPI scaling
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Track scroll
    const handleScroll = () => {
      targetScrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Track mouse move for premium parallax
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse positions to range [-0.5, 0.5]
      targetMouseXRef.current = (e.clientX / window.innerWidth) - 0.5;
      targetMouseYRef.current = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 3D Corridor Variables
    const corridorHeight = 350; // Distance of ceiling and floor from center
    const corridorWidth = 4000;   // Span in X direction (stretched very wide horizontally!)
    const corridorLength = 1500;  // Span in Z direction (infinite loop depth)
    const focalLength = 400;      // Focal length for perspective projection

    // Grid details
    const numRows = 16;           // Number of steps along Z
    const numCols = 41;           // Number of lines along X (increased for wide span)
    const rowSpacing = corridorLength / numRows;
    const colSpacing = corridorWidth / (numCols - 1);

    // Create 3D points
    interface Point3D {
      x: number;
      y: number;
      z: number;
      colorType: "base" | "primary"; // Cleaned up (35% orange / 65% base)
    }

    const points: Point3D[] = [];

    // Construct dots for ceiling and floor
    for (let r = 0; r < numRows; r++) {
      const z = r * rowSpacing;
      
      for (let c = 0; c < numCols; c++) {
        // Skip the middle columns to create a symmetrical center walkway gap
        if (c >= 18 && c <= 22) continue;
        const x = (c * colSpacing) - (corridorWidth / 2);
        
        // 35% orange (primary) and 65% base (black/white depending on theme)
        let colorType: "base" | "primary" = "base";
        if (Math.random() < 0.35) {
          colorType = "primary";
        }

        // Ceiling dot
        points.push({ x, y: -corridorHeight, z, colorType });
        // Floor dot
        points.push({ x, y: corridorHeight, z, colorType });
      }
    }

    // Animation Render Loop
    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Smooth scroll interpolation (LERP) for buttery flythrough
      scrollYRef.current += (targetScrollYRef.current - scrollYRef.current) * 0.08;
      
      // Smooth mouse parallax interpolation
      mouseXRef.current += (targetMouseXRef.current - mouseXRef.current) * 0.05;
      mouseYRef.current += (targetMouseYRef.current - mouseYRef.current) * 0.05;

      // Extract colors dynamically from CSS custom properties for perfect theme sync
      const style = getComputedStyle(document.documentElement);
      const dotBaseColor = style.getPropertyValue("--text-primary").trim() || "#F5F5F7";
      const primaryColor = style.getPropertyValue("--primary").trim() || "#F07B00";
      const goldColor = style.getPropertyValue("--accent-gold").trim() || "#D4AF37";

      // Convert hex/rgb values to standard clean rgba format
      const parseToRgba = (colorStr: string, alpha: number) => {
        if (colorStr.startsWith("#")) {
          const hex = colorStr.replace("#", "");
          const r = parseInt(hex.substring(0, 2), 16);
          const g = parseInt(hex.substring(2, 4), 16);
          const b = parseInt(hex.substring(4, 6), 16);
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        }
        if (colorStr.startsWith("rgb")) {
          return colorStr.replace("rgb", "rgba").replace(")", `, ${alpha})`);
        }
        return `rgba(245, 245, 247, ${alpha})`;
      };

      // Camera Offset from Parallax & Scroll (Scrub Z based on Scroll)
      // Multiply scroll position to advance the camera Z coordinate
      const scrollZ = scrollYRef.current * 0.6;
      
      const cameraX = mouseXRef.current * 200; // Camera moves left/right
      const cameraY = mouseYRef.current * 100; // Camera moves up/down

      // Sort points from back to front (depth sorting) to ensure correct layering
      const sortedPoints = [...points].sort((a, b) => {
        // Calculate projected depth
        const az = ((a.z - scrollZ) % corridorLength + corridorLength) % corridorLength;
        const bz = ((b.z - scrollZ) % corridorLength + corridorLength) % corridorLength;
        return bz - az; // Render further elements first
      });

      // Render dots
      sortedPoints.forEach((pt) => {
        // Infinite looping depth math
        let relativeZ = pt.z - scrollZ;
        
        // Wrap Z coordinates to create infinite tunnel loop
        relativeZ = ((relativeZ % corridorLength) + corridorLength) % corridorLength;

        // Skip rendering points that are too close to prevent huge dots/clipping
        if (relativeZ < 15) return;

        // Apply interactive camera position
        const cx = pt.x - cameraX;
        const cy = pt.y - cameraY;

        // 3D Perspective Projection
        const px = (cx * focalLength) / relativeZ + width / 2;
        const py = (cy * focalLength) / relativeZ + height / 2;

        // Skip drawing if outside the viewport boundaries to save cycles
        if (px < -50 || px > width + 50 || py < -50 || py > height + 50) return;

        // Radius based on perspective (further = smaller) - slightly larger hollow bubbles
        const baseRadius = pt.colorType === "base" ? 4.5 : 6.0;
        const radius = (baseRadius * focalLength) / relativeZ;

        // Opacity mapping (further = fades to vanishing point, extremely close = fades out)
        let opacity = 1.0;
        
        // Fade out near the infinite vanishing point (relativeZ approaches corridorLength)
        if (relativeZ > corridorLength * 0.7) {
          opacity = 1.0 - (relativeZ - corridorLength * 0.7) / (corridorLength * 0.3);
        }
        
        // Fade out when passing extremely close to the camera for realistic immersion
        if (relativeZ < 150) {
          opacity = Math.max(0, (relativeZ - 15) / 135);
        }

        // Apply theme color
        let color = dotBaseColor;
        if (pt.colorType === "primary") {
          color = primaryColor;
        }

        // Draw hollow bubble (ring) with stroke instead of solid fill
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.strokeStyle = parseToRgba(color, opacity);
        ctx.lineWidth = Math.max(0.8, 1.5 * (focalLength / relativeZ));
        ctx.stroke();

        // Extra premium soft glow for brand color highlights
        if (pt.colorType === "primary" && relativeZ < 600) {
          ctx.beginPath();
          ctx.arc(px, py, radius * 2.5, 0, Math.PI * 2);
          ctx.strokeStyle = parseToRgba(color, opacity * 0.12);
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="dot-corridor-canvas"
      style={{
        display: "block",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -2,
      }}
    />
  );
};

export default DotCorridorBg;
