import type { Metadata } from "next";

import { Noto_Sans_KR } from 'next/font/google';
import "./globals.scss";

export const metadata: Metadata = {
  title: "WEFLOW — 문의로 이어지는 홈페이지를 만듭니다.",
  description: "홈페이지 제작부터 광고 연동·운영 관리까지, 단순 제작이 아닌 문의 구조까지 설계합니다.",
};

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-sans-kr', // SCSS에서 사용할 변수명
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.variable}>{children}</body>
    </html>
  );
}
