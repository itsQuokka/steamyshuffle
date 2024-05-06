import Hero from "@/components/Hero";
import PopularDecks from "@/components/PopularDecks";
import Testimonial from "@/components/Testimonial";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Why />
      <PopularDecks />
      <Testimonial />
    </main>
  );
}
