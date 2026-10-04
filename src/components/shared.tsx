import { openingHours } from "@/lib/menu";
import { ArrowUpRight } from "lucide-react";
import Link from "@/components/site-link";
export function Hours() {
  return (
    <dl className="hours">
      {openingHours.map((row) => (
        <div key={row.days}>
          <dt>{row.days}</dt>
          <dd>{row.hours}</dd>
        </div>
      ))}
    </dl>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowUpRight size={19} aria-hidden="true" />
    </Link>
  );
}
