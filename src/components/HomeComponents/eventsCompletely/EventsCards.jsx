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
      // image: visits,
      title:
        "توفير ارفف ذكية جذابة للعلامات التجارية داخل المتاجر وتوقيع خطط تسويقية مشتركة",
      //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
    {
      // image: exportsIcon,
      title: "توقيع اتفاقيات تجارية مع العلامات التجارية",
      //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
    {
      // image: percentage,
      title: "جلسات تدريبية مخصصة للعلامات التجارية",
      //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
    {
      // image: star,
      title: "محاضرات يقدمها نخبة من المتحدثين والمديرين العالميين في القطاع",
      //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
    {
      // image: contact,
      title: "الاجتماع ومناقشة ملاك العلامات التجارية بشكل مباشر",
      //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
    {
      // image: settings,
      title: "ورش عمل ودورات مهنية للعاملين في القطاع",
      //   des: "لوريم إيبسوم هو نص افتراضي يستخدم في تصميم الصفحات والمواقع والتطبيقات",
    },
  ];
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <div className="EventsCards pt-3 lg:pt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 basis-[50%] z-50 px-3">
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
