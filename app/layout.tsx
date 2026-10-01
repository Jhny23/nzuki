import type { Metadata } from "next";
import Link from "next/link";
import { Jost } from "next/font/google";
import { CartProvider, CartButton } from "@/components/Cart";
import "./globals.css";
const jost = Jost({ subsets: ["latin"], variable: "--font" });
export const metadata: Metadata = { title: "Nzuki | 100% pure raw & unprocessed honey", description: "100% pure raw and unprocessed honey, delivered in Nairobi." };
const Bee = () => (<svg width="30" height="30" viewBox="0 0 34 34" aria-hidden><ellipse cx="11" cy="9" rx="7" ry="4" fill="none" stroke="#1b1109" strokeWidth="1.4" transform="rotate(-25 11 9)" /><ellipse cx="22" cy="8" rx="7" ry="4" fill="none" stroke="#1b1109" strokeWidth="1.4" transform="rotate(20 22 8)" /><ellipse cx="17" cy="21" rx="10" ry="8" fill="#E8A21A" /><path d="M13 14v14M18 13v16M23 14v14" stroke="#1b1109" strokeWidth="3" /></svg>);
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jost.variable}>
      <body>
        <CartProvider>
          <header className="top">
            <Link href="/" className="logo"><Bee />NZUKI</Link>
            <nav aria-label="Main"><a href="/#honey">Our honey</a><a href="/#jar">The jar</a><a href="/#contact">Contact</a></nav>
            <div className="right"><a className="phone" href="tel:+254712122293">0712 122 293</a><CartButton /></div>
          </header>
          <main>{children}</main>
          <footer className="foot">Nzuki. 100% pure raw &amp; unprocessed honey. Nairobi, Kenya.</footer>
        </CartProvider>
      </body>
    </html>
  );
}
