"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";

/** Start a new page at the top, while letting Next handle hash links and history. */
export default function SiteLink(
  props: Omit<ComponentProps<typeof NextLink>, "onNavigate">,
) {
  return (
    <NextLink
      {...props}
      onNavigate={() => {
        const destination =
          typeof props.href === "string" ? props.href : props.href.pathname;
        if (destination?.startsWith("/") && !destination.includes("#")) {
          window.scrollTo({ top: 0, behavior: "instant" });
        }
      }}
    />
  );
}
