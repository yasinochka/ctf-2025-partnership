import Navbar from './Navbar';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="./logo.svg" type="image/svg+xml" /> 
      </head>
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}