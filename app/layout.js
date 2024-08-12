import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Phil nextjs Portfolio",
  description: "This is my next.js portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Navigation />
      </body>
    </html>
  );
}

// done