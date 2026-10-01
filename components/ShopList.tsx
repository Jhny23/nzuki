"use client";
import { useState } from "react";
import { sizes, kes } from "@/lib/products";
import { useCart } from "./Cart";
export default function ShopList() {
  const [f, setF] = useState<number | 0>(0);
  const { add } = useCart();
  const chips: [number, string][] = [[0, "All"], [500, "500 g"], [1000, "1 kg"]];
  return (
    <>
      <div className="chips" role="tablist">{chips.map(([v, l]) => <button key={v} role="tab" aria-selected={f === v} className={`chip${f === v ? " on" : ""}`} onClick={() => setF(v)}>{l}</button>)}</div>
      {sizes.filter((s) => !f || s.g === f).map((s) => (
        <div className="prow" key={s.g}>
          <div className="pth"><img src="/nzuki-jar.webp" alt="" style={{ height: s.g >= 1000 ? "94%" : "80%" }} /></div>
          <div><h3>Raw honey</h3><small>{s.label}, {s.g >= 1000 ? "1 kg" : s.g + " g"}</small><b>{kes(s.price)}</b></div>
          <button className="plus" aria-label={`Add ${s.g} grams to basket`} onClick={() => add({ key: `honey-${s.g}`, name: "Raw honey", g: s.g, price: s.price })}>+</button>
        </div>
      ))}
    </>
  );
}
