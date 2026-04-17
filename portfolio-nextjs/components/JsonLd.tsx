export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kennedy MERRELOSE",
    alternateName: ["Kennedy Merrelose", "MERRELOSE Kennedy", "Merrelose"],
    url: "https://kennedymerrelose.vercel.app",
    image: "https://kennedymerrelose.vercel.app/profile.jpg",
    jobTitle: "Full-Stack Developer",
    description:
      "Full-Stack Developer based in Cotonou, Benin. Expert in Laravel, React, Next.js, and Python. Available for freelance projects.",
    email: "mailto:kennedymerrelose@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
    sameAs: [
      "https://github.com/MERRELOSE",
      "https://www.linkedin.com/in/kennedy-merrelose-165092283",
      "https://x.com/MerreloseK",
      "https://www.upwork.com/freelancers/~01fd4e5b112fcd6443",
    ],
    knowsAbout: [
      "Laravel",
      "React",
      "Next.js",
      "Python",
      "TypeScript",
      "PHP",
      "Node.js",
      "MySQL",
      "PostgreSQL",
      "Full-Stack Development",
      "Web Development",
      "SaaS Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Kennedy MERRELOSE Portfolio",
    url: "https://kennedymerrelose.vercel.app",
    author: {
      "@type": "Person",
      name: "Kennedy MERRELOSE",
    },
    inLanguage: ["en", "fr"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
