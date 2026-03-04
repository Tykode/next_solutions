"use client";

import { useEffect } from "react";

export function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-3xl overflow-hidden border border-[#E8EBF0] shadow-sm"
      data-url="https://calendly.com/next-solutions/rendez-vous-avec-next-solutions?hide_gdpr_banner=1&primary_color=f88903"
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
