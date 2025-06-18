import { Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fonts.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web3Dash 🚀",
  description: "Web3Dash 🚀",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased font-sf-pro flex flex-col`}
        style={{ fontFamily: "'SF Pro Display', sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
