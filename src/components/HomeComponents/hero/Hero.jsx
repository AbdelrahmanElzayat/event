import Image from "next/image";
import React from "react";
import aicats from "@/assets/images/aicats.png";
import scrollOld from "@/assets/images/scrollImg.png";
const Hero = () => {
  return (
    <section className="hero bg-backgroundPrimary pt-10">
      <div className="hidden lg:block absolute -top-12 -right-3 z-[10000]">
        <Image src={scrollOld} alt="scrollOld" />
      </div>
      <div className="container">
        <div className="heroContainer flex flex-col lg:flex-row gap-12 justify-between items-center">
          <h1 className="basis-[40%] text-textPrimary text-2xl xs:text-3xl md:text-4xl lg:text-[60px] font-extrabold capitalize text-right lg:leading-[65px]">
            معرض مبتكر للحيوانات الأليفة في السعودية
          </h1>
          <div className="aiContant">
            <div className="imgCats relative bottom-0 basis-[60%] self-end">
              <div className="catsContent lg:absolute top-0 right-0 lg:-right-[20%] flex flex-col items-center justify-center rounded-3xl bg-white shadow-custom w-full lg:w-96 px-4 pb-6">
                <span className="rounded-full bg-[#292524] text-white font-bold capitalize text-center px-12 py-2 relative -top-5">
                  عن الملتقى
                </span>
                <p className="text-center text-textSecondary text-sm opacity-90 leading-5 font-light">
                  هو حدث حصري مخصص لقطاع الحيوانات الأليفة في المملكة العربية
                  السعودية. سيوفر هذا الحدث بيئة تجارية مناسبة للعملاء وممثلي
                  الشركاتمن موردي العلامات التجارية بغرض استعراض المنتجات، بناء
                  قنوات التواصل، بناء القدرات، تبادل التطلعات واستكشاف الفرص
                  التجارية ونمو الأعمال.
                </p>
              </div>
              <div className="aiCats relative top-12 z-50">
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
