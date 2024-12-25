import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Almarai } from "next/font/google";
import "swiper/css";
import { Toaster } from "react-hot-toast";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

export const metadata = {
  title: "paws & partners",
  description: "معرض مبتكر للحيوانات الأليفة في السعودية",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${almarai.className} overflow-x-hidden antialiased`}>
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
