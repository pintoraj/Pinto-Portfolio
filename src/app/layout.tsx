import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter for a clean, minimalist look
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pinto Raj J | Full-Stack Developer", // Update title based on your resume [cite: 2]
  description: "Passionate Full-Stack Developer specializing in Java (Spring Boot), React, and modern web technologies.", // Based on your profile [cite: 4, 13, 14, 17]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-50 min-h-screen `}>
        {children}
      </body>
    </html>
  );
}