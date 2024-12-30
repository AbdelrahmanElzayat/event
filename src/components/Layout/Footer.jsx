import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer
      id="contact-us"
      className="bg-backgroundBlue flex justify-center items-center py-3"
    >
      <div className="container">
        <p className="text-center text-textPrimary text-sm font-normal">
          {t("allRightsReserved")}{" "}
          <span className="font-bold">{t("companyName")}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
