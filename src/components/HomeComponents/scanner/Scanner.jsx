import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import QRCode from "react-qr-code";

const Scanner = () => {
  const { t } = useTranslation();
  const pdfPath = "/scan.pdf";
  return (
    <div className="Scanner py-4 bg-backgroundPrimary">
      <div className="container flex justify-between items-center flex-wrap">
        <div className="scannerContent flex flex-col gap-3">
          <h4 className="font-bold text-textPrimary">{t("licensedBy")}</h4>
          <div className="flex flex-col justify-center">
            <span className="text-textSecondary font-semibold text-xs">
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
      </div>
    </div>
  );
};

export default Scanner;
