import type { Metadata } from "next";

import { Header } from '@/widegt/Header/Header';
import { Footer } from '@/widegt/Footer/Footer';
import { Backdrop } from '@/widegt/Backdrop/Backdrop';

import localFont from 'next/font/local';
import "./globals.scss";

export const metadata: Metadata = {
  title: "WEFLOW — 문의로 이어지는 홈페이지를 만듭니다.",
  description: "홈페이지 제작부터 광고 연동·운영 관리까지, 단순 제작이 아닌 문의 구조까지 설계합니다.",
};

const pretendard = localFont({
  src: '../../public/fonts/pretendardVariable.ttf',
  display: 'swap',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.variable}>
        <Header />
        {children}
        <Footer />
        <Backdrop />
      </body>
    </html>
  );
}
