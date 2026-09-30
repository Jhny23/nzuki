"use client";
import { useState } from "react";
import { Honey, kes } from "@/lib/products";
import { useCart } from "./Cart";
export default function AddPanel({ h }: { h: Honey }) {
  const [i, setI] = useState(h.sizes.length > 1 ? 1 : 0);
  const { add } = useCart();
  const z = h.sizes[i];
  return (
    <div>
      <div role="radiogroup" aria-label="Jar size" className="sizes">
        {h.sizes.map((x, n) => <button key={x.g} role="radio" aria-checked={n === i} className={n === i ? "on" : ""} onClick={() => setI(n)}>{x.g >= 1000 ? "1 kg" : x.g + " g"}<br /><small>{kes(x.price)}</small></button>)}
      </div>
      <button className="btn" onClick={() => add({ key: `${h.slug}-${z.g}`, name: h.name, g: z.g, price: z.price })}>Add {z.g}g jar for {kes(z.price)}</button>
    </div>
  );
}
