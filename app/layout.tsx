import '@/app/ui/global.css';
import { asap } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${asap.className} antialiased`}>{children}</body>
    </html>
  );
}
