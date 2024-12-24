"use client";
import React from "react";
import EventCard from "./EventCard";
import visits from "@/assets/icons/visits.svg";
import exportsIcon from "@/assets/icons/exports.svg";
import percentage from "@/assets/icons/percentage.svg";
import star from "@/assets/icons/star.svg";
import contact from "@/assets/icons/contact.svg";
import settings from "@/assets/icons/settings.svg";
import people from "@/assets/icons/people.svg";
import worksArea from "@/assets/icons/worksArea.svg";
const EventsCards = () => {
  const events = [
    {
      image: visits,
      title: " أكثر من 400 زائر مستهدف للأعمال بين الشركات",
    //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
    {
      image: exportsIcon,
      title:
        "أكثر من 22 موردًا عالميًا للعلامات التجارية الخاصة بالحيوانات الأليفة",
    //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
    {
      image: percentage,
      title: "توقيع صفقات مستهدفة مع العلامات التجارية",
    //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
    {
      image: star,
      title: "عرض منتجات الحيوانات الأليفة مع تجارب عملية مباشرة",
    //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
    {
      image: contact,
      title: "التواصل مع نظراء القطاع والحصول على عينات مجانية",
    //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
    {
      image: settings,
      title: "جلسة تدريبية عن منتجات العلامات التجارية",
    //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
    {
      image: people,
      title: "اجتماعات فردية مع الموردين",
    //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
    {
      image: worksArea,
      title: "محاضرات / ورش عمل / دورات مخصصة للقطاع",
    //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className="EventsCards pt-3 lg:pt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 basis-[50%] z-50 px-3">
      {events?.map((event, index) => (
        <EventCard
          event={event}
          key={index}
          isActive={activeIndex === index}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default EventsCards;
