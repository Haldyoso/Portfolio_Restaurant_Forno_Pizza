import Link from "@/components/site-link";
import { ArrowUpRight } from "lucide-react";
import { OvenMark } from "./brand";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="eyebrow">DOBRÉ JEDLO SPÁJA.</span>
            <h2>
              Miesto pri stole.
              <br />
              <em>Aj pre teba.</em>
            </h2>
          </div>
          <Link href="/kontakt" className="button button-cream">
            Nájdi nás <ArrowUpRight size={19} aria-hidden="true" />
          </Link>
        </div>
        <div className="footer-main">
          <div className="footer-wordmark">
            FORNO<span>.</span>
          </div>
          <div>
            <p className="footer-label">TROCHU NEAPOLA</p>
            <p>
              Pizza, oheň a dobrá spoločnosť.
              <br />
              Nič viac netreba.
            </p>
          </div>
          <nav aria-label="Navigácia v pätičke">
            <Link href="/menu">Menu</Link>
            <Link href="/nas-pribeh">Náš príbeh</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>
          <OvenMark className="footer-oven" />
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} FORNO — pizza napoletana</p>
          <p>Fiktívny projekt do portfólia. S chuťou vytvorený.</p>
          <a href="#top" className="back-to-top">
            Späť hore <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
