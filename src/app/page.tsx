import Image from "next/image";
import Link from "@/components/site-link";
import { ArrowDown, ArrowUpRight, Flame, Wheat, Heart } from "lucide-react";
import { CraftStamp } from "@/components/brand";
import { Hours, TextLink } from "@/components/shared";
import { formatPrice, menu } from "@/lib/menu";
export default function Home() {
  const favorites = [menu[0], menu[2], menu[9]];
  return (
    <main id="main">
      <section className="container hero" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-dot" /> KÚSOK NEAPOLA. VEĽA SRDCA.
          </p>
          <h1 id="hero-heading">
            Z pece.
            <br />
            <em>Od srdca.</em>
          </h1>
          <p className="hero-description">
            Nadýchané okraje, poctivé suroviny a oheň.
            <br className="desktop-break" /> Pizza, kvôli ktorej sa oplatí
            spomaliť.
          </p>
          <div className="hero-actions">
            <Link href="/menu" className="button">
              Pozrieť menu <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
            <Link href="/kontakt" className="button button-outline">
              Kontakt <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
          <a href="#oblubene" className="hero-scroll">
            <span className="scroll-circle">
              <ArrowDown size={16} aria-hidden="true" />
            </span>
            Dobré veci potrebujú čas.
          </a>
        </div>
        <div className="hero-image">
          <Image
            src="/images/pizza-hero.webp"
            alt="Margherita s nadýchaným opečeným okrajom, mozzarellou a čerstvou bazalkou"
            fill
            sizes="(max-width: 760px) 100vw, 58vw"
            preload
          />
          <CraftStamp />
          <span className="image-caption">
            JEDNODUCHÁ. POCTIVÁ. NAPOLETANA.
          </span>
        </div>
      </section>
      <div className="container craft-strip">
        <div>
          <Wheat size={24} strokeWidth={1.4} aria-hidden="true" />
          <p>
            <strong>48 hodín</strong>
            <span>Nechávame cesto dozrieť.</span>
          </p>
        </div>
        <div>
          <Flame size={24} strokeWidth={1.4} aria-hidden="true" />
          <p>
            <strong>450 °C</strong>
            <span>Tu sa začína tá pravá chuť.</span>
          </p>
        </div>
        <div>
          <Heart size={24} strokeWidth={1.4} aria-hidden="true" />
          <p>
            <strong>100 % poctivo</strong>
            <span>Ručne. Každý jeden deň.</span>
          </p>
        </div>
      </div>
      <section
        className="container section favorites"
        id="oblubene"
        aria-labelledby="favorites-heading"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">ZAČNI NIEČÍM DOBRÝM</p>
            <h2 id="favorites-heading">
              Tri dobré <em>dôvody.</em>
            </h2>
          </div>
          <TextLink href="/menu">Celé menu</TextLink>
        </div>
        <div className="favorites-grid">
          {favorites.map((pizza, index) => (
            <article key={pizza.id} className="pizza-feature">
              <Link
                href={`/menu#${pizza.id}`}
                className="pizza-feature-image"
                aria-label={`Pozrieť ${pizza.name} v menu`}
              >
                <Image
                  src={`/images/pizza-${pizza.id}.webp`}
                  alt={
                    index === 0
                      ? "Pizza Margherita s bazalkou"
                      : index === 1
                        ? "Pizza Diavola s pikantnou salámou"
                        : "Pizza s burratou, cherry paradajkami a bazalkou"
                  }
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <span className="pizza-index">0{index + 1}</span>
                <span className="image-link-arrow">
                  <ArrowUpRight size={22} aria-hidden="true" />
                </span>
              </Link>
              <div className="pizza-feature-title">
                <h3>{pizza.name}</h3>
                <span>{formatPrice(pizza.price)}</span>
              </div>
              <p>{pizza.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="story-preview section"
        aria-labelledby="story-heading"
      >
        <div className="container story-grid">
          <div className="story-image">
            <Image
              src="/images/dough.webp"
              alt="Ruky pizzaiola naťahujú múkou poprášené pizza cesto"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <span className="photo-note">Všetko sa začína cestom.</span>
          </div>
          <div className="story-copy">
            <p className="eyebrow">MÁLO SUROVÍN. ŽIADNE SKRATKY.</p>
            <h2 id="story-heading">
              Dobrá pizza
              <br />
              sa nedá <em>uponáhľať.</em>
            </h2>
            <p>
              Múka, voda, soľ a čas. Naše cesto odpočíva 48 hodín, aby bolo
              ľahké, jemné a plné chuti. Potom už stačí pár poctivých surovín a
              horúca pec.
            </p>
            <p>
              FORNO je malý kúsok Talianska. Miesto, kde je vidieť do kuchyne a
              kde sa pri jednom stole stretnú veľké aj malé chute.
            </p>
            <TextLink href="/nas-pribeh">Spoznaj náš príbeh</TextLink>
          </div>
        </div>
      </section>
      <div className="manifesto" aria-hidden="true">
        <span>Dobré cesto.</span>
        <span className="manifesto-star">✳</span>
        <span>Horúca pec.</span>
        <span className="manifesto-star">✳</span>
        <span>
          <em>La dolce pizza.</em>
        </span>
        <span className="manifesto-star">✳</span>
      </div>
      <section
        className="container section visit"
        aria-labelledby="visit-heading"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">PRÍĎ SI NA CHVÍĽU SADNÚŤ</p>
            <h2 id="visit-heading">
              Teplo z pece.
              <br />
              <em>Pohoda pri stole.</em>
            </h2>
          </div>
          <p className="heading-aside">
            Vôňa čerstvej pizze, rozhovory
            <br />a ešte jeden kúsok. Benvenuti.
          </p>
        </div>
        <div className="visit-grid">
          <div className="visit-image">
            <Image
              src="/images/interior.webp"
              alt="Útulný interiér pizzerie s drevenými stolmi a tehlovou pecou"
              fill
              sizes="(max-width: 760px) 100vw, 65vw"
            />
          </div>
          <div className="visit-info">
            <span className="eyebrow">KEDY SA STRETNEME</span>
            <h3>
              Dvere otvorené.
              <br />
              Pec rozohriata.
            </h3>
            <Hours />
            <TextLink href="/kontakt">Všetky kontaktné údaje</TextLink>
            <p className="demo-small">Ukážková prevádzka a otváracie hodiny.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
