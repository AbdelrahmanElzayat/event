import Link from "next/link";
import React from "react";
import style from "./header.module.css";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t } = useTranslation();
  return (
    <nav className={`${style.navbar}`}>
      <ul className="flex items-center justify-center gap-8">
        <li>
          <Link
            href={"/"}
            className="text-textPrimary opacity-90 text-sm font-normal uppercase"
            onClick={() => window.scrollTo(0, 0)}
          >
            {t("aboutHero")}
          </Link>
        </li>
        <li>
          <Link
            href={"#Expectations"}
            className="text-textPrimary opacity-90 text-sm font-normal uppercase"
          >
            {t("importanceNav")}
          </Link>
        </li>
        <li>
          <Link
            href={"#Exhibitors"}
            className="text-textPrimary opacity-90 text-sm font-normal uppercase"
          >
            {t("exhibitors")}
          </Link>
        </li>
        <li>
          <Link
            href={"#events"}
            className="text-textPrimary opacity-90 text-sm font-normal uppercase"
          >
            {t("accompanyingActivities")}
          </Link>
        </li>
        <li>
          <Link
            href={"#contact-us"}
            className="text-textPrimary opacity-90 text-sm font-normal uppercase"
          >
            {t("contactUs")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
