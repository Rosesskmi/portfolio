import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "김석민 포트폴리오",
  description: "어서오세요! 프론트엔드 개발자 김석민 포트폴리오 사이트입니다.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
