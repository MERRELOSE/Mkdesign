import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";

export const metadata: Metadata = {
  title: "Kennedy MERRELOSE - Full-Stack Developer",
  description: "Experienced Full-Stack Developer specializing in Laravel, React, Next.js, and Python. Available for freelance projects on Upwork.",
  keywords: ["Full-Stack Developer", "Laravel", "React", "Next.js", "Python", "MySQL", "Freelance Developer", "Upwork"],
  authors: [{ name: "Kennedy MERRELOSE" }],
  creator: "Kennedy MERRELOSE",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Kennedy MERRELOSE - Full-Stack Developer",
    description: "Experienced Full-Stack Developer specializing in Laravel, React, Next.js, and Python.",
    siteName: "Kennedy MERRELOSE Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kennedy MERRELOSE - Full-Stack Developer",
    description: "Experienced Full-Stack Developer specializing in Laravel, React, Next.js, and Python.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
