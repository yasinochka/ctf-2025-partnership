import Navbar from './Navbar';
import './globals.css';

export const metadata = {
  title: 'Partnership CTF 2025',
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" type="image/x-icon" />
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}