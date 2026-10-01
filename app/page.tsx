import Link from "next/link";
import { Branch, Bee, Chevron } from "@/components/Icons";
export default function Home() {
  return (
    <>
      <section className="hello"><h2>Karibu.</h2><p>What would you like to taste today?</p></section>
      <section className="hero">
        <div>
          <h3>RAW<br />HONEY</h3>
          <p>100% PURE &middot; UNPROCESSED</p>
          <Link href="/shop" className="shopnow">SHOP NOW</Link>
        </div>
        <div className="hfig">
          <Branch className="hbranch" />
          <div className="stone" />
          <img src="/nzuki-jar.webp" alt="A jar of Nzuki raw and unprocessed honey" />
        </div>
      </section>
      <div className="sec"><span>Explore our collection</span><Link href="/shop">VIEW ALL</Link></div>
      <section className="circles">
        <Link href="/shop"><span className="circ"><img src="/nzuki-jar-circle.webp" alt="" /></span>Half a kilo</Link>
        <Link href="/shop"><span className="circ"><img src="/nzuki-jar-circle.webp" alt="" /></span>One kilo</Link>
        <Link href="/hives"><span className="circ"><img src="/t-pure.webp" alt="" /></span>The hives</Link>
      </section>
      <Link href="/hives" className="banner">
        <Bee size={30} />
        <span><b>PURE. NATURAL. ORGANIC.</b><small>DISCOVER MORE</small></span>
        <Chevron size={18} />
      </Link>
    </>
  );
}
