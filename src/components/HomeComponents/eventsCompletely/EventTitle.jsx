import React from "react";
import Image from "next/image";
import personWithCat from "@/assets/images/events.png";
import { useTranslation } from "react-i18next";
const EventTitle = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-24 lg:mt-28 flex flex-col gap-16 w-full text-center lg:text-right lg:basis-1/2">
      <div className="titleEvents flex flex-col items-center lg:items-start lg:gap-4 lg:pr-20">
        {/* <span className="text-textPrimary font-normal text-sm lg:text-xl">
          مخطط الحدث
        </span> */}
        <h2 className="text-textPrimary font-bold lg:font-extrabold text-2xl lg:text-[40px] lg:w-1/2 lg:leading-[45px]">
          {/* أهمية الملتقى والتوقعات */}
          {t("importance")}
        </h2>
      </div>
      <div className="ImgEvent block">
        <Image src={personWithCat} alt="events" style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
};

export default EventTitle;
