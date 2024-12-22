import React from "react";
import ActivityCard from "./ActivityCard";

const ActivityList = ({ label, data }) => {
  return (
    <div className="ActivityCards">
      <div className="activityHeader flex items-center gap-4 mb-6">
        <span className="w-[6px] h-[18px] bg-[#88BC3E] rounded-[15px]"></span>
        <h4 className="label text-textPrimary font-bold lg:font-extrabold text-lg lg:text-[22px] text-right">
          {label}
        </h4>
      </div>
      <div className="ListCards grid grid-cols-2 lg:grid-cols-4 gap-5">
        {data?.map((item, i) => (
          <ActivityCard key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
