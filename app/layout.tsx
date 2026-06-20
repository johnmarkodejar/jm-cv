import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jmreyes.dev"),
  title: {
    default: "JM Reyes | Senior Full-Stack Engineer & Solutions Architect",
    template: "%s | JM Reyes",
  },
  description:
    "Senior Full-Stack Engineer, DevOps Engineer, AI Automation Consultant, and Solutions Architect based in the Philippines. 15+ years building scalable digital products.",
  keywords: [
    "Senior Full Stack Developer Philippines",
    "DevOps Engineer Philippines",
    "AWS Engineer Philippines",
    "AI Automation Consultant",
    "Solutions Architect",
    "Next.js Developer",
    "eCommerce Developer",
    "PHP Developer Philippines",
    "Cloud Infrastructure",
    "Kubernetes Engineer",
  ],
  authors: [{ name: "John Mark O. Reyes", url: "https://jmreyes.dev" }],
  creator: "John Mark O. Reyes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jmreyes.dev",
    title: "JM Reyes | Senior Full-Stack Engineer & Solutions Architect",
    description:
      "Senior Full-Stack Engineer, DevOps Engineer, AI Automation Consultant, and Solutions Architect. 15+ years building scalable digital products.",
    siteName: "JM Reyes Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "JM Reyes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JM Reyes | Senior Full-Stack Engineer & Solutions Architect",
    description:
      "Senior Full-Stack Engineer, DevOps Engineer, AI Automation Consultant, and Solutions Architect based in the Philippines.",
    images: ["/og-image.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "John Mark O. Reyes",
              alternateName: "JM Reyes",
              jobTitle: "Senior Full-Stack Engineer & Solutions Architect",
              url: "https://jmreyes.dev",
              email: "johnmarkodejar@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pasig City",
                addressCountry: "PH",
              },
              sameAs: [],
              knowsAbout: [
                "PHP", "AWS", "Kubernetes", "Docker", "Terraform",
                "Next.js", "React", "Node.js", "AI Automation", "DevOps",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
