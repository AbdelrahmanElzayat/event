import React, { useContext } from "react";
import ActivityCard from "./ActivityCard";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/context/LanguageContext";

const DaySection = ({ title, data, label }) => (
  <div className="mb-8">
    <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4 text-center border-b-2 border-[#88BC3E] pb-2">
      {title}
    </h2>
    <div className="ListCards grid grid-cols-2 lg:grid-cols-4 gap-5">
      {data?.map((item, i) => (
        <ActivityCard key={i} item={item} label={label} />
      ))}
    </div>
  </div>
);

const ActivityList = ({ label, data, lecture1, lecture2 }) => {
  const { lang } = useContext(LanguageContext);
  const { t } = useTranslation();
  return (
    <div className="ActivityCards">
      <div className="activityHeader flex items-center gap-4 mb-4">
        <span className="w-[6px] h-[18px] bg-[#88BC3E] rounded-[15px]"></span>
        <h4
          className="heading label text-textPrimary font-bold lg:font-extrabold text-lg lg:text-[22px] heading"
          style={{ textAlign: lang === "ar" ? "right" : "left" }}
        >
          {label}
        </h4>
      </div>
      {label === "المحاضرات" ||
      label === "Lectures" ||
      label === "الدورات" ||
      label === "Courses" ? (
        <>
          <DaySection
            title={t("firstDay")}
            // data={data.slice(0, 4)}
            data={lecture1}
            label={label}
          />
          <DaySection
            title={t("secondDay")}
            // data={data.slice(4, 8)}
            data={lecture2}
            label={label}
          />
        </>
      ) : label === "ورش العمـل" ||
        label === "ورش العمل (المجال البيطري )" ||
        label === "Workshops (Veterinary Field)" ? (
        <>
          <div className="flex items-center gap-2">
            <h4>{t("provider")}</h4>
            <Image
              src={"https://ppte.sa/logos/suppliers/GSGroup.png"}
              width={100}
              height={100}
              alt="logo"
              className="rounded-full w-16 h-14"
            />
          </div>
          <DaySection
            title={t("firstDay")}
            // data={data.slice(0, 5)}
            data={lecture1}
            label={label}
          />
          <DaySection
            title={t("secondDay")}
            // data={data.slice(5, 9)}
            data={lecture2}
            label={label}
          />
        </>
      ) : (
        <div className="ListCards grid grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((item, i) => (
            <ActivityCard key={i} item={item} label={label} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivityList;
