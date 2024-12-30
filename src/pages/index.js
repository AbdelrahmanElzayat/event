// pages/index.tsx
import Activities from "@/components/HomeComponents/activities/Activities";
import Clients from "@/components/HomeComponents/clients/Clients";
import DatePlace from "@/components/HomeComponents/dateAndPlace/DatePlace";
import Events from "@/components/HomeComponents/eventsCompletely/Events";
import Hero from "@/components/HomeComponents/hero/Hero";
import JoinNow from "@/components/HomeComponents/joinNow/JoinNow";
import { LanguageContext } from "@/context/LanguageContext";
import i18n from "@/i18n";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export async function getStaticProps() {
  const response = await fetch("https://hub.ppte.sa/event_handler/api/events", {
    cache: "no-store", // تعطيل الكاش
  });

  if (!response.ok) {
    throw new Error("Failed to fetch events!");
  }

  const events = await response.json();

  return {
    props: { events },
  };
}
// export async function getServerSideProps() {
//   const response = await fetch("https://hub.ppte.sa/event_handler/api/events");

//   if (!response.ok) {
//     throw new Error("Failed to fetch events!");
//   }

//   const events = await response.json();

//   return {
//     props: { events },
//   };
// }
export default function Home({ events }) {
  const { lang } = useContext(LanguageContext);
  const { t } = useTranslation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const langLocal = localStorage.getItem("lang");
      if (langLocal && ["en", "ar"].includes(langLocal)) {
        i18n.changeLanguage(langLocal); // Set the language from local storage
      }
    }
  }, []);
  return (
    <div className="home" dir={lang === "ar" ? "rtl" : "ltr"}>
      <Hero />
      <Clients />
      <Events />
      <DatePlace />
      <Activities />
      {/* <JoinNow events={events} /> */}
      <JoinNow />
    </div>
  );
}
