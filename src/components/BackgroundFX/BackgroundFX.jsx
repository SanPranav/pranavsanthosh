import React, { useEffect, useRef } from 'react';
import './BackgroundFX.css';

const MIN_NODES = 70;
const MAX_NODES = 160;
const LINK_DISTANCE = 170;

const createNode = (width, height) => ({
  x: Math.random() * width,
  y: Math.random() * height,
  radius: 1.2 + Math.random() * 2.2,
  vx: (Math.random() - 0.5) * 0.42,
  vy: (Math.random() - 0.5) * 0.42,
  depth: 0.6 + Math.random() * 1.1,
  pulseOffset: Math.random() * Math.PI * 2
});

const createGlowAnchor = (width, height) => ({
  x: Math.random() * width,
  y: Math.random() * height,
  radius: 180 + Math.random() * 220,
  driftX: 0.18 + Math.random() * 0.3,
  driftY: 0.14 + Math.random() * 0.26,
  phase: Math.random() * Math.PI * 2
});

const getNodeCount = (width, height) => {
  const densityBasedCount = Math.floor((width * height) / 17000);
  return Math.max(MIN_NODES, Math.min(MAX_NODES, densityBasedCount));
};

const BackgroundFX = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return undefined;
    }

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes = [];
    let projected = [];
    let glowAnchors = [];
    let frameId = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pointer = {
      x: width * 0.5,
      y: height * 0.5,
      ix: width * 0.5,
      iy: height * 0.5,
      active: false
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = getNodeCount(width, height);
      nodes = Array.from({ length: count }, () => createNode(width, height));
      projected = Array.from({ length: count }, () => ({ x: 0, y: 0, depth: 1 }));
      glowAnchors = Array.from({ length: 3 }, () => createGlowAnchor(width, height));

      if (!pointer.active) {
        pointer.x = width * 0.5;
        pointer.y = height * 0.5;
        pointer.ix = pointer.x;
        pointer.iy = pointer.y;
      }
    };

    const handlePointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const wrapY = (value) => {
      if (value < -40) return value + height + 80;
      if (value > height + 40) return value - (height + 80);
      return value;
    };

    const draw = (timestamp) => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const scrollOffset = (scrollY * 0.09) % (height + 80);
      const time = timestamp * 0.001;
      const targetX = pointer.active ? pointer.x : width * 0.5;
      const targetY = pointer.active ? pointer.y : height * 0.5;

      pointer.ix += (targetX - pointer.ix) * 0.1;
      pointer.iy += (targetY - pointer.iy) * 0.1;

      context.clearRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        for (let index = 0; index < glowAnchors.length; index += 1) {
          const glow = glowAnchors[index];
          const gx = glow.x + Math.sin(time * glow.driftX + glow.phase) * 120;
          const gy = glow.y + Math.cos(time * glow.driftY + glow.phase) * 90;

          const gradient = context.createRadialGradient(gx, gy, 0, gx, gy, glow.radius);
          gradient.addColorStop(0, 'rgba(143, 180, 255, 0.11)');
          gradient.addColorStop(1, 'rgba(143, 180, 255, 0)');

          context.fillStyle = gradient;
          context.beginPath();
          context.arc(gx, gy, glow.radius, 0, Math.PI * 2);
          context.fill();
        }
      }

      for (let index = 0; index < nodes.length; index += 1) {
        const node = nodes[index];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }

        const bob = Math.sin(time * 0.9 + node.pulseOffset) * 7;
        const autonomousX = Math.sin(time * 0.42 + node.pulseOffset) * 12 * node.depth;
        const autonomousY = Math.cos(time * 0.36 + node.pulseOffset) * 10 * node.depth;
        const parallaxY = scrollOffset * node.depth * 0.26;

        projected[index].x = node.x + autonomousX;
        projected[index].y = wrapY(node.y + bob + autonomousY + parallaxY);
        projected[index].depth = node.depth;

        const cursorDx = pointer.ix - projected[index].x;
        const cursorDy = pointer.iy - projected[index].y;
        const cursorDistance = Math.hypot(cursorDx, cursorDy);
        const cursorRange = 230;

        if (cursorDistance < cursorRange) {
          const attraction = (1 - cursorDistance / cursorRange) * 0.06 * node.depth;
          projected[index].x += cursorDx * attraction;
          projected[index].y += cursorDy * attraction;
        }
      }

      const cursorGlow = context.createRadialGradient(pointer.ix, pointer.iy, 0, pointer.ix, pointer.iy, 170);
      cursorGlow.addColorStop(0, 'rgba(175, 203, 255, 0.12)');
      cursorGlow.addColorStop(1, 'rgba(175, 203, 255, 0)');
      context.fillStyle = cursorGlow;
      context.beginPath();
      context.arc(pointer.ix, pointer.iy, 170, 0, Math.PI * 2);
      context.fill();

      for (let i = 0; i < projected.length; i += 1) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j += 1) {
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance > LINK_DISTANCE) {
            continue;
          }

          const intensity = (1 - distance / LINK_DISTANCE) * 0.42;
          const depthMix = (a.depth + b.depth) * 0.22;
          const alpha = Math.min(0.42, intensity + depthMix * 0.11);

          context.beginPath();
          context.strokeStyle = `rgba(143, 180, 255, ${alpha})`;
          context.lineWidth = 1;
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }

      for (let index = 0; index < projected.length; index += 1) {
        const point = projected[index];
        const node = nodes[index];
        const pulse = 0.45 + (Math.sin(timestamp * 0.0014 + node.pulseOffset) + 1) * 0.3;
        const alpha = Math.min(0.95, 0.35 + pulse * 0.58);

        context.beginPath();
        context.fillStyle = `rgba(175, 203, 255, ${alpha})`;
        context.arc(point.x, point.y, node.radius + point.depth * 0.2, 0, Math.PI * 2);
        context.fill();
      }

      frameId = window.requestAnimationFrame(draw);
    };

    resizeCanvas();
    frameId = window.requestAnimationFrame(draw);

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return <canvas className="background-fx" ref={canvasRef} aria-hidden="true" />;
};

export default BackgroundFX;