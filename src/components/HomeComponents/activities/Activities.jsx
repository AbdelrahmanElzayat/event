import React from "react";
import ActivityList from "./ActivityList";

import scrollImg from "@/assets/images/scrollCourses.svg";

import lec1 from "@/assets/images/lec1.png";
import lec2 from "@/assets/images/lec2.png";
import lec3 from "@/assets/images/lec3.png";
import lec4 from "@/assets/images/lec4.png";
import lec5 from "@/assets/images/lec5.png";
import lec6 from "@/assets/images/lec6.png";
import lec7 from "@/assets/images/lec7.png";

import c1 from "@/assets/images/course1.png";

import w1 from "@/assets/images/w1.png";
import w2 from "@/assets/images/w2.png";
import w3 from "@/assets/images/w3.png";
import w4 from "@/assets/images/w4.png";
import w5 from "@/assets/images/w5.png";
import w6 from "@/assets/images/w6.png";
import w7 from "@/assets/images/w7.png";
import w8 from "@/assets/images/w8.png";
import Image from "next/image";

const Activities = () => {
  const lectures = [
    {
      image: lec1,
      des: "أساسيات تغذية الحيوان الأليف (القطط والكلاب)",
    },
    {
      image: lec2,
      des: "كشف أسرار زيادة الإيرادات و مضاعفة الارباح",
    },
    {
      image: lec2,
      des: "ماذا تريد القطط ايصالها لنا بخصوص سلوكها وطباعها؟",
    },
    {
      image: lec3,
      des: "تقديم منتجات ذات جودة عالية و تأثير كبير في السوق",
    },
    {
      image: lec4,
      des: "صياغة استراتيجية لبرنامج ولاء العملاء بنجاح",
    },
    {
      image: lec5,
      des: "خلق بيئة مثالية ومناسبة للقطط",
    },
    {
      image: lec6,
      des: "التميز في تطبيق اساسيات التجارة الإلكترونية",
    },
    {
      image: lec7,
      des: "الوصفة السحرية لطعام الحيوان الأليف",
    },
  ];
  const courses = [
    {
      image: c1,
      des: "دليل الرعاية الصحية لجلد وشعر القطط والكلاب",
    },
  ];
  const workShops = [
    {
      image: w1,
      des: "إدارة اعاقات القطط في حالات الطوارئ",
    },
    {
      image: w2,
      des: "أنظمة الموجات فوق الصوتية في حالات الطوارئ",
    },
    {
      image: w3,
      des: "التعامل مع حصوات المسالك البولية للقطط والكلاب",
    },
    {
      image: w4,
      des: "اعتلال الكلى المزمن لدى القطط",
    },
    {
      image: w5,
      des: "إعادة تعريف رعاية الحيوانات الأليفة في المملكة العربية السعودية",
    },
    {
      image: w6,
      des: "معيار جديد للأنظمة الغذائية العلاجية",
    },
    {
      image: w7,
      des: "الأمراض الجلدية والإدارة الغذائية لاضطرابات الجلد",
    },
    {
      image: w8,
      des: "العلاج الطبيعي وإعادة التأهيل للحيوانات الصغيرة",
    },
  ];
  return (
    <div className="Activities mb-20 relative">
      <div className="scrollCourses hidden lg:block absolute right-0 top-[100px]">
        <Image src={scrollImg} alt="" />
      </div>
      <div className="container">
        <div className="headerDate mb-5 flex flex-col gap-4">
          {/* <span className="text-textPrimary font-normal text-sm lg:text-[20px]">
            مناسبات خاصة
          </span> */}
          <h2 className="text-textPrimary font-bold lg:font-extrabold text-2xl lg:text-[40px]">
            الأنشطة المصاحبة
          </h2>
        </div>
        <div className="activitiesList flex flex-col items-start gap-7 mt-16">
          <ActivityList label="المحاضرات" data={lectures} />
          <ActivityList label="الدورات" data={courses} />
          <ActivityList label="ورش العمـل" data={workShops} />
        </div>
      </div>
    </div>
  );
};

export default Activities;
