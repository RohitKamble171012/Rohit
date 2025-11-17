import "./globals.css";

export const metadata = {
  title: "Rohit Kamble | Portfolio",
  description: "Web Developer Portfolio – Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
