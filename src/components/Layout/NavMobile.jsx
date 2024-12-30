import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";

const NavMobile = ({ closeMenu }) => {
  const { t } = useTranslation();
  const links = [
    { href: "/", label: t("aboutHero") },
    { href: "#Expectations", label: t("importanceNav") },
    { href: "#Exhibitors", label: t("exhibitors") },
    { href: "#events", label: t("accompanyingActivities") },
    { href: "#contact-us", label: t("contactUs") },
  ];

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full h-full bg-backgroundPrimary z-[999] flex flex-col items-center justify-center gap-8">
      <button
        className="absolute top-4 right-4 text-textPrimary text-2xl font-bold"
        onClick={closeMenu}
      >
        ✕
      </button>
      <ul className="flex flex-col items-center justify-center gap-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="text-textPrimary text-lg font-medium uppercase"
              onClick={() => {
                closeMenu();
                pathname === "/" ? window.scrollTo(0, 0) : closeMenu();
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
