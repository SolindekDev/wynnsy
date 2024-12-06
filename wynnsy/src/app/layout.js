import "./globals.css";
import "./scroll.css";

export const metadata = {
  title: "Wynnsy",
  description: " Best Solana Network Casino",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900">
        {children}
      </body>
    </html>
  );
}
