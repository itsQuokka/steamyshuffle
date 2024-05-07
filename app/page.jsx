import Hero from "@/components/Hero";
import PopularDecks from "@/components/PopularDecks";
import Testimonial from "@/components/Testimonial";
import Why from "@/components/Why";
import Image from "next/image";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import ReactGA from "react-ga";

ReactGA.initialize("G-XZ495Z9CZK");

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    <main>
      <Hero />
      <Why />
      <PopularDecks />
      <Testimonial />
    </main>
  );
}
