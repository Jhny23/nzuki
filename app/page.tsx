import { sizes } from "@/lib/products";
import SizeCell from "@/components/SizeCell";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>100% pure raw &amp; unprocessed honey.</h1>
          <p>Crafted straight from the hive. Pure, natural, organic. Extracted specifically for you, and delivered in Nairobi.</p>
        </div>
        <div className="jarhex"><img src="/nzuki-jar.webp" alt="A jar of Nzuki raw and unprocessed honey" /></div>
      </section>
      <section className="pick" aria-label="Choose your jar">
        <h2>Choose your jar</h2>
        <div className="row">{sizes.map((s, i) => <SizeCell key={s.g} s={s} i={i} />)}</div>
      </section>
      <figure className="scene">
        <img src="/nzuki-jars.webp" alt="Two jars of Nzuki honey beside a honey dipper and fresh honeycomb" />
        <figcaption>Crafted straight from the hives. Pure. Natural. Organic.</figcaption>
      </figure>
      <section className="note">
        <h2>How ordering works</h2>
        <p>Fill your basket, send the order on WhatsApp, and we confirm it with you. The jar is delivered to your door and you pay by M-Pesa when it arrives.</p>
      </section>
    </>
  );
}
