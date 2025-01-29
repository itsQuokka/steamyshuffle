"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import { MdEmojiPeople } from "react-icons/md";

import { Gauge, UserRoundPlus, Smartphone } from "lucide-react";

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
                <CountUp start={2} end={5} duration={6} delay={1} />
              ) : null}
            </div>
            <p className="hidden xl:flex">
              Whether you're gearing up for a wild party or looking to spice
              things up with your romantic partner, Steamy Shuffle has a version
              for every vibe. Choose the energetic fun of "Party Mode" for
              unforgettable group moments, or turn up the heat with "Couples'
              Edition" to spark some deeper connections. If you're in the mood
              for playful competition, "Truth or Dare" will keep things lively,
              while "Flirty Fun" sets the stage for those intimate moments.
              Whatever you're after, Steamy Shuffle delivers the perfect game
              for every occasion.
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
                <CountUp start={39101} end={43201} duration={3} delay={1} />
              ) : null}
              +
            </div>
            <p className="hidden xl:flex">
              Join the countless others who have already discovered the fun and
              excitement of Steamy Shuffle! Thousands of players have grabbed
              their own copy and loved every moment, with rave reviews pouring
              in from all corners. Whether it's a casual hangout or a special
              night with a partner, people can't get enough of how it brings
              everyone together, creating laughter, connection, and
              unforgettable memories. It’s quickly becoming the go-to game for
              every party, and the feedback is clear—once you try it, you’ll be
              hooked too!
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0"
          >
            <Smartphone size={44} className=" text-accent mb-4" />
            <h3 className="h3">Easy Accessibility</h3>
            <div className="text-3xl font-black mb-2">
              {inView ? (
                <CountUp start={78} end={100} duration={3} delay={1} />
              ) : null}
              %
            </div>
            <p className="hidden xl:flex">
              Stop wasting money on card decks that get ruined when drinks are
              spilled—keep your game right on your phone and play anywhere,
              anytime. No more worrying about soggy cards or losing pieces. With
              a PDF version of the game, you’ve got it ready to go, and it’s
              always in perfect condition. Just pull it up on your device and
              enjoy the fun without the mess.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Why;
