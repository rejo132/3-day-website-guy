import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron, Exo_2, Rajdhani } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rejesho — Web Developer",
  description: "I build modern and responsive web applications. View projects, skills and contact details.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Rejesho — Web Developer",
    description: "Modern web solutions: projects, skills, and contact.",
    type: "website",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${exo2.variable} ${rajdhani.variable} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
