"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules"; // استيراد الـ Autoplay
import brandLogo from "@/assets/images/brandLogo.png";
import Image from "next/image";
const Clients = () => {
  const logos = [
    "https://ppte.sa/logos/brands/Applaws.png",
    brandLogo,
    // "https://ppte.sa/logos/brands/Encore.png",
    "https://ppte.sa/logos/brands/Beaphar.png",
    "https://ppte.sa/logos/brands/Butchers.png",
    // "https://ppte.sa/logos/brands/Acana.png",
    // "https://ppte.sa/logos/brands/Orijen.png",
    "https://ppte.sa/logos/brands/VetsBest.png",
    "https://ppte.sa/logos/brands/Fruitables.png",
    "https://ppte.sa/logos/brands/Nutrivet.png",
    // brandLogo,
    "https://ppte.sa/logos/brands/Espree.png",
    "https://ppte.sa/logos/brands/SimpleSolution.png",
    "https://ppte.sa/logos/brands/Zupreem.png",
    // brandLogo,
    "https://ppte.sa/logos/brands/DrClauders.png",
    "https://ppte.sa/logos/brands/Inaba.png",
    "https://ppte.sa/logos/brands/Josera.png",
    brandLogo,
    "https://ppte.sa/logos/brands/Bavaro.png",
    "https://ppte.sa/logos/brands/KitCat.png",
    "https://ppte.sa/logos/brands/WitteMolen.png",
    // brandLogo,
    // "https://ppte.sa/logos/brands/Coockoo.png",
    "https://ppte.sa/logos/brands/Cede.png",
    "https://ppte.sa/logos/brands/ILoveHappyCats.png",
    "https://ppte.sa/logos/brands/GardenBites.png",
    // brandLogo,
    "https://ppte.sa/logos/brands/LindoCat.png",
    "https://ppte.sa/logos/brands/SignorGatto.png",
    // "https://ppte.sa/logos/brands/Arya.png",
    "https://ppte.sa/logos/brands/Myfamily.png",
    // brandLogo,
    "https://ppte.sa/logos/brands/Forza10.png",
    "https://ppte.sa/logos/brands/Babin.png",
    brandLogo,
    // "https://ppte.sa/logos/brands/NaturalCode.png",
    "https://ppte.sa/logos/brands/Prince.png",
    "https://ppte.sa/logos/brands/Princess.png",
    "https://ppte.sa/logos/brands/PurinaProPlan.png",
    "https://ppte.sa/logos/brands/Sanal.png",
    "https://ppte.sa/logos/brands/SolidGold.png",
    "https://ppte.sa/logos/brands/ZestyPaws.png",
    "https://ppte.sa/logos/brands/VerseleLaga.png",
    // brandLogo,
    // "https://ppte.sa/logos/brands/Core.png",
    // "https://ppte.sa/logos/brands/Whimzees.png",
    "https://ppte.sa/logos/brands/Zolux.png",
    // "https://ppte.sa/logos/brands/BioPetActive.png",
  ];
  return (
    <div id="Exhibitors" className="container py-6 pt-20 lg:py-20">
      <h3 className="text-textPrimary font-extrabold text-xl text-center lg:text-right">
        العارضين
      </h3>
      <Swiper
        // spaceBetween={20}
        // slidesPerView={8} // عدد اللوجوهات اللي تظهر في وقت واحد
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
          300: {
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
        {logos?.map((logo, i) =>
          logo ? (
            <SwiperSlide key={i}>
              <Image
                src={logo}
                alt={`brand-logo-${i}`}
                width={100}
                height={100}
                style={{
                  width: "100%",
                  maxHeight: "100px",
                  objectFit: "contain",
                }}
              />
            </SwiperSlide>
          ) : null
        )}
      </Swiper>
    </div>
  );
};

export default Clients;
