import Buy from "@/components/Buy";
import Bee, { Badge } from "@/components/Bee";
export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Asali safi &middot; 100% pure raw honey</p>
        <h1 className="mark">NZUKI</h1>
        <img className="jar" src="/nzuki-jar.webp" alt="A jar of Nzuki raw and unprocessed honey" />
        <Bee size={34} className="flyer" />
        <Badge />
        <p className="cl">Straight from the hive.<br />Extracted specifically for you.</p>
        <div className="cr">
          <p>Half a kilo, KES 1,000.<br />One kilo, KES 1,900.</p>
          <a className="order" href="#honey">Order a jar</a>
        </div>
      </section>
      <section id="honey" className="buy">
        <h2>Pick your jar</h2>
        <div>
          <p>One honey, just as the bees made it. Choose your size, send us the order on WhatsApp, and pay by M-Pesa when it reaches your door.</p>
          <Buy />
        </div>
      </section>
      <section id="jar" className="jarsec">
        <img src="/nzuki-jars.webp" alt="Two jars of Nzuki honey beside a honey dipper and fresh honeycomb" />
        <div>
          <h2>Crafted straight from the hives</h2>
          <p>Pure. Natural. Organic. Every jar is extracted specifically for you.</p>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2>Karibu. Let&rsquo;s get you a jar.</h2>
        <p>Message us on WhatsApp and we&rsquo;ll confirm your order.</p>
        <a href="https://wa.me/254712122293" className="wa">WhatsApp 0712 122 293</a>
      </section>
    </>
  );
}
