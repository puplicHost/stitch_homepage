import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Ismailia Careers",
  description: "Find jobs, courses, and dashboards tailored for Ismailia professionals."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className={`${manrope.className} min-h-screen bg-background-light text-text-light-primary antialiased`}>
        {children}
      </body>
    </html>
  );
}
