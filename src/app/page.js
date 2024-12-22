import Activities from "@/components/HomeComponents/activities/Activities";
import Clients from "@/components/HomeComponents/clients/Clients";
import DatePlace from "@/components/HomeComponents/dateAndPlace/DatePlace";
import Events from "@/components/HomeComponents/eventsCompletely/Events";
import Hero from "@/components/HomeComponents/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Clients />
      <Events />
      <DatePlace />
      <Activities />
    </div>
  );
}
