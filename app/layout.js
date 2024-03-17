import { Inter } from "next/font/google";
import "./ui/dashboard/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Church management system",
  description: "Creating a full-stack Church management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#eeee]`}>{children}</body>
    </html>
  );
}
