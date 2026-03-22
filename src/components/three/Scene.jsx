// src/components/three/Scene.jsx
// Pure Canvas 2D animated dumbbell — zero R3F/WebGL dependency issues
import { useEffect, useRef } from 'react';

export default function Scene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let t = 0;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - rect.width / 2) / rect.width;
      mouseY = (e.clientY - rect.top - rect.height / 2) / rect.height;
    };
    window.addEventListener('mousemove', onMouse);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // Draw dumbbell
    const drawDumbbell = (cx, cy, angle, sc) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      ctx.scale(sc, sc);

      const barLen = 180;
      const barR = 8;
      const plates = [
        { x: barLen / 2 + 8,  h: 56, w: 22 },
        { x: barLen / 2 + 30, h: 44, w: 20 },
        { x: barLen / 2 + 50, h: 34, w: 18 },
      ];

      // Bar
      ctx.shadowColor = 'rgba(212,175,55,0.25)';
      ctx.shadowBlur = 18;
      const barG = ctx.createLinearGradient(-barLen / 2, -barR, barLen / 2, barR);
      barG.addColorStop(0, '#222');
      barG.addColorStop(0.45, '#666');
      barG.addColorStop(0.55, '#999');
      barG.addColorStop(1, '#222');
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(-barLen / 2, -barR, barLen, barR * 2, barR);
      } else {
        ctx.rect(-barLen / 2, -barR, barLen, barR * 2);
      }
      ctx.fillStyle = barG;
      ctx.fill();

      // Knurling
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(255,255,255,0.07)';
      ctx.lineWidth = 1;
      for (let i = -50; i <= 50; i += 10) {
        ctx.beginPath();
        ctx.moveTo(i, -barR + 2);
        ctx.lineTo(i, barR - 2);
        ctx.stroke();
      }

      // Plates — both sides
      [-1, 1].forEach((side) => {
        plates.forEach(({ x, h, w }) => {
          const px = side * x;
          const pG = ctx.createLinearGradient(px - w / 2, -h / 2, px + w / 2, h / 2);
          pG.addColorStop(0, '#B8962E');
          pG.addColorStop(0.4, '#D4AF37');
          pG.addColorStop(0.7, '#FFD700');
          pG.addColorStop(1, '#B8962E');

          ctx.shadowColor = 'rgba(212,175,55,0.5)';
          ctx.shadowBlur = 14;
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(px - w / 2, -h / 2, w, h, 3);
          } else {
            ctx.rect(px - w / 2, -h / 2, w, h);
          }
          ctx.fillStyle = pG;
          ctx.fill();

          // Highlight strip
          ctx.shadowBlur = 0;
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(px - w / 2 + 2, -h / 2 + 4, 3, h - 8, 2);
          } else {
            ctx.rect(px - w / 2 + 2, -h / 2 + 4, 3, h - 8);
          }
          ctx.fillStyle = 'rgba(255,255,255,0.18)';
          ctx.fill();

          // Centre hole
          ctx.beginPath();
          ctx.arc(px, 0, barR + 2, 0, Math.PI * 2);
          ctx.fillStyle = '#111';
          ctx.fill();
        });

        // End cap
        const capX = side * (plates[2].x + 28);
        const capG = ctx.createRadialGradient(capX - 3, -3, 0, capX, 0, 15);
        capG.addColorStop(0, '#555');
        capG.addColorStop(1, '#111');
        ctx.beginPath();
        ctx.arc(capX, 0, 13, 0, Math.PI * 2);
        ctx.fillStyle = capG;
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      ctx.restore();
    };

    // Orbit ring
    const drawRing = (cx, cy, rx, ry, rot, alpha) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.beginPath();
      ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(212,175,55,${alpha})`;
      ctx.lineWidth = 1.2;
      ctx.setLineDash([6, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    };

    // Glow dot
    const dot = (x, y, r, a) => {
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, `rgba(212,175,55,${a})`);
      g.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    };

    const pts = Array.from({ length: 22 }, (_, i) => ({
      a: (i / 22) * Math.PI * 2,
      r: 110 + Math.random() * 90,
      spd: 0.003 + Math.random() * 0.005,
      sz: 2 + Math.random() * 4,
      ph: Math.random() * Math.PI * 2,
    }));

    const frame = () => {
      t += 0.013;
      const w = W(), h = H();
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2 + mouseX * 18;
      const cy = h / 2 + mouseY * 12;

      // Background glow
      dot(cx, cy, 220, 0.07);

      // Orbit rings
      drawRing(cx, cy, 195, 58, t * 0.22, 0.18);
      drawRing(cx, cy, 235, 75, -t * 0.16 + 1, 0.11);
      drawRing(cx, cy, 155, 42, t * 0.32 + 0.8, 0.14);

      // Orbiting particles
      pts.forEach((p) => {
        p.a += p.spd;
        const px = cx + Math.cos(p.a) * p.r;
        const py = cy + Math.sin(p.a) * p.r * 0.34;
        dot(px, py, p.sz, 0.18 + 0.18 * Math.sin(t * 2 + p.ph));
      });

      // Floating dumbbell
      const floatY = Math.sin(t * 0.65) * 11;
      const tilt = Math.sin(t * 0.48) * 0.07 + mouseX * 0.13;
      const sc = 0.86 + 0.035 * Math.sin(t * 0.42);

      drawDumbbell(cx, cy + floatY, tilt, sc);

      // Energy sparks near plates
      for (let i = 0; i < 4; i++) {
        const a = t * 3.5 + (i / 4) * Math.PI * 2;
        const sr = 66 * sc;
        const sx = cx + Math.cos(tilt) * 195 * sc + Math.cos(a) * 6;
        const sy = cy + floatY + Math.sin(a) * sr;
        dot(sx, sy, 1.5 + Math.abs(Math.sin(t * 4 + i)) * 2.5, 0.5);
      }

      raf = requestAnimationFrame(frame);
    };

    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  );
}
