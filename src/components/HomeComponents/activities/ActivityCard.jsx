"use client";
import React, { useState } from "react";
import Image from "next/image";
import exclamation from "@/assets/icons/exclamation.svg";
import translation from "@/assets/icons/translation.svg";
import ModalLecturer from "./ModalLecturer";
const ActivityCard = ({ item }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="ActivityCard rounded-2xl border border-[#CECECE] p-3 lg:p-3 flex flex-col items-start justify-between gap-2 lg:gap-3">
      <div className="imageLec h-[220px] w-full rounded-xl overflow-hidden flex justify-start items-start">
        <Image
          src={item?.image}
          alt="imageTest"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className="activityContent lg:w-[80%]">
        <p className="text-textPrimary text-xs md:text-[16px] font-bold text-right leading-5">
          {item?.title}
        </p>
      </div>
      {item?.lecturer && (
        <>
          <div className="lecturer flex flex-col items-start gap-1">
            <h6 className="text-[11px] md:text-xs font-bold">
              <span className="text-sm text-[#7D7D7D]">المحاضر: </span>
              {item?.lecturer}
            </h6>
            <span className="text-[#7a7a7a] text-sm font-semibold">
              {item?.location}
            </span>
          </div>
          <div className="icons flex items-center gap-4 self-end">
            <div
              className="cursor-pointer"
              title="معلومات عن المحاضر"
              onClick={() => setOpen(true)}
            >
              <Image src={exclamation} alt="exclamation" />
            </div>
            <div className="cursor-pointer" title="تقدم باللغة الانجليزية">
              <Image src={translation} alt="translation" />
            </div>
            <ModalLecturer open={open} setOpen={setOpen} data={item} />
          </div>
        </>
      )}
    </div>
  );
};

export default ActivityCard;
