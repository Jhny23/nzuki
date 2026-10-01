"use client";
import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";
export type Line = { key: string; name: string; g: number; price: number; qty: number };
type Ctx = { lines: Line[]; add: (l: Omit<Line, "qty">) => void; change: (k: string, d: number) => void; remove: (k: string) => void; clear: () => void; total: number; count: number; toast: string | null };
const C = createContext<Ctx>(null!);
export const useCart = () => useContext(C);
export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [ready, setReady] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const t = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => { try { setLines(JSON.parse(localStorage.getItem("nzuki") || "[]")); } catch {} setReady(true); }, []);
  useEffect(() => { if (ready) try { localStorage.setItem("nzuki", JSON.stringify(lines)); } catch {} }, [lines, ready]);
  const add: Ctx["add"] = (l) => {
    setLines((p) => p.some((x) => x.key === l.key) ? p.map((x) => x.key === l.key ? { ...x, qty: x.qty + 1 } : x) : [...p, { ...l, qty: 1 }]);
    setToast("Added to basket"); clearTimeout(t.current); t.current = setTimeout(() => setToast(null), 1800);
  };
  const change = (k: string, d: number) => setLines((p) => p.map((x) => x.key === k ? { ...x, qty: x.qty + d } : x).filter((x) => x.qty > 0));
  const remove = (k: string) => setLines((p) => p.filter((x) => x.key !== k));
  const total = lines.reduce((a, l) => a + l.price * l.qty, 0);
  const count = lines.reduce((a, l) => a + l.qty, 0);
  return <C.Provider value={{ lines, add, change, remove, clear: () => setLines([]), total, count, toast }}>{children}{toast && <div className="toast" role="status">{toast}</div>}</C.Provider>;
}
