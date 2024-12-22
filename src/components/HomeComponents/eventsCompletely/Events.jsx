import React from "react";
import style from "./events.module.css";
import Image from "next/image";
import bgImg from "@/assets/images/bgEvents.svg";
import EventTitle from "./EventTitle";
import EventsCards from "./EventsCards";
import OldImg from "@/assets/images/headerEvents.png";
const Events = () => {
  return (
    <div className="events overflow-hidden mb-20">
      <div className="container">
        <div
          className={`relative flex flex-col lg:flex-row justify-between items-start lg:pl-20 bg-[#F6F1EE] rounded-[50px]`}
        >
          <div className="topEvents absolute top-0 right-0">
            <Image src={OldImg} alt="topOldImg" />
          </div>
          {/* <div className="bgImg absolute top-0 left-0 w-full -z-10">
            <Image
              src={bgImg}
              alt="bg"
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
            />
          </div> */}
          <EventTitle />
          <EventsCards />
        </div>
      </div>
    </div>
  );
};

export default Events;
