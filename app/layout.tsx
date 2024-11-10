import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import AudioProvider from "@/providers/AudioProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Podcastr",
  description: "Generate your podcast using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "/icons/auth-logo.svg",
        },
        variables: {
          colorBackground: "#15171c",
          colorPrimary: "",
          colorText: "white",
          colorInputBackground: "#1b1f29",
          colorInputText: "white",
        },
      }}
    >
      <html lang="en">
        <AudioProvider>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-accent-1`}
          >
            {children}
          </body>
        </AudioProvider>
      </html>
    </ClerkProvider>
  );
}
