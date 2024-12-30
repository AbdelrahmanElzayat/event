// pages/_app.tsx
import { AppProps } from "next/app";
import Head from "next/head";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Almarai } from "next/font/google";
import "swiper/css";
import { Toaster } from "react-hot-toast";
import "./globals.css"; // استيراد الـ CSS العالمي
import i18n from "@/i18n";
import { appWithTranslation } from "next-i18next";
import { LanguageProvider } from "@/context/LanguageContext";
import { useEffect, useState } from "react";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>paws & partners</title>
        <meta
          name="description"
          content="معرض مبتكر للحيوانات الأليفة في السعودية"
        />
      </Head>
      <LanguageProvider>
        <div
          className={`${almarai.className} antialiased`}
          // dir="rtl"
          // dir={i18n.language === "ar" ? "rtl" : "ltr"}
          // dir={dir}
        >
          <Toaster position="top-right" reverseOrder={false} />
          <Header />
          <main className="min-h-screen overflow-x-hidden">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </>
  );
}

export default MyApp;
// export default appWithTranslation(MyApp);
