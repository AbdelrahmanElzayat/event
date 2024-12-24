import React from "react";
import Image from "next/image";
const ActivityCard = ({ item }) => {
  return (
    <div className="ActivityCard rounded-2xl border border-[#CECECE] p-3 lg:p-3 flex flex-col items-center justify-between gap-2 lg:gap-3 cursor-pointer">
      <div className="imageLec h-[220px] w-full rounded-xl overflow-hidden flex justify-start items-start">
        <Image
          src={item?.image}
          alt="imageTest"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <div className="activityContent lg:w-[80%]">
        <p className="text-textPrimary text-xs md:text-sm font-bold text-center leading-5">
          {item?.des}
        </p>
      </div>
      {item?.lecturer && (
        <div className="lecturer flex items-center gap-1">
          <span className="text-sm text-[#7D7D7D]">المحاضر: </span>
          <h6 className="text-[11px] md:text-xs font-bold">{item?.lecturer}</h6>
        </div>
      )}
    </div>
  );
};

export default ActivityCard;
