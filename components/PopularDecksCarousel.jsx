"use client";

import Deck from "./Deck";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const PopularDecksCarousel = ({ decks }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="popular-deck-slider mb-8"
      >
        {decks.map((deck) => {
          return (
            <SwiperSlide key={deck._id}>
              <Deck deck={deck} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default PopularDecksCarousel;
