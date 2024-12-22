import Link from "next/link";
import React from "react";
import style from "./header.module.css";
const Navbar = () => {
  return (
    <nav className={`${style.navbar}`}>
      <ul className="flex items-center justify-center gap-16">
        <li>
          <Link
            href={"##"}
            className="text-textPrimary opacity-90 text-sm font-normal uppercase"
          >
            الملتقى
          </Link>
        </li>
        <li>
          <Link
            href={"##"}
            className="text-textPrimary opacity-90 text-sm font-normal uppercase"
          >
            أهمية الملتقى و التوقعات
          </Link>
        </li>
        <li>
          <Link
            href={"##"}
            className="text-textPrimary opacity-90 text-sm font-normal uppercase"
          >
            العارضيـن
          </Link>
        </li>
        <li>
          <Link
            href={"##"}
            className="text-textPrimary opacity-90 text-sm font-normal uppercase"
          >
            الأنشطة المصاحبة
          </Link>
        </li>
        <li>
          <Link
            href={"##"}
            className="text-textPrimary opacity-90 text-sm font-normal uppercase"
          >
            الجلسات التدريبية
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
