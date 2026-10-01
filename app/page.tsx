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
        <img className="photo" src="/nzuki-jars.jpg" alt="Two jars of Nzuki raw and unprocessed honey" />
      </section>
      <section className="pick" aria-label="Choose your jar">
        <h2>Choose your jar</h2>
        <div className="row">{sizes.map((s, i) => <SizeCell key={s.g} s={s} i={i} />)}</div>
      </section>
      <section className="note">
        <h2>How ordering works</h2>
        <p>Fill your basket, send the order on WhatsApp, and we confirm it with you. The jar is delivered to your door and you pay by M-Pesa when it arrives.</p>
      </section>
    </>
  );
}
