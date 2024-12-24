import React from "react";
import Image from "next/image";
import EventTitle from "./EventTitle";
import EventsCards from "./EventsCards";
import OldImg from "@/assets/images/headerEvents.png";
const Events = () => {
  return (
    <div
      id="Expectations"
      className="events overflow-hidden mb-20"
    >
      <div className="container">
        <div
          className={`relative flex flex-col lg:flex-row justify-between items-center lg:items-start lg:pl-20 bg-[#F6F1EE] rounded-[50px]`}
        >
          <div className="topEvents absolute top-0 right-0">
            <Image src={OldImg} alt="topOldImg" />
          </div>
          <EventTitle />
          <EventsCards />
        </div>
      </div>
    </div>
  );
};

export default Events;
