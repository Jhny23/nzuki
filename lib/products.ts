export type Size = { g: number; price: number; label: string };
export const sizes: Size[] = [
  { g: 500, price: 1000, label: "Half a kilo" },
  { g: 1000, price: 1900, label: "One kilo" },
];
export const kes = (n: number) => "KES " + n.toLocaleString("en-KE");
