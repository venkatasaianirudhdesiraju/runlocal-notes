import Script from "next/script";
import { site } from "@/lib/site";

export default function AdSlot() {
  if (!site.adsenseClient) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${site.adsenseClient}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
