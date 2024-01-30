import type { Metadata } from "next";
import { IBM_Plex_Sans, Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const ibm = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const notoSans = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Designer Niche",
  description: "Local Branded Clothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <Navbar />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
