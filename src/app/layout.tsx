import type { Metadata } from "next";
import { Roboto_Mono, Inter } from 'next/font/google';
import Header from "@/components/Header/Header";
import TransitionWrapper from './TransitionWrapper';
import "./globals.scss";

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Giskard Nautilus",
  description: "A technical assignment for Giskard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} ${inter.variable} antialiased app`}>
        <Header />
        <TransitionWrapper>{children}</TransitionWrapper>
      </body>
    </html>
  );
}
