"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
export function CopyEmail() {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText("ciao@forno.example");
      setStatus("Ukážkový e-mail skopírovaný.");
    } catch {
      setStatus(
        "Kopírovanie nie je dostupné. E-mail môžeš označiť a skopírovať ručne.",
      );
    }
  }
  return (
    <div>
      <button
        className="copy-email"
        type="button"
        onClick={copy}
        aria-label="Skopírovať ukážkový e-mail"
      >
        <span>ciao@forno.example</span>
        {status.startsWith("Ukážkový") ? (
          <Check size={18} aria-hidden="true" />
        ) : (
          <Copy size={18} aria-hidden="true" />
        )}
      </button>
      <p className="copy-status" role="status">
        {status}
      </p>
    </div>
  );
}
