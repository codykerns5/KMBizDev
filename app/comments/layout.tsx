import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Post Link",
  description: "Submit your Instagram or TikTok post link for comment engagement.",
};

export default function CommentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
