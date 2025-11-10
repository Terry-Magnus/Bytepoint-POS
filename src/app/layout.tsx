import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/context/Providers";
import { spacegrotesk } from "@/ui/fonts";

export const metadata: Metadata = {
  title: "BitePoint",
  description: "Smart restaurant order system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spacegrotesk.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
