import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font
import "./globals.css";
import 'animate.css';

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] }); // Customize the weights if necessary

export const metadata: Metadata = {
  title: "DMX AI",
  description: "fictional ai product spotlight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
