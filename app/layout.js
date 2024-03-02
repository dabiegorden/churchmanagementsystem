import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./container/Navbar";
import Footer from "./container/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Church management system",
  description: "Creating a full-stack Church management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#eeee]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
