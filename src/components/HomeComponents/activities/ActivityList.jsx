import React from "react";
import ActivityCard from "./ActivityCard";

const DaySection = ({ title, data, label }) => (
  <div className="mb-8">
    <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-4 text-center border-b-2 border-[#88BC3E] pb-2">
      {title}
    </h2>
    <div className="ListCards grid grid-cols-2 lg:grid-cols-4 gap-5">
      {data.map((item, i) => (
        <ActivityCard key={i} item={item} label={label} />
      ))}
    </div>
  </div>
);

const ActivityList = ({ label, data }) => {
  return (
    <div className="ActivityCards">
      <div className="activityHeader flex items-center gap-4 mb-6">
        <span className="w-[6px] h-[18px] bg-[#88BC3E] rounded-[15px]"></span>
        <h4 className="label text-textPrimary font-bold lg:font-extrabold text-lg lg:text-[22px] text-right">
          {label}
        </h4>
      </div>
      {label === "المحاضرات" ? (
        <>
          <DaySection
            title="اليوم الأول"
            data={data.slice(0, 4)}
            label={label}
          />
          <DaySection
            title="اليوم الثاني"
            data={data.slice(4, 8)}
            label={label}
          />
        </>
      ) : label === "ورش العمـل" ? (
        <>
          <DaySection
            title="اليوم الأول"
            data={data.slice(0, 5)}
            label={label}
          />
          <DaySection
            title="اليوم الثاني"
            data={data.slice(5, 9)}
            label={label}
          />
        </>
      ) : (
        <div className="ListCards grid grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((item, i) => (
            <ActivityCard key={i} item={item} label={label} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivityList;
