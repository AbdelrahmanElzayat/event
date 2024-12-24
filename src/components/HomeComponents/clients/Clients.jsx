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
import c9 from "@/assets/images/c9.png";
import c10 from "@/assets/images/c10.png";
import c11 from "@/assets/images/c11.png";
import c12 from "@/assets/images/c12.png";
import c13 from "@/assets/images/c13.png";
import c14 from "@/assets/images/c14.png";
import c15 from "@/assets/images/c15.png";
import c16 from "@/assets/images/c16.png";
import c17 from "@/assets/images/c17.png";
import c18 from "@/assets/images/c18.png";
import c19 from "@/assets/images/c19.png";
import c20 from "@/assets/images/c20.png";
import c21 from "@/assets/images/c21.png";
import c22 from "@/assets/images/c22.png";
import c23 from "@/assets/images/c23.png";
import c24 from "@/assets/images/c24.png";
import c25 from "@/assets/images/c25.png";
import c26 from "@/assets/images/c26.png";
import c27 from "@/assets/images/c27.png";
import c28 from "@/assets/images/c28.png";
import c29 from "@/assets/images/c29.png";
import c30 from "@/assets/images/c30.png";
import c31 from "@/assets/images/c31.png";
import c32 from "@/assets/images/c32.png";
import c33 from "@/assets/images/c33.png";
import c34 from "@/assets/images/c34.png";
import c35 from "@/assets/images/c35.png";
import c36 from "@/assets/images/c36.png";
import c37 from "@/assets/images/c37.png";
import c38 from "@/assets/images/c38.png";
import c39 from "@/assets/images/c39.png";
import c40 from "@/assets/images/c40.png";
import c41 from "@/assets/images/c41.png";
import c42 from "@/assets/images/c42.png";
import c43 from "@/assets/images/c43.png";
import c44 from "@/assets/images/c44.png";
import c45 from "@/assets/images/c45.png";

import Image from "next/image";

const Clients = () => {
  const logos = [
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9,
    c10,
    c11,
    c12,
    c13,
    c14,
    c15,
    c16,
    c17,
    c18,
    c19,
    c20,
    c21,
    c22,
    c23,
    c24,
    c25,
    c26,
    c27,
    c28,
    c29,
    c30,
    c31,
    c32,
    c33,
    c34,
    c35,
    c36,
    c37,
    c38,
    c39,
    c40,
    c41,
    c42,
    c43,
    c44,
    c45,
  ];
  return (
    <div id="Exhibitors" className="container py-6 pt-20 lg:py-20">
      <h3 className="text-textPrimary font-extrabold text-xl text-center lg:text-right">
        العارضين
      </h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={8} // عدد اللوجوهات اللي تظهر في وقت واحد
        draggable={true}
        autoplay={{
          delay: 0, // عشان يتحرك من غير توقف
          disableOnInteraction: false, // يكمل الحركة حتى لو حصل تفاعل
          pauseOnMouseEnter: false, // يستمر في الحركة حتى لو الماوس دخل على اللوجوهات
        }}
        speed={2000} // سرعة الحركة - أسرع يعني يتحرك بسرعة أكبر
        loop={true} // يعيد اللوجوهات من الأول بعد ما يخلص
        freeMode={true} // يخلي الحركة حرة ومستمرة
        modules={[Autoplay, FreeMode]}
        breakpoints={{
          320: {
            slidesPerView: 4, // عدد اللوجوهات للشاشات الصغيرة جداً (موبايل)
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 4, // للشاشات الموبايل المتوسطة
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 6, // للشاشات التابلت
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 8, // للشاشات الكبيرة مثل اللابتوب والديسكتوب
            spaceBetween: 20,
          },
        }}
        className="mt-6 lg:mt-8"
      >
        {logos?.map((logo, i) => (
          <SwiperSlide key={i}>
            <Image
              src={logo}
              alt={`client-logo-${i}`}
              style={{
                width: "100%",
                maxHeight: "100px",
                objectFit: "contain",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
