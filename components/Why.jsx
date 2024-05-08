"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import { MdEmojiPeople } from "react-icons/md";

import { Gauge, UserRoundPlus, Truck } from "lucide-react";

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
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-[680px] text-center mx-auto mb-2 text-primary/50"
        >
          A simple deck of cards can do wonders{" "}
          <br className="flex xl:hidden" />
          when you involve nudity and drinks.
        </motion.h5>

        {/* <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <Image src={"/hero/cards.png"} width={160} height={240} alt="" />
        </motion.div> */}

        <div className="flex flex-wrap justify-center mt-20 xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]">
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0"
          >
            <UserRoundPlus size={44} className=" text-accent mb-4" />
            <h3 className="h3"># of Decks</h3>
            <div className="text-3xl font-black mb-2">
              {inView ? (
                <CountUp start={0} end={3} duration={6} delay={1} />
              ) : null}
            </div>
            <p className="hidden xl:flex">
              Whether you're seeking sizzling encounters, meaningful
              conversations, or uproarious fun with friends, we've got you
              covered. Dive into the passion of the "Hot Version," delve into
              the depths of "Let's Get Deep," or put the spotlight on your pals
              with "Most Likely To." Whatever your mood, Steamy Shuffle brings
              the heat to any gathering.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
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
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0"
          >
            <Truck size={44} className=" text-accent mb-4" />
            <h3 className="h3">Free Shipping</h3>
            <div className="text-3xl font-black mb-2">
              {inView ? (
                <CountUp start={78} end={100} duration={3} delay={1} />
              ) : null}
              %
            </div>
            <p className="hidden xl:flex">
              Enjoy the convenience of free shipping on all orders with Steamy
              Shuffle. We believe that nothing should stand in the way of your
              excitement, which is why we offer complimentary shipping to ensure
              your decks arrive promptly and hassle-free. Sit back, relax, and
              let the anticipation build as you await your Steamy Shuffle
              experience to begin.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;
