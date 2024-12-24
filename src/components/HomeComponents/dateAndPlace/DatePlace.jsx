import React from "react";
import locationIcon from "@/assets/icons/location.svg";
import dateIcon from "@/assets/icons/date.svg";
import Image from "next/image";
import ImgPlace from "./ImgPlace";
const DatePlace = () => {
  return (
    <div className="DatePlace mb-20">
      <div className="container">
        <div className="headerDate mb-5 flex flex-col gap-4">
          {/* <span className="text-textPrimary font-normal text-sm lg:text-[20px]">
            تفاصيل المبادرة
          </span> */}
          <h2 className="text-textPrimary font-bold lg:font-extrabold text-2xl lg:text-[40px] mb-4">
            المكان والتاريخ
          </h2>
        </div>
        <div className="datesContainer bg-backgroundBlue rounded-[38px] px-10 py-8 flex gap-[100px] relative">
          <div className="datesData lg:basis-[60%] grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="datesCard flex justify-start items-center gap-5">
              <div className="datesCardIcon rounded-2xl bg-[#DFE8E5] flex items-center justify-center w-[50px]  py-5">
                <Image src={locationIcon} alt="location" />
              </div>
              <div className="datesCardText flex flex-col gap-0">
                <span className="text-[15px] text-textPrimary opacity-90 font-light">
                  موقع الحدث
                </span>
                <h3 className="text-[16px] text-textPrimary font-bold">
                  برج الفيصلية - الرياض
                </h3>
                <h3 className="text-[20px] text-textPrimary font-bold">
                  قاعة الأمير سلطان الكبرى
                </h3>
              </div>
            </div>
            <div className="datesCard flex justify-start items-center gap-5">
              <div className="datesCardIcon rounded-2xl bg-[#DFE8E5] flex items-center justify-center w-[50px]  py-5">
                <Image src={dateIcon} alt="location" />
              </div>
              <div className="datesCardText flex flex-col gap-2">
                <span className="text-[15px] text-textPrimary opacity-90 font-light">
                  التاريخ
                </span>
                <h3 className="text-[20px] text-textPrimary font-bold">
                  23rd & 24th January 2025
                </h3>
              </div>
            </div>
            <div className="datesCard flex justify-start items-center gap-5">
              <div className="datesCardIcon rounded-2xl bg-[#DFE8E5] flex items-center justify-center w-[50px] py-5 text-black font-semibold text-[25px] text-center">
                1
              </div>
              <div className="datesCardText flex flex-col">
                <span className="text-[15px] text-textPrimary opacity-90 font-light mb-2">
                  الموعد
                </span>
                <h3 className="text-[20px] text-textPrimary font-bold">
                  وقت المعرض المصاحب
                </h3>
                <span className="text-textPrimary font-normal text-[15px]">
                  04.00PM ~ 10.00PM{" "}
                </span>
              </div>
            </div>
          </div>
          <div className="datesImage hidden lg:block basis-[25%] bg-[#88BC3E] rounded-[37px_37px_0px_0px] h-[300px] w-[300px]  absolute left-[10%] bottom-0">
            <ImgPlace />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePlace;
