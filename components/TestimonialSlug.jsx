"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { FaQuoteLeft } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import Image from "next/image";

const testimonialData = [
  {
    images: [
      "https://www.steamyshuffle.ca/_next/image?url=%2Fhero%2FMockUp_1.png&w=1920&q=100",
    ],
  },
];

const TestimonialSlug = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="py-24 flex flex-row"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((person, index) => {
          const { images } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <Image src={images[0]} alt="" width={250} height={250} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default TestimonialSlug;
