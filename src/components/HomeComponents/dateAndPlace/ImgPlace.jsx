import React from "react";
import placeImg from "@/assets/images/dateplace.png";
import Image from "next/image";
const ImgPlace = () => {
  return (
    <div className="ImgPlace absolute bottom-0 left-0">
      <Image src={placeImg} alt="place" />
    </div>
  );
};

export default ImgPlace;
