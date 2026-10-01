"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import Link from "next/link";
import { kes } from "@/lib/products";
export type Line = { key: string; name: string; g: number; price: number; qty: number };
type Ctx = { lines: Line[]; add: (l: Omit<Line, "qty">) => void; change: (k: string, d: number) => void; clear: () => void; total: number; count: number; open: boolean; setOpen: (b: boolean) => void };
const C = createContext<Ctx>(null!);
export const useCart = () => useContext(C);
export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => { try { setLines(JSON.parse(localStorage.getItem("nzuki") || "[]")); } catch {} setReady(true); }, []);
  useEffect(() => { if (ready) try { localStorage.setItem("nzuki", JSON.stringify(lines)); } catch {} }, [lines, ready]);
  const add: Ctx["add"] = (l) => { setLines((p) => p.some((x) => x.key === l.key) ? p.map((x) => x.key === l.key ? { ...x, qty: x.qty + 1 } : x) : [...p, { ...l, qty: 1 }]); setOpen(true); };
  const change = (k: string, d: number) => setLines((p) => p.map((x) => x.key === k ? { ...x, qty: x.qty + d } : x).filter((x) => x.qty > 0));
  const total = lines.reduce((a, l) => a + l.price * l.qty, 0);
  const count = lines.reduce((a, l) => a + l.qty, 0);
  return <C.Provider value={{ lines, add, change, clear: () => setLines([]), total, count, open, setOpen }}>{children}<Drawer /></C.Provider>;
}
export function CartButton() {
  const { count, setOpen } = useCart();
  return <button className="bag" onClick={() => setOpen(true)} aria-label={`Open basket, ${count} items`}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8V6a3 3 0 016 0v2" /></svg><span>Basket</span>{count > 0 && <b>{count}</b>}</button>;
}
function Drawer() {
  const { lines, change, total, open, setOpen } = useCart();
  if (!open) return null;
  return (
    <div className="veil" onClick={() => setOpen(false)}>
      <aside className="drawer" role="dialog" aria-label="Basket" onClick={(e) => e.stopPropagation()}>
        <button className="x" onClick={() => setOpen(false)}>Close</button>
        <h2>Your basket</h2>
        {lines.length === 0 ? <p>Nothing in here yet. Pick a jar from the comb.</p> : (<>
          {lines.map((l) => (
            <div className="line" key={l.key}>
              <span>{l.name}, {l.g}g<br /><small>{kes(l.price)} each</small></span>
              <span className="qty"><button onClick={() => change(l.key, -1)} aria-label="One less">-</button>{l.qty}<button onClick={() => change(l.key, 1)} aria-label="One more">+</button></span>
            </div>))}
          <p className="sum">Total <b>{kes(total)}</b></p>
          <Link className="add" href="/checkout" onClick={() => setOpen(false)}>Go to checkout</Link>
        </>)}
      </aside>
    </div>
  );
}
