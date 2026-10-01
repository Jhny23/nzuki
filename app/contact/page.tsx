import { Phone } from "@/components/Icons";
export default function Contact() {
  return (
    <section className="ph">
      <h1>CONTACT</h1>
      <p>Message us on WhatsApp and we will confirm your order.</p>
      <a className="cta" href="https://wa.me/254712122293">WHATSAPP 0712 122 293</a>
      <a className="callrow" href="tel:+254712122293"><Phone size={20} /><span>Call 0712 122 293</span></a>
      <p className="note">Nairobi, Kenya</p>
    </section>
  );
}
