'use client';

import { useGlitchCursor } from "@/components/hooks/useGlitchCursor";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  useGlitchCursor();
  return children;
}