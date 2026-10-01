"use client";
import { useState } from "react";
import { sizes, kes } from "@/lib/products";
import { useCart } from "./Cart";
export default function Buy() {
  const [i, setI] = useState(0);
  const { add } = useCart();
  const s = sizes[i];
  return (
    <div className="buybox">
      <div role="radiogroup" aria-label="Jar size" className="opts">
        {sizes.map((x, n) => (
          <button key={x.g} role="radio" aria-checked={n === i} className={n === i ? "on" : ""} onClick={() => setI(n)}>
            <span>{x.label}</span><b>{kes(x.price)}</b>
          </button>
        ))}
      </div>
      <button className="add" onClick={() => add({ key: `honey-${s.g}`, name: "Raw honey", g: s.g, price: s.price })}>Add to basket</button>
    </div>
  );
}
