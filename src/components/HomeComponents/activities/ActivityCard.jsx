import React from "react";
import imageTest from "@/assets/images/lec1.png";
import Image from "next/image";
const ActivityCard = ({item}) => {
  return (
    <div className="ActivityCard rounded-2xl border border-[#CECECE] p-3 lg:p-5 flex flex-col items-center justify-center gap-3 cursor-pointer">
      <div className="imageLec h-[80px] w-full rounded-xl overflow-hidden flex justify-start items-start">
        <Image
          src={item?.image}
          alt="imageTest"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className="activityContent lg:w-[80%]">
        <p className="text-textPrimary text-sm font-bold text-center leading-5">
            {item?.des}
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
