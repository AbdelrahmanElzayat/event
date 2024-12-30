"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import exclamation from "@/assets/icons/exclamation.svg";
import translation from "@/assets/icons/translation.svg";
import ModalLecturer from "./ModalLecturer";
import { LanguageContext } from "@/context/LanguageContext";
import { useTranslation } from "react-i18next";
const ActivityCard = ({ item, label }) => {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  return (
    <div className="ActivityCard rounded-2xl border border-[#CECECE] p-3 lg:p-3 flex flex-col items-start justify-between gap-2 lg:gap-3">
      <div className="imageLec h-[150px] sm:h-[220px] w-full rounded-xl overflow-hidden flex justify-start items-start">
        <Image
          src={item?.presenter?.image ?? item?.image}
          width={100}
          height={100}
          alt="imageTest"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className="activityContent lg:w-[80%]">
        <p className="text-textPrimary text-xs md:text-[16px] font-bold text-justify leading-5">
          {/* {item?.title} */}
          {lang === "ar"
            ? item?.program?.topic_title ?? item?.title
            : item?.program?.topic_title_en ?? item?.title}
        </p>
      </div>
      {(item?.presenter?.name || item?.lecturer) && (
        <>
          <div className="lecturer flex flex-col items-start gap-1">
            <h6 className="text-[11px] md:text-xs font-bold">
              <span className="text-sm text-[#7D7D7D]">{t("lecturer")}: </span>
              {/* {item?.lecturer} */}
              {lang === "ar"
                ? item?.presenter?.name ?? item?.lecturer
                : item?.presenter?.name_en ?? item?.lecturer}
            </h6>
            <span className="text-[#7a7a7a] text-sm font-semibold">
              {lang === "ar" ? item?.location : item?.location_ar}
            </span>
          </div>
          <div className="icons flex items-center gap-4 self-end">
            <div className="relative group">
              <div className="cursor-pointer" onClick={() => setOpen(true)}>
                <Image src={exclamation} alt="exclamation" />
              </div>
              <div className="absolute left-0 -bottom-10 w-fit text-nowrap p-2 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t("lecturerInfo")}
              </div>
            </div>

            {(label === "المحاضرات" ||
              label === "الدورات" ||
              label === "Lectures" ||
              label === "Courses") && (
              <div className="relative group">
                <div className="cursor-pointer">
                  <Image src={translation} alt="translation" />
                </div>
                <div className="absolute left-0 -bottom-10 w-fit text-nowrap p-2 bg-black text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label === "المحاضرات" || label === "Lectures"
                    ? t("instantTranslation")
                    : (label === "الدورات" || label === "Courses")
                    ? t("languageOffered")
                    : ""}
                </div>
              </div>
            )}

            <ModalLecturer
              open={open}
              setOpen={setOpen}
              data={item?.presenter || item}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityCard;
