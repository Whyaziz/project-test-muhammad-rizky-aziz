import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Suitmedia",
  description: "Navigate the Innovation to Unlock Digital Challenges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/layouts/site-logo.png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
