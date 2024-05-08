"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import { MdEmojiPeople, MdEco } from "react-icons/md";

import { Gauge, Clock10 } from "lucide-react";

const Why = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section flex items-center mb-2" id="why" ref={ref}>
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="h2 text-center mb-2 xl:mb-4"
        >
          FROM <span className="text-accent">SHOTS</span> TO THE{" "}
          <span className="text-accent">SHEETS</span>
        </motion.h2>
        <motion.h5
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2 text-primary/50"
        >
          A simple deck of cards can do wonders for building relationships{" "}
          <br className="flex xl:hidden" />
          when you involve nudity and drinks.
        </motion.h5>

        {/* Image */}
        {/* <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <Image src={"/hero/cards.png"} width={160} height={240} alt="" />
        </motion.div> */}

        {/* Grid Items */}

        <div className="flex flex-wrap justify-center mt-20 xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]">
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0"
          >
            <Clock10 size={44} className=" text-accent mb-4" />
            <h3 className="h3">Eco-Friendly</h3>
            <div className="text-3xl font-black mb-2">
              {inView ? (
                <CountUp start={73} end={100} duration={6} delay={1} />
              ) : null}
              %
            </div>
            <p className="hidden xl:flex">
              For those of you who are looking for more ways to help the earth,
              we have a more sustainable card stock made from grass and the
              leafy parts of plants called the E27 Eco-herbage stock. This stock
              has a more raw and natural color to it with visible fibers.
              <br /> Let us know after you purchase!
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0"
          >
            <MdEmojiPeople size={44} className=" text-accent mb-4" />
            <h3 className="h3">Total Buyers</h3>
            <div className="text-3xl font-black mb-2">
              {inView ? (
                <CountUp start={3103} end={3195} duration={3} delay={1} />
              ) : null}
              +
            </div>
            <p className="hidden xl:flex">
              Get ready to laugh, blush, and bond with our game! <br />
              Designed to bring joy and laughter to couples, creating
              unforgettable memories of intimacy, happiness and love. As a new
              business, we are so excited to see how many people love our game!
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0"
          >
            <Gauge size={44} className=" text-accent mb-4" />
            <h3 className="h3">Sex Drive</h3>
            <div className="text-3xl font-black mb-2">
              {inView ? (
                <CountUp start={78} end={100} duration={3} delay={1} />
              ) : null}
              %
            </div>
            <p className="hidden xl:flex">
              Our games are designed to spark the flame in your relationship.
              Between the challenges, activities and questions, Steamy Shuffle
              will lead you to the bedroom faster than you can open the package.
              <br />
              Can you last past 15 cards?
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;
