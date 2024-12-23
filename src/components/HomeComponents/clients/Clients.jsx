"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules"; // استيراد الـ Autoplay
import c1 from "@/assets/images/c1.png";
import c2 from "@/assets/images/c2.png";
import c3 from "@/assets/images/c3.png";
import c4 from "@/assets/images/c4.png";
import c5 from "@/assets/images/c5.png";
import c6 from "@/assets/images/c6.png";
import c7 from "@/assets/images/c7.png";
import c8 from "@/assets/images/c8.png";
import Image from "next/image";

const Clients = () => {
  const logos = [c1, c2, c3, c4, c5, c6, c7, c8, c5, c6, c7, c8];
  return (
    <div id="Exhibitors" className="container py-20">
      <h3 className="text-right text-textPrimary font-extrabold text-xl">
        العارضين
      </h3>
      <Swiper
        spaceBetween={30}
        slidesPerView={8} // عدد اللوجوهات اللي تظهر في وقت واحد
        draggable={true}
        autoplay={{
          delay: 0, // عشان يتحرك من غير توقف
          disableOnInteraction: false, // يكمل الحركة حتى لو حصل تفاعل
          pauseOnMouseEnter: false, // يستمر في الحركة حتى لو الماوس دخل على اللوجوهات
        }}
        speed={3000} // سرعة الحركة - أسرع يعني يتحرك بسرعة أكبر
        loop={true} // يعيد اللوجوهات من الأول بعد ما يخلص
        freeMode={true} // يخلي الحركة حرة ومستمرة
        modules={[Autoplay, FreeMode]}
        breakpoints={{
          320: {
            slidesPerView: 4, // عدد اللوجوهات للشاشات الصغيرة جداً (موبايل)
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 4, // للشاشات الموبايل المتوسطة
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6, // للشاشات التابلت
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 8, // للشاشات الكبيرة مثل اللابتوب والديسكتوب
            spaceBetween: 30,
          },
        }}
        className="mt-10"
      >
        {logos?.map((logo, i) => (
          <SwiperSlide key={i}>
            <Image
              src={logo}
              alt={`client-logo-${i}`}
              style={{ width: "100%", maxHeight: "50px", objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
