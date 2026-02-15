import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Call | Kerns Marketing",
  description: "Book a free 30-minute brand analysis call with Cody and the Kerns Marketing team. Discuss your goals and get a custom strategy.",
  openGraph: {
    title: "Schedule a Call | Kerns Marketing",
    description: "Book a free 30-minute brand analysis call with Cody and the Kerns Marketing team.",
    type: "website",
    url: "https://www.kmbizdev.com/freishtat",
  },
};

export default function FreishtatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
