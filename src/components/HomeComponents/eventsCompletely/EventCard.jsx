import Image from "next/image";
import React from "react";
const EventCard = ({ event, isActive, onMouseEnter }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`flex flex-col items-start justify-center gap-2 transition-all cursor-pointer p-3 rounded-2xl py-3 ${
        isActive
          ? "bg-[#88BC3E] shadow-custom-heavy scale-105"
          : "hover:bg-[#88BC3E] hover:shadow-custom-heavy"
      }`}
      //   className={`flex flex-col items-start justify-center gap-2 transition-all cursor-pointer p-5 hover:bg-[#88BC3E] hover:shadow-custom-heavy hover:h-[260px] hover:w-[280px] rounded-[70px]`}
    >
      {/* <div className="iconEvent">
        <Image src={event?.image} alt="eventImg" width={100} height={100} />
      </div> */}
      <h3
        className={`titleEvent text-textPrimary font-bold text-sm lg:text-lg text-right pr-3 leading-[25px] ${
          isActive ? "text-white" : ""
        }`}
      >
        {event?.title}
      </h3>
      <p
        className={`descriptionEvent text-textSecondary opacity-90 font-light text-sm text-right pr-3 ${
          isActive ? "text-white" : ""
        }`}
      >
        {event?.des}
      </p>
    </div>
  );
};

export default EventCard;
