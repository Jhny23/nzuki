"use client";
import { Size, kes } from "@/lib/products";
import { useCart } from "./Cart";
export default function SizeCell({ s, i }: { s: Size; i: number }) {
  const { add } = useCart();
  return (
    <button className="cell" style={{ animationDelay: `${i * 0.5}s` }} onClick={() => add({ key: `honey-${s.g}`, name: "Raw honey", g: s.g, price: s.price })}>
      <span className="cin"><strong>{s.label}</strong><small>{kes(s.price)}</small><em>Add to basket</em></span>
    </button>
  );
}
