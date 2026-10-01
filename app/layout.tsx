import type { Metadata } from "next";
import Link from "next/link";
import { Alfa_Slab_One, Vollkorn } from "next/font/google";
import { CartProvider, CartButton } from "@/components/Cart";
import "./globals.css";
const slab = Alfa_Slab_One({ weight: "400", subsets: ["latin"], variable: "--slab" });
const body = Vollkorn({ subsets: ["latin"], variable: "--body" });
export const metadata: Metadata = { title: "Mzinga Honey", description: "Raw honey from small apiaries in Kenya, delivered in Nairobi." };
const Bee = () => (<svg width="34" height="34" viewBox="0 0 34 34" aria-hidden><ellipse cx="11" cy="9" rx="7" ry="4" fill="#fff8" stroke="#2B1A0C" strokeWidth="1.5" transform="rotate(-25 11 9)" /><ellipse cx="22" cy="8" rx="7" ry="4" fill="#fff8" stroke="#2B1A0C" strokeWidth="1.5" transform="rotate(20 22 8)" /><ellipse cx="17" cy="21" rx="10" ry="8" fill="#F2B632" stroke="#2B1A0C" strokeWidth="2" /><path d="M13 14v14M18 13v16M23 14v14" stroke="#2B1A0C" strokeWidth="3" /></svg>);
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${slab.variable} ${body.variable}`}>
      <body>
        <CartProvider>
          <header className="top"><Link href="/" className="brand"><Bee />Mzinga</Link><CartButton /></header>
          <main>{children}</main>
          <footer className="foot"><p>Mzinga Honey. Poured in small batches, delivered in Nairobi. Order on WhatsApp +254 700 000 000.</p></footer>
        </CartProvider>
      </body>
    </html>
  );
}
