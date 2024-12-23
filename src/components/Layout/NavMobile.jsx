import Link from "next/link";
import React from "react";

const NavMobile = ({ closeMenu }) => {
  const links = [
    { href: "/", label: "عن الملتقى" },
    { href: "#Expectations", label: "أهمية الملتقى و التوقعات" },
    { href: "#Exhibitors", label: "العارضيـن" },
    { href: "#events", label: "الأنشطة المصاحبة" },
    { href: "#contact-us", label: "تواصل معنا" },
  ];

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
              onClick={closeMenu}
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
