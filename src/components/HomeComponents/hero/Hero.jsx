import Image from "next/image";
import React, { useContext } from "react";
import aicats from "@/assets/images/aicats.png";
import scrollOld from "@/assets/images/scrollImg.png";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "@/context/LanguageContext";
import style from "./Hero.module.css";
const Hero = () => {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  return (
    <section className="hero bg-backgroundPrimary pt-12 lg:pt-16">
      <div
        className="hidden lg:block absolute -top-12 z-[10000]"
        style={{ right: lang === "ar" ? "-12px" : "auto" }}
      >
        <Image src={scrollOld} alt="scrollOld" />
      </div>
      <div className="container">
        <div className="heroContainer flex flex-col lg:flex-row gap-12 justify-between items-center">
          <h1
            className="basis-[40%] text-textPrimary text-2xl xs:text-3xl md:text-4xl lg:text-[60px] text-center lg:text-right font-extrabold capitalize lg:leading-[65px]"
            style={{ textAlign: lang === "ar" ? "right" : "left" }}
          >
            {/* ملتقى نخبة الأعمال في قطاع رعاية الحيوانات الأليفة */}
            {t("titleHero")}
          </h1>
          <div className="aiContant">
            <div
              className="imgCats relative bottom-0 basis-[60%] self-end"
              // style={{ transform: "scaleX(-1)" }}
            >
              <div
                className={`${
                  lang === "ar" ? style.catsContent : style.catsContent_en
                } lg:absolute top-0 flex flex-col items-center justify-center rounded-3xl bg-white shadow-custom w-full lg:w-96 px-4 pb-6`}
              >
                <span className="rounded-full bg-[#292524] text-white font-bold capitalize text-center px-12 py-2 relative -top-5">
                  {t("aboutHero")}
                </span>
                <p className="text-center text-textSecondary text-sm opacity-90 leading-5 font-light">
                  {t("descHero")}
                </p>
              </div>
              <div
                className="aiCats relative top-12 z-50"
                style={{ transform: lang === "en" ? "scaleX(-1)" : "" }}
              >
                <Image src={aicats} alt="cats" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
