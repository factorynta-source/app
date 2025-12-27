import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NTA Factory Internal Distributor",
  description: "Upload, review, and export music releases with Supabase auth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
