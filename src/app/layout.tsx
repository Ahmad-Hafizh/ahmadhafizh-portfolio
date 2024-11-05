import type { Metadata } from 'next';
// import localFont from "next/font/local";
import './globals.css';
import Navbar from '@/components/Navbar';
import { Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const montserrat = Montserrat({ weight: ['500', '700', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AhmadHafizh',
  description: 'Ahmad Hafizh personal portfolio, nice to meet you',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
