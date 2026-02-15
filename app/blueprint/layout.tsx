import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Blueprint | Kerns Marketing",
  description: "Instagram Blueprint - The exact monetization frameworks used to help 5,000+ entrepreneurs scale revenue, authority, and brand leverage. Free download by Cody Kerns.",
  openGraph: {
    title: "Get Your Blueprint | Kerns Marketing",
    description: "Instagram Blueprint - The exact monetization frameworks used to help 5,000+ entrepreneurs scale revenue, authority, and brand leverage.",
    type: "website",
    url: "https://kmbizdev.com/blueprint",
    images: [
      {
        url: "https://kmbizdev.com/og-blueprint.png",
        width: 1200,
        height: 1200,
        alt: "Kerns Marketing - Instagram Blueprint by Cody Kerns",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your Blueprint | Kerns Marketing",
    description: "Instagram Blueprint - The exact monetization frameworks used to help 5,000+ entrepreneurs scale revenue, authority, and brand leverage.",
    images: ["https://kmbizdev.com/og-blueprint.png"],
  },
};

export default function BlueprintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
