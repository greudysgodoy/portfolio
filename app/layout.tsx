import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "@/app/ui/global.css";

export const metadata: Metadata = {
  title: "Greudys Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-900`}>{children}</body>
    </html>
  );
}
