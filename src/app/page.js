import Activities from "@/components/HomeComponents/activities/Activities";
import Clients from "@/components/HomeComponents/clients/Clients";
import DatePlace from "@/components/HomeComponents/dateAndPlace/DatePlace";
import Events from "@/components/HomeComponents/eventsCompletely/Events";
import Hero from "@/components/HomeComponents/hero/Hero";
import JoinNow from "@/components/HomeComponents/joinNow/JoinNow";

export default async function Home() {
   const response = await fetch(
     "https://hub.ppte.sa/event_handler/api/events",
     {
       cache: "no-store", // تعطيل الكاش
     }
   );
  if (!response.ok) {
    throw new Error("Faild to fetch events !");
  }
  const events = await response.json();

  console.log(events);
  
  return (
    <div className="home">
      <Hero />
      <Clients />
      <Events />
      <DatePlace />
      <Activities />
      <JoinNow events={events} />
    </div>
  );
}
