"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./Cart";
import { Menu, Back, Bag, Home, Bee, Phone } from "./Icons";
export function Header() {
  const path = usePathname();
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const home = path === "/";
  return (
    <header className="hdr">
      {home ? <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}><Menu /></button>
        : <Link href={path === "/checkout" ? "/shop" : "/"} className="ib" aria-label="Back"><Back /></Link>}
      <Link href="/" className="wm"><b>NZUKI</b><small>RAW HONEY</small></Link>
      <Link href="/checkout" className="ib bagic" aria-label={`Basket, ${count} items`}><Bag />{count > 0 && <i>{count}</i>}</Link>
      {open && <nav className="menu" onClick={() => setOpen(false)}><Link href="/shop">Shop</Link><Link href="/hives">The hives</Link><Link href="/contact">Contact</Link><Link href="/checkout">Basket</Link></nav>}
    </header>
  );
}
export function TabBar() {
  const path = usePathname();
  const tabs = [["/", "Home", Home], ["/shop", "Shop", Bag], ["/hives", "Hives", Bee], ["/contact", "Contact", Phone]] as const;
  return (
    <nav className="tabs" aria-label="Main">
      {tabs.map(([href, label, Icon]) => <Link key={href} href={href} className={path === href ? "on" : ""}><Icon size={22} />{label}</Link>)}
    </nav>
  );
}
