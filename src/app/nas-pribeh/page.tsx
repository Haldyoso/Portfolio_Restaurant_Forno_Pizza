import type { Metadata } from "next";
import Image from "@/components/site-image";
import { CraftStamp } from "@/components/brand";
import { TextLink } from "@/components/shared";
export const metadata: Metadata = {
  title: "Náš príbeh",
  description:
    "Múka, voda, soľ a čas. Spoznaj koncept FORNO: pomaly kysnuté cesto, poctivé suroviny a otvorená pec.",
};
export default function StoryPage() {
  return (
    <main id="main">
      <section className="container page-heading story-heading">
        <p className="eyebrow">FORNO ZNAMENÁ PEC.</p>
        <h1>
          Za dobrou pizzou
          <br />
          je <em>jednoduchý príbeh.</em>
        </h1>
        <p>
          Žiadne tajné ingrediencie. Len remeslo, trpezlivosť
          <br className="desktop-break" /> a radosť z jedla, ktoré môžeme
          zdieľať.
        </p>
      </section>
      <div className="container story-wide-image">
        <Image
          src="/images/dough.webp"
          alt="Pizzaiolo ručne naťahuje cesto na kamennom pracovnom stole"
          fill
          sizes="100vw"
          preload
        />
        <CraftStamp />
      </div>
      <section className="container section story-intro">
        <p className="eyebrow">MALÁ PIZZERIA. VEĽKÁ LÁSKA K REMESLU.</p>
        <div>
          <h2>
            Niečo dobré
            <br />
            sa začína <em>jednoducho.</em>
          </h2>
          <p>
            Predstav si malý podnik na rohu. Otvorené dvere, vôňu pečeného cesta
            a pec, do ktorej vidíš priamo od stola. Presne taký je FORNO.
          </p>
          <p>
            Náš príbeh stojí na neapolskej pizze: tenký stred, mäkký nadýchaný
            okraj a zopár surovín, ktoré spolu dávajú zmysel. Nepotrebujeme ich
            veľa. Potrebujeme tie správne.
          </p>
        </div>
      </section>
      <section
        className="container craft-chapters"
        aria-label="Ako vzniká naša pizza"
      >
        <article>
          <span className="chapter-number">01 / CESTO</span>
          <h2>
            Čas je
            <br />
            <em>ingrediencia.</em>
          </h2>
          <p>
            Múka, voda, soľ a droždie. Cesto nechávame 48 hodín pomaly
            dozrievať. Potom ho naťahujeme rukami, aby vzduch zostal tam, kde má
            — v okrajoch.
          </p>
        </article>
        <article>
          <span className="chapter-number">02 / SUROVINY</span>
          <h2>
            Menej, ale
            <br />
            <em>poctivejšie.</em>
          </h2>
          <p>
            Sladké paradajky San Marzano, jemná mozzarella fior di latte,
            čerstvá bazalka a dobrý olivový olej. Chute, ktoré sa dopĺňajú bez
            zbytočností.
          </p>
        </article>
        <article>
          <span className="chapter-number">03 / PEC</span>
          <h2>
            Oheň robí
            <br />
            <em>svoje.</em>
          </h2>
          <p>
            Rozohriata pec, približne 450 °C a asi 90 sekúnd. Práve tu cesto
            ožije, okraje sa zdvihnú a vytvoria sa malé opečené bodky. Každá
            pizza je originál.
          </p>
        </article>
      </section>
      <section className="story-preview section">
        <div className="container story-grid">
          <div className="story-image">
            <Image
              src="/images/interior.webp"
              alt="Drevené stoly, stoličky a otvorená pec v útulnej pizzerii"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
            />
          </div>
          <div className="story-copy">
            <p className="eyebrow">ĽUDIA, KTORÍ MAJÚ RADI JEDLO</p>
            <h2>
              Pri peci ruky.
              <br />
              Pri stole <em>úsmev.</em>
            </h2>
            <p>
              Za konceptom FORNO je malý tím: pizzaiolo, ktorý pozná cesto
              dotykom, kuchyňa, ktorá dáva priestor surovinám, a obsluha, s
              ktorou sa cítiš ako doma.
            </p>
            <p>
              Veríme v jednoduchú pohostinnosť. Dobrú pizzu položiť doprostred
              stola a nechať večer plynúť vlastným tempom.
            </p>
            <TextLink href="/menu">Pozri, čo pečieme</TextLink>
            <p className="demo-small">
              Príbeh aj tím sú súčasťou fiktívneho konceptu.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
