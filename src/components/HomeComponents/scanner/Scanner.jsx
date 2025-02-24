import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import QRCode from "react-qr-code";
import scanImg from "@/assets/images/scan.png";
const Scanner = () => {
  const { t } = useTranslation();
  const pdfPath = "/scan.pdf";
  return (
    <div className="Scanner my-4">
      <div className="container flex items-center justify-center">
        <div className="imgScan bg-backgroundBlue py-4 w-[250px] md:w-[600px]">
          <Image
            src={scanImg}
            alt=""
            style={{ maxHeight: "150px", objectFit: "contain" }}
          />
        </div>
      </div>
      {/* <div className="container flex justify-between items-center flex-wrap gap-3">
        <div className="scannerContent flex flex-col gap-3">
          <h4 className="font-bold text-textPrimary">{t("licensedBy")}</h4>
          <div className="flex flex-col justify-center">
            <span className="text-textSecondary font-semibold">
              الـــهــيــئـــة الـــعــامــــة لــلـــمــعــــارض
              والـــمــؤتــمــــرات
            </span>
            <span className="text-textSecondary font-semibold text-xs">
              SAUDI CONVENTIONS & EXHIBITIONS GENERAL AUTHORITY
            </span>
          </div>
        </div>
        <div>
          <QRCode
            size={100}
            style={{ maxWidth: "100%", width: "100%" }}
            // value={"hello"}
            value={`${
              "https://pawsevent-landing.netlify.app" ||
              "https://events.ppte.sa" ||
              "http://localhost:3000"
            }${pdfPath}`}
            viewBox={`0 0 256 256`}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Scanner;
