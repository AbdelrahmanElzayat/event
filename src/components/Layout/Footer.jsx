import React from "react";

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-backgroundBlue flex justify-center items-center py-3">
      <div className="container">
        <p className="text-center text-textPrimary text-sm font-normal">
          جميع الحقوق محفوظة©{" "}
          <span className="font-bold">شركة منتجات الحيوان</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
