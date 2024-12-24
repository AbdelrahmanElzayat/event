import React from "react";
import Image from "next/image";
import personWithCat from "@/assets/images/events.png";
const EventTitle = () => {
  return (
    <div className="mt-28 flex flex-col gap-16 w-full text-center lg:text-right lg:basis-1/2">
      <div className="titleEvents flex flex-col items-center lg:items-start gap-4 lg:pr-20">
        <span className="text-textPrimary font-normal text-sm lg:text-xl">
          مخطط الحدث
        </span>
        <h2 className="text-textPrimary font-bold lg:font-extrabold text-2xl lg:text-[40px] w-1/2 leading-[45px]">
          أهمية الملتقى والتوقعات
        </h2>
      </div>
      <div className="ImgEvent block">
        <Image src={personWithCat} alt="events" style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
};

export default EventTitle;
