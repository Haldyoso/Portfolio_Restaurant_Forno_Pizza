import type { Metadata } from "next";
import Image from "next/image";
import { MenuList } from "@/components/menu-list";
import { OvenMark } from "@/components/brand";
export const metadata: Metadata = {
  title: "Menu",
  description:
    "Desať neapolských pízz, talianske dezerty a nápoje. Prezri si ukážkové menu FORNO a vyber si podľa chuti.",
};
export default function MenuPage() {
  return (
    <main id="main">
      <section className="container page-heading menu-heading">
        <div>
          <p className="eyebrow">POCTIVÉ SUROVINY. DOBRÁ CHUŤ.</p>
          <h1>
            Čo bude
            <br />
            <em>na tvojom stole?</em>
          </h1>
          <p>
            Od prvej Margherity po posledné espresso.
            <br />
            Vyber si niečo, na čo máš práve chuť.
          </p>
        </div>
        <div className="menu-heading-image">
          <Image
            src="/images/pizza-hero.webp"
            alt="Čerstvá pizza Margherita práve vytiahnutá z pece"
            fill
            sizes="(max-width: 760px) 100vw, 40vw"
            preload
          />
          <span className="menu-image-label">
            <OvenMark /> Z našej pece
          </span>
        </div>
      </section>
      <MenuList />
    </main>
  );
}
