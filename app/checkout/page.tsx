"use client";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/Cart";
import { kes } from "@/lib/products";
import { Trash, Chevron, Lock } from "@/components/Icons";
export default function Checkout() {
  const { lines, total, change, remove, clear } = useCart();
  const [f, setF] = useState({ name: "", phone: "", area: "" });
  const [sent, setSent] = useState(false);
  const ok = lines.length > 0 && f.name && f.phone && f.area;
  const place = () => {
    const items = lines.map((l) => `${l.qty} x ${l.name} ${l.g >= 1000 ? "1kg" : l.g + "g"}`).join(", ");
    const msg = `Hello Nzuki. Order: ${items}. Total ${kes(total)}. Name: ${f.name}. Phone: ${f.phone}. Delivery area: ${f.area}.`;
    window.open(`https://wa.me/254712122293?text=${encodeURIComponent(msg)}`, "_blank");
    clear(); setSent(true);
  };
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) => setF({ ...f, [k]: e.target.value });
  if (sent) return <section className="ph"><h1>THANK YOU</h1><p>Your order is waiting on WhatsApp. Send it and we will confirm with you.</p><Link href="/shop" className="cta">BACK TO SHOP</Link></section>;
  if (!lines.length) return <section className="ph"><h1>CHECKOUT</h1><p>Your basket is empty.</p><Link href="/shop" className="cta">SHOP RAW HONEY</Link></section>;
  return (
    <section className="ph">
      <h1>CHECKOUT</h1>
      <div className="citems">
        {lines.map((l) => (
          <div className="ci" key={l.key}>
            <div className="pth s"><img src="/nzuki-jar.webp" alt="" style={{ height: l.g >= 1000 ? "94%" : "80%" }} /></div>
            <div><h3>Raw honey</h3><small>{l.g >= 1000 ? "1 kg" : l.g + " g"}</small><b>{kes(l.price)}</b></div>
            <div className="step"><button onClick={() => change(l.key, -1)} aria-label="One less">&minus;</button><span>{l.qty}</span><button onClick={() => change(l.key, 1)} aria-label="One more">+</button><button className="trash" onClick={() => remove(l.key)} aria-label="Remove"><Trash size={18} /></button></div>
          </div>
        ))}
      </div>
      <dl className="sums"><div><dt>SUBTOTAL</dt><dd>{kes(total)}</dd></div><div><dt>DELIVERY</dt><dd>Confirmed on WhatsApp</dd></div><div className="tot"><dt>TOTAL</dt><dd>{kes(total)}</dd></div></dl>
      <h4>DELIVERY ADDRESS</h4>
      <div className="fields">
        <input value={f.name} onChange={set("name")} placeholder="Your name" autoComplete="name" aria-label="Your name" />
        <input value={f.phone} onChange={set("phone")} placeholder="M-Pesa phone number, 07.." inputMode="tel" autoComplete="tel" aria-label="Phone number" />
        <input value={f.area} onChange={set("area")} placeholder="Delivery area in Nairobi, e.g. Kilimani" aria-label="Delivery area" />
      </div>
      <h4>PAYMENT METHOD</h4>
      <div className="pay"><b>M-PESA</b><span>Pay when it arrives</span><Chevron size={18} /></div>
      <button className="cta" disabled={!ok} onClick={place}>PLACE ORDER</button>
      <p className="secure"><Lock size={14} /> PAY ON DELIVERY &middot; NOTHING CHARGED ONLINE</p>
    </section>
  );
}
