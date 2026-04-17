import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL('https://kennedymerrelose.vercel.app'),
  title: {
    default: "Kennedy MERRELOSE - Full-Stack Developer Portfolio",
    template: "%s | Kennedy MERRELOSE"
  },
  description: "Portfolio of Kennedy MERRELOSE, a Full-Stack Developer based in Benin. Expert in Laravel, React, Next.js, and Python. Available for freelance projects.",
  keywords: [
    "Kennedy MERRELOSE",
    "Kennedy Merrelose",
    "MERRELOSE Kennedy",
    "Merrelose",
    "Kennedy MERRELOSE Portfolio",
    "Kennedy MERRELOSE Developer",
    "Full-Stack Developer Benin",
    "Développeur Full-Stack Bénin",
    "Développeur web Cotonou",
    "Laravel Developer",
    "Développeur Laravel",
    "React Developer",
    "Next.js Expert",
    "Freelance Web Developer",
    "Développeur Freelance",
    "SaaS Developer",
    "Cotonou Developer",
    "Benin Developer"
  ],
  alternates: {
    canonical: "https://kennedymerrelose.vercel.app",
    languages: {
      "en-US": "https://kennedymerrelose.vercel.app",
      "fr-FR": "https://kennedymerrelose.vercel.app",
    },
  },
  authors: [{ name: "Kennedy MERRELOSE" }],
  creator: "Kennedy MERRELOSE",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kennedymerrelose.vercel.app",
    title: "Kennedy MERRELOSE - Full-Stack Developer",
    description: "Experienced Full-Stack Developer specializing in Laravel, React, Next.js, and Python.",
    siteName: "Kennedy MERRELOSE Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kennedy MERRELOSE - Full-Stack Developer",
    description: "Check out my latest web development projects and skills.",
    creator: "@MerreloseK",
  },
  verification: {
    google: "2HAO6lrV_K0UYdKklRzVYkhUvxKc38rMxR9_ElhhOjE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="antialiased text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
