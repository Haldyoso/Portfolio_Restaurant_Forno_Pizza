"use client";
import { useEffect, useState } from "react";
import { Leaf, ArrowDown } from "lucide-react";
import { Category, formatPrice, menu } from "@/lib/menu";
const categories: { id: Category; name: string; count: string }[] = [
  { id: "pizza", name: "Pizza", count: "10" },
  { id: "dezerty", name: "Dezerty", count: "03" },
  { id: "napoje", name: "Nápoje", count: "06" },
];
export function MenuList() {
  const [category, setCategory] = useState<Category>("pizza");
  const [vegetarian, setVegetarian] = useState(false);
  const [highlight, setHighlight] = useState("");
  const items = menu.filter(
    (item) =>
      item.category === category &&
      (category !== "pizza" || !vegetarian || item.vegetarian),
  );
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (menu.some((item) => item.id === id)) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "center" });
        setHighlight(id);
      });
    }
  }, []);
  return (
    <section className="container menu-section" aria-label="Jedálny lístok">
      <div className="menu-controls">
        <div
          className="category-buttons"
          role="group"
          aria-label="Kategória menu"
        >
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={category === item.id}
              aria-controls="menu-items"
              onClick={() => {
                setCategory(item.id);
                setHighlight("");
              }}
            >
              {item.name}
              <sup>{item.count}</sup>
            </button>
          ))}
        </div>
        {category === "pizza" && (
          <label className="vegetarian-toggle">
            <input
              type="checkbox"
              checked={vegetarian}
              onChange={(event) => setVegetarian(event.target.checked)}
            />
            <Leaf size={17} aria-hidden="true" />
            <span>Iba vegetariánske</span>
          </label>
        )}
      </div>
      <div className="menu-meta">
        <p>
          {category === "pizza"
            ? "Všetky pizze majú približne 32 cm. Každá trochu iná, každá ručne pripravená."
            : category === "dezerty"
              ? "Na niečo sladké sa miesto vždy nájde."
              : "Niečo svieže, niečo talianske. A dobré espresso na záver."}
        </p>
        <span aria-live="polite" aria-atomic="true">
          {items.length}{" "}
          {category === "pizza"
            ? items.length === 10
              ? "pízz"
              : "vegetariánskych pízz"
            : category === "dezerty"
              ? "dezerty"
              : "nápojov"}
        </span>
      </div>
      <div className="menu-items" id="menu-items">
        {items.map((item, index) => (
          <article
            id={item.id}
            key={item.id}
            className={`menu-item ${highlight === item.id ? "menu-item-highlight" : ""}`}
          >
            <span className="menu-item-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="menu-item-copy">
              <div className="menu-item-title">
                <h2>{item.name}</h2>
                {item.vegetarian && (
                  <Leaf
                    className="vegetarian-icon"
                    size={17}
                    aria-label="Vegetariánska pizza"
                  />
                )}
              </div>
              <p>{item.description}</p>
              <div className="menu-item-details">
                <span>
                  Alergény:{" "}
                  {item.allergens.length
                    ? item.allergens.join(", ")
                    : "bez uvedených alergénov"}
                </span>
                {item.note && <span className="menu-note">{item.note}</span>}
              </div>
            </div>
            <span className="menu-price">{formatPrice(item.price)}</span>
          </article>
        ))}
      </div>
      <div className="allergen-info">
        <h3>
          Dobré vedieť <ArrowDown size={16} aria-hidden="true" />
        </h3>
        <p>
          Ukážkové alergény: <strong>1</strong> obilniny obsahujúce lepok ·{" "}
          <strong>3</strong> vajcia · <strong>4</strong> ryby ·{" "}
          <strong>7</strong> mlieko · <strong>8</strong> orechy (pistácie) ·{" "}
          <strong>12</strong> oxid siričitý a siričitany.
        </p>
        <p>
          Toto je ukážkový jedálny lístok fiktívnej pizzerie. Ceny, zloženie aj
          alergény slúžia na prezentáciu projektu.
        </p>
      </div>
    </section>
  );
}
