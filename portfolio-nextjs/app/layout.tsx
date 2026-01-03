import type { Metadata } from "next";
import "./globals.css";

// Ajoutez cette ligne cruciale pour définir la racine de votre site
export const metadataBase = new URL('https://mkdesign-phi.vercel.app');

export const metadata: Metadata = {
  // Le titre doit être percutant. J'ajoute "Portfolio" pour capturer cette recherche.
  title: {
    default: "Kennedy MERRELOSE - Full-Stack Developer Portfolio",
    template: "%s | Kennedy MERRELOSE"
  },
  description: "Portfolio of Kennedy MERRELOSE, a Full-Stack Developer based in Benin. Expert in Laravel, React, Next.js, and Python. Available for freelance projects.",
  
  // J'ai ajouté des variantes de votre nom pour capturer les fautes de frappe ou recherches partielles
  keywords: [
    "Kennedy MERRELOSE", 
    "Kennedy MERRELOSE Portfolio",
    "Full-Stack Developer Benin", 
    "Laravel Developer", 
    "React Developer", 
    "Next.js Expert", 
    "Freelance Web Developer"
  ],
  authors: [{ name: "Kennedy MERRELOSE" }],
  creator: "Kennedy MERRELOSE",
  
  // Correction de l'URL et ajout d'images pour les partages sociaux (LinkedIn/WhatsApp)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mkdesign-phi.vercel.app",
    title: "Kennedy MERRELOSE - Full-Stack Developer",
    description: "Experienced Full-Stack Developer specializing in Laravel, React, Next.js, and Python.",
    siteName: "Kennedy MERRELOSE Portfolio",
    images: [
      {
        url: '/og-image.jpg', // Assurez-vous d'avoir une image nommée ainsi dans le dossier 'public'
        width: 1200,
        height: 630,
        alt: 'Kennedy Merrelose Portfolio Preview',
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Kennedy MERRELOSE - Full-Stack Developer",
    description: "Check out my latest web development projects and skills.",
    // images: ['/og-image.jpg'], // Décommentez si vous avez l'image
  },
  
  // Très important pour dire "Google, viens voir !"
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
  
  // Prouve à Google que vous êtes bien le propriétaire (si vous utilisez Search Console)
  verification: {
    google: "VOTRE_CODE_VERIFICATION_GOOGLE", // À remplir après avoir configuré la Search Console
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-950">
        {children}
      </body>
    </html>
  );
}