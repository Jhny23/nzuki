export type Size = { g: number; price: number };
export type Honey = { slug: string; name: string; source: string; notes: string; color: string; sizes: Size[] };
const s = (a: number, b: number, c: number): Size[] => [{ g: 250, price: a }, { g: 500, price: b }, { g: 1000, price: c }];
export const products: Honey[] = [
  { slug: "wildflower", name: "Wildflower", source: "Mixed bloom, Kakamega forest edge", notes: "Round and floral. The everyday jar for tea and bread.", color: "#E0A526", sizes: s(450, 850, 1600) },
  { slug: "acacia", name: "Acacia", source: "Baringo thorn trees", notes: "Pale, light and slow to set. Good in coffee.", color: "#F0CB5A", sizes: s(500, 950, 1800) },
  { slug: "blackwood", name: "Blackwood", source: "Mount Kenya foothills", notes: "Dark and malty with a smoky finish. Good on porridge.", color: "#9A5A14", sizes: s(550, 1050, 2000) },
  { slug: "comb", name: "Raw comb", source: "Taken from the frame, unheated", notes: "A square of wax-sealed comb. Chew the wax, it is part of it.", color: "#D89A1E", sizes: [{ g: 250, price: 700 }, { g: 500, price: 1300 }] },
  { slug: "creamed", name: "Creamed", source: "Wildflower, whipped to spread", notes: "Thick like butter. Does not drip, so children prefer it.", color: "#EBD08A", sizes: s(500, 950, 1800) },
];
export const kes = (n: number) => "KES " + n.toLocaleString("en-KE");
