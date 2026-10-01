"use client";
import { useState } from "react";
import { sizes, kes } from "@/lib/products";
import { useCart } from "./Cart";
export default function Buy() {
  const [i, setI] = useState(0);
  const { add } = useCart();
  const s = sizes[i];
  return (
    <div className="tiles" role="radiogroup" aria-label="Jar size">
      {sizes.map((x, n) => (
        <button key={x.g} role="radio" aria-checked={n === i} className={`tile${n === i ? " on" : ""}`} onClick={() => setI(n)}>
          <b>{kes(x.price)}</b><small>{x.label}, {x.g >= 1000 ? "1 kg" : x.g + " g"}</small>
        </button>
      ))}
      <button className="add" onClick={() => add({ key: `honey-${s.g}`, name: "Raw honey", g: s.g, price: s.price })}>Add to basket<small>{kes(s.price)}</small></button>
    </div>
  );
}
