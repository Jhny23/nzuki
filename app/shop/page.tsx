import ShopList from "@/components/ShopList";
import { Branch } from "@/components/Icons";
export default function Shop() {
  return (
    <section className="ph">
      <Branch className="pbranch" />
      <h1>RAW HONEY</h1>
      <p>Pure. Natural. Unprocessed.<br />Crafted straight from the hives, extracted specifically for you.</p>
      <ShopList />
    </section>
  );
}
