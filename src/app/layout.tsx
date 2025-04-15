import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "zqw store",
  description: "A ZQW store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
