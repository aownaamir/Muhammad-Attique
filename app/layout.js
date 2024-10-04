import "./globals.css";

export const metadata = {
  title: "Muhammad Attique",
  description: "You desire, I design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="scroll-smooth">{children}</body>
    </html>
  );
}
