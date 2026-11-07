import { site } from "@/lib/site";

type Props = { asin: string; children: React.ReactNode };

export default function AffiliateLink({ asin, children }: Props) {
  const tag = site.amazonTag;
  const href = tag
    ? `https://www.amazon.com/dp/${asin}?tag=${tag}`
    : `https://www.amazon.com/dp/${asin}`;

  return (
    <a href={href} target="_blank" rel="nofollow sponsored noreferrer" className="text-accent underline underline-offset-4">
      {children}
    </a>
  );
}
