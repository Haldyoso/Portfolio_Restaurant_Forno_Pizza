import Link from "@/components/site-link";
export function OvenMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 39V25a18 18 0 0 1 36 0v14H6Z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M13 39V27a11 11 0 0 1 22 0v12M3 43h42M24 3V0M8 9 5 6M40 9l3-3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M22 35c-5-5 5-7 2-13 8 7 9 10 4 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="FORNO — úvod">
      <OvenMark />
      <span>
        <span className="brand-name">
          FORNO<span className="brand-dot">.</span>
        </span>
        <span className="brand-subtitle">PIZZA NAPOLETANA</span>
      </span>
    </Link>
  );
}
export function CraftStamp({
  className = "",
  id = "stamp-circle",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <div
      className={`craft-stamp ${className}`}
      role="img"
      aria-label="Pomaly kysnuté, ručne pripravené"
    >
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <defs>
          <path id={id} d="M60 60m-44 0a44 44 0 1 1 88 0a44 44 0 1 1-88 0" />
        </defs>
        <circle cx="60" cy="60" r="58" fill="currentColor" />
        <text>
          <textPath href={`#${id}`} startOffset="1%">
            POMALY KYSNUTÉ · RUČNE PRIPRAVENÉ ·{" "}
          </textPath>
        </text>
      </svg>
      <OvenMark />
    </div>
  );
}
