import Footer from '@/components/Footer';
import Navigation from '@/components/header/Navigation';
import { Inter } from 'next/font/google';
import { twJoin } from 'tailwind-merge';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Accelerators',
  description: 'Speed Your Journey from Idea to Impact with our Accelerators.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${inter.className} ${twJoin("bg-slate-800 max-w-[1800px] mx-auto scroll-smooth overflow-x-hidden")}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
