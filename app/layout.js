import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Adam Matthews — Software Engineer",
    template: "%s — Adam Matthews",
  },
  description:
    "Dublin-based software engineer building full-stack, backend and AI-powered products. Software Development Engineer Intern at Workday and founder of Tradeez.",
  keywords: [
    "Adam Matthews",
    "Software Engineer",
    "Full-stack Developer",
    "Backend Engineer",
    "AI Engineer",
    "Dublin",
    "Workday",
    "Tradeez",
  ],
  openGraph: {
    title: "Adam Matthews — Software Engineer",
    description:
      "Software engineer building thoughtful products across backend systems, AI workflows and user-facing applications.",
    type: "website",
    locale: "en_IE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
