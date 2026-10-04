import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/site-link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Hours } from "@/components/shared";
import { CopyEmail } from "@/components/copy-email";
export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Ukážkové kontaktné údaje a otváracie hodiny fiktívnej pizzerie FORNO. Projekt do portfólia.",
};
export default function ContactPage() {
  return (
    <main id="main">
      <section className="container page-heading contact-heading">
        <p className="eyebrow">PRI DOBROM STOLE JE VŽDY MIESTO.</p>
        <h1>
          Zastav sa.
          <br />
          <em>Spomaľ s nami.</em>
        </h1>
        <p>
          Na rýchly obed. Na dlhý večer.
          <br />
          Alebo len na pizzu, na ktorú si celý deň myslel.
        </p>
      </section>
      <section
        className="container contact-grid"
        aria-label="Kontakt a otváracie hodiny"
      >
        <div className="contact-image">
          <Image
            src="/images/interior.webp"
            alt="Príjemný interiér malej talianskej pizzerie s rozohriatou pecou"
            fill
            sizes="(max-width: 760px) 100vw, 50vw"
            preload
          />
          <div className="contact-image-caption">
            <MapPin size={20} aria-hidden="true" />
            <span>
              Kúsok Talianska.
              <br />V našom pomyselnom susedstve.
            </span>
          </div>
        </div>
        <div className="contact-details">
          <div className="demo-notice">
            <span className="small-dot" />
            <p>
              <strong>Ukážková prevádzka</strong>
              <br />
              FORNO je fiktívny projekt do portfólia. Adresa, telefón, e-mail aj
              hodiny nižšie sú ilustračné.
            </p>
          </div>
          <div className="contact-address">
            <span className="eyebrow">KDE BY SI NÁS NAŠIEL</span>
            <h2>
              Pecná 12
              <br />
              811 01 Bratislava
            </h2>
            <p>Fiktívna adresa, bez reálnej prevádzky.</p>
          </div>
          <div className="contact-channels">
            <div>
              <span className="eyebrow">TELEFÓN · UKÁŽKA</span>
              <p>+421 900 000 000</p>
            </div>
            <div>
              <span className="eyebrow">E-MAIL · UKÁŽKA</span>
              <CopyEmail />
            </div>
          </div>
          <div className="contact-hours">
            <h2>Otváracie hodiny</h2>
            <Hours />
          </div>
        </div>
      </section>
      <section className="container contact-bottom section">
        <div>
          <p className="eyebrow">KÝM SA POSADÍŠ</p>
          <h2>
            Najprv si vyber
            <br />
            <em>svoj obľúbený kúsok.</em>
          </h2>
        </div>
        <Link href="/menu" className="button">
          Pozrieť menu <ArrowUpRight size={19} aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
