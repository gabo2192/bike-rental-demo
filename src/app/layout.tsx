import { Header } from "@/components/header";
import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main className="max-w-7xl mx-auto w-[90vw] py-4 min-h-[calc(100vh-65px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
