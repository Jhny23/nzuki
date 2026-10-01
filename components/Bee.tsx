export default function Bee({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden>
      <ellipse cx="11" cy="9" rx="7" ry="4" fill="#FFFBEA" stroke="#3b2a14" strokeWidth="1.4" transform="rotate(-25 11 9)" />
      <ellipse cx="22" cy="8" rx="7" ry="4" fill="#FFFBEA" stroke="#3b2a14" strokeWidth="1.4" transform="rotate(20 22 8)" />
      <ellipse cx="17" cy="21" rx="10" ry="8" fill="#F2B632" stroke="#3b2a14" strokeWidth="1.6" />
      <path d="M13 14v14M18 13v16M23 14v14" stroke="#3b2a14" strokeWidth="3" />
    </svg>
  );
}
