"use client";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TopLoader from "@/components/Header/TopProgressBar";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Socials from "@/components/Socials";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const font = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">

      <link rel="canonical" href={'https://www.fcsc.co.in' + pathname} />
      <meta name="google-site-verification" content="S_ec0Rc8aaLbCuiQ_k0erWBe4InJa6MwHkpBWhR_5NQ" />

      <GoogleAnalytics gaId="G-3J4ZV11JQ2" />
      <body className={font.className}>
        <TopLoader />
        <Navbar className="md:pb-[127px] pb-[64px] lg:pb-[154px] z-50" />
        <Socials />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
