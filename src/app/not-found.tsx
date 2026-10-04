import Link from "@/components/site-link";
import { OvenMark } from "@/components/brand";
export default function NotFound() {
  return (
    <main id="main" className="container not-found">
      <OvenMark />
      <p className="eyebrow">404 / TENTO KÚSOK SA NENAŠIEL</p>
      <h1>
        Asi sme
        <br />
        <em>odbočili.</em>
      </h1>
      <p>Táto stránka tu nie je. Dobrá pizza je však len o klik ďalej.</p>
      <Link className="button" href="/menu">
        Späť k menu
      </Link>
    </main>
  );
}
