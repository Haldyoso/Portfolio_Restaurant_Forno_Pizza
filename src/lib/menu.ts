export type Category = "pizza" | "dezerty" | "napoje";
export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  allergens: number[];
  vegetarian?: boolean;
  note?: string;
};
export const menu: MenuItem[] = [
  {
    id: "margherita",
    name: "Margherita",
    description:
      "Paradajky San Marzano, fior di latte, čerstvá bazalka, extra panenský olivový olej.",
    price: 9.5,
    category: "pizza",
    allergens: [1, 7],
    vegetarian: true,
    note: "Klasika z Neapola",
  },
  {
    id: "marinara",
    name: "Marinara",
    description:
      "Paradajky San Marzano, cesnak, oregano, extra panenský olivový olej. Jednoducho dobrá.",
    price: 8.5,
    category: "pizza",
    allergens: [1],
    vegetarian: true,
    note: "Aj pre vegánov",
  },
  {
    id: "diavola",
    name: "Diavola",
    description:
      "Paradajky San Marzano, fior di latte, pikantná saláma, čerstvá bazalka.",
    price: 12.5,
    category: "pizza",
    allergens: [1, 7],
    note: "Trochu ohňa navyše",
  },
  {
    id: "prosciutto",
    name: "Prosciutto e rucola",
    description:
      "Paradajky San Marzano, fior di latte, prosciutto crudo, rukola, hobliny parmezánu.",
    price: 14.5,
    category: "pizza",
    allergens: [1, 7],
  },
  {
    id: "quattro",
    name: "Quattro formaggi",
    description:
      "Fior di latte, gorgonzola, parmezán, pecorino. Štyri syry, jeden dobrý dôvod.",
    price: 13.5,
    category: "pizza",
    allergens: [1, 7],
    vegetarian: true,
  },
  {
    id: "funghi",
    name: "Funghi",
    description:
      "Paradajky San Marzano, fior di latte, restované šampiňóny, tymian.",
    price: 12,
    category: "pizza",
    allergens: [1, 7],
    vegetarian: true,
  },
  {
    id: "ortolana",
    name: "Ortolana",
    description:
      "Paradajky San Marzano, fior di latte, pečený baklažán, cuketa, paprika, bazalka.",
    price: 12.5,
    category: "pizza",
    allergens: [1, 7],
    vegetarian: true,
  },
  {
    id: "napoli",
    name: "Napoli",
    description:
      "Paradajky San Marzano, fior di latte, ančovičky, kapary, čierne olivy, oregano.",
    price: 12.5,
    category: "pizza",
    allergens: [1, 4, 7],
  },
  {
    id: "mortadella",
    name: "Mortadella e pistacchio",
    description:
      "Fior di latte, mortadella, jemná pistáciová crema, drvené pistácie, bazalka.",
    price: 15.5,
    category: "pizza",
    allergens: [1, 7, 8],
  },
  {
    id: "burrata",
    name: "Burrata",
    description:
      "Paradajky San Marzano, krémová burrata, cherry paradajky, bazalka, olivový olej.",
    price: 14.5,
    category: "pizza",
    allergens: [1, 7],
    vegetarian: true,
  },
  {
    id: "tiramisu",
    name: "Tiramisù",
    description:
      "Mascarpone, piškóty, espresso a kakao. Sladká bodka po taliansky.",
    price: 5.5,
    category: "dezerty",
    allergens: [1, 3, 7],
  },
  {
    id: "panna-cotta",
    name: "Panna cotta",
    description: "Jemná vanilková smotana s rozvarom z lesného ovocia.",
    price: 5,
    category: "dezerty",
    allergens: [7],
  },
  {
    id: "affogato",
    name: "Affogato",
    description: "Kopček vanilkovej zmrzliny zaliaty horúcim espressom.",
    price: 4.5,
    category: "dezerty",
    allergens: [3, 7],
  },
  {
    id: "limonata",
    name: "Domáca limonáda",
    description: "Citrón, čerstvá mäta a sóda · 0,4 l",
    price: 3.5,
    category: "napoje",
    allergens: [],
  },
  {
    id: "aranciata",
    name: "Aranciata",
    description: "Talianska pomarančová limonáda · 0,33 l",
    price: 3.2,
    category: "napoje",
    allergens: [],
  },
  {
    id: "voda",
    name: "Minerálna voda",
    description: "Jemne perlivá alebo neperlivá · 0,33 l",
    price: 2.5,
    category: "napoje",
    allergens: [],
  },
  {
    id: "espresso",
    name: "Espresso",
    description: "Malé, silné a presne také, aké má byť · 30 ml",
    price: 2.2,
    category: "napoje",
    allergens: [],
  },
  {
    id: "vino",
    name: "Pohár vína",
    description: "Biele Pinot Grigio alebo červené Primitivo · 0,15 l",
    price: 4.5,
    category: "napoje",
    allergens: [12],
  },
  {
    id: "birra",
    name: "Birra",
    description: "Svetlé talianske pivo · 0,33 l",
    price: 3.8,
    category: "napoje",
    allergens: [1],
  },
];
export const formatPrice = (price: number) =>
  new Intl.NumberFormat("sk-SK", { style: "currency", currency: "EUR" }).format(
    price,
  );
export const openingHours = [
  { days: "Pondelok", hours: "Zatvorené" },
  { days: "Utorok – štvrtok", hours: "11:30 – 21:00" },
  { days: "Piatok – sobota", hours: "11:30 – 22:00" },
  { days: "Nedeľa", hours: "12:00 – 20:00" },
];
