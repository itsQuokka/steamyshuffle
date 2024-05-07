"use client";
import Image from "next/image";
import Link from "next/link";

import { motion, easeInOut } from "framer-motion";
import { fadeIn } from "@/variants";

const Hero = () => {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-[#FFFFFF]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Text */}

          <div className="w-full xl:-max-w-[580px] md:h-[820px] flex flex-col justify-center items-start">
            <motion.h1
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="text-center mx-auto xl:text-left mb-6"
            >
              Where <span className="text-accent">Pleasure</span> Awaits
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0"
            >
              From sensual massages to daring role-playing scenarios, the
              challenges found in "Steamy Shuffle" are crafted to inspire
              laughter, affection, and yes, even a few blushes. But amidst the
              playful banter and steamy exchanges, there's an underlying message
              of love and connection, reminding couples of the power of intimacy
              to strengthen their bond and reignite the spark in their
              relationship.
            </motion.p>
            {/* Button Group */}
            <motion.h5
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="text-center xl:text-left mb-6"
            >
              An <span className="text-accent">Independent</span> Business
            </motion.h5>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="flex items-center gap-4 mx-auto xl:mx-0"
            >
              <Link href="/our-decks" className="mx-auto md:mx-0">
                <button className="btn btn-primary">Shop Now</button>
              </Link>
              <Link href="/our-decks" className="mx-auto md:mx-0">
                <button className="btn btn-accent">Our Decks</button>
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="hidden xl:flex"
          >
            <Image
              src="/hero/MockUp_1.png"
              width={960}
              height={768}
              alt=""
              quality={100}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
