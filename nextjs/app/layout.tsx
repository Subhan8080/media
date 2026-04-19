import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Buzzcraft Studios - Coming Soon',
  description: 'Elevate your brand. Transform your business. A premium marketing agency and software solutions company coming soon.',
  keywords: 'marketing agency, digital marketing, web development, software solutions, branding',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Buzzcraft Studios',
    description: 'Elevate your brand. Transform your business.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f0f1e" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
