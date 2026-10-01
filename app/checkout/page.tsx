"use client";
import { useState } from "react";
import { useCart } from "@/components/Cart";
import { kes } from "@/lib/products";
export default function Checkout() {
  const { lines, total, clear } = useCart();
  const [f, setF] = useState({ name: "", phone: "", area: "", note: "" });
  const ok = lines.length && f.name && f.phone && f.area;
  const send = () => {
    const items = lines.map((l) => `${l.qty} x ${l.name} ${l.g}g`).join(", ");
    const msg = `Hello Nzuki. Order: ${items}. Total ${kes(total)}. Name: ${f.name}. Phone: ${f.phone}. Delivery area: ${f.area}. ${f.note}`;
    window.open(`https://wa.me/254712122293?text=${encodeURIComponent(msg)}`, "_blank");
    clear();
  };
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value });
  return (
    <section className="checkout">
      <h1>Checkout</h1>
      {lines.length === 0 ? <p>Your basket is empty. Add a jar first.</p> : (<>
        <ul>{lines.map((l) => <li key={l.key}>{l.qty} x {l.name}, {l.g}g <b>{kes(l.qty * l.price)}</b></li>)}</ul>
        <p className="sum">Total <b>{kes(total)}</b> (delivery fee confirmed on WhatsApp)</p>
        <label>Your name<input value={f.name} onChange={set("name")} autoComplete="name" /></label>
        <label>M-Pesa phone number<input value={f.phone} onChange={set("phone")} inputMode="tel" placeholder="07.." autoComplete="tel" /></label>
        <label>Delivery area in Nairobi<input value={f.area} onChange={set("area")} placeholder="e.g. Kilimani" /></label>
        <label>Note for us (optional)<input value={f.note} onChange={set("note")} /></label>
        <button className="btn" disabled={!ok} onClick={send}>Send order on WhatsApp</button>
        <p className="fine">You pay by M-Pesa when the jar arrives. Nothing is charged on this site.</p>
      </>)}
    </section>
  );
}
