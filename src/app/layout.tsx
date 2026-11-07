import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import AdSlot from "@/components/AdSlot";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AdSlot />
        <header className="border-b border-border">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
            <Link href="/" className="font-semibold tracking-tight">
              {site.name}
            </Link>
            <nav className="flex gap-5 text-sm text-muted">
              <Link href="/">Posts</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-3xl px-6 py-10">{children}</main>
        <footer className="mx-auto max-w-3xl px-6 py-10 text-xs text-muted">
          © {new Date().getFullYear()} {site.author}. Built and published without any cloud API —
          drafts are generated with a local model and reviewed before publishing.
        </footer>
      </body>
    </html>
  );
}
