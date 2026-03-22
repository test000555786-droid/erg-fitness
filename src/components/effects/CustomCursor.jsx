// src/components/effects/CustomCursor.jsx
import { useCursor } from '@/hooks/useCursor';

export default function CustomCursor() {
  const { dotRef, ringRef } = useCursor();

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
