import { useState } from "react";
import { createContext } from "react";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("ar");

  const { i18n } = useTranslation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // التأكد من أن الكود يعمل في المتصفح فقط
      const langLocal = localStorage.getItem("lang");
      if (langLocal) {
        setLang(langLocal);
      } else {
        localStorage.setItem("lang", lang); // حفظ اللغة الافتراضية في localStorage
      }
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

   const changeLanguage = (newLang) => {
     i18n.changeLanguage(newLang); // استخدام دالة changeLanguage من i18next
     setLang(newLang); // تحديث اللغة في context
     localStorage.setItem("lang", newLang); // حفظ اللغة في localStorage
   };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        changeLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
