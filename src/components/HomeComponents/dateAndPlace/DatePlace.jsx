import React, { useContext } from "react";
import locationIcon from "@/assets/icons/location.svg";
import dateIcon from "@/assets/icons/date.svg";
import Image from "next/image";
import ImgPlace from "./ImgPlace";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/context/LanguageContext";
const DatePlace = () => {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  return (
    <div className="DatePlace mb-8 lg:mb-20">
      <div className="container">
        <div className="headerDate mb-5 flex flex-col gap-4">
          {/* <span className="text-textPrimary font-normal text-sm lg:text-[20px]">
            تفاصيل المبادرة
          </span> */}
          <h2 className="text-textPrimary font-bold lg:font-extrabold text-2xl lg:text-[40px] mb-4 text-center lg:text-justify">
            {t("locationAndDate")}
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
                  {t("location")}
                </span>
                <h3 className="text-[16px] text-textPrimary font-bold">
                  {t("venue")}
                </h3>
                <h3 className="text-[20px] text-textPrimary font-bold">
                  {t("hall")}
                </h3>
              </div>
            </div>
            <div className="datesCard flex justify-start items-center gap-5">
              <div className="datesCardIcon rounded-2xl bg-[#DFE8E5] flex items-center justify-center w-[50px]  py-5">
                <Image src={dateIcon} alt="location" />
              </div>
              <div className="datesCardText flex flex-col gap-2">
                <span className="text-[15px] text-textPrimary opacity-90 font-light">
                  {t("date")}
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
                  {t("time")}
                </span>
                <h3 className="text-[20px] text-textPrimary font-bold">
                  {t("exhibitionTime")}
                </h3>
                <span className="text-textPrimary font-normal text-[15px]">
                  04.00PM ~ 10.00PM{" "}
                </span>
              </div>
            </div>
          </div>
          <div
            className={`datesImage hidden lg:block basis-[25%] bg-[#88BC3E] rounded-[37px_37px_0px_0px] h-[300px] w-[300px]  absolute  bottom-0`}
            style={{ left: lang === "ar" ? "10%" : "70%" }}
          >
            <ImgPlace />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatePlace;
