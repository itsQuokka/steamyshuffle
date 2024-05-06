"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import { MdEmojiPeople, MdEco, MdOutlineSportsKabaddi } from "react-icons/md";

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
          className="h2 text-center"
        >
          Unmatched excellence and customer catisfaction
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          Our dedication to providing exceptional services sets us apart from
          the ceptition. From the moment you engage with us, we strive to exceed
          your expectations in every interaction.
        </motion.p>

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

        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
        >
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdEco className="text-[38px] text-accent mb-4" />
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
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdEmojiPeople className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Happy People</h3>
            <div className="text-3xl font-black mb-2">
              {inView ? (
                <CountUp start={294} end={341} duration={3} delay={1} />
              ) : null}
              +
            </div>
            <p className="hidden xl:flex">
              Get ready to laugh, blush, and bond with our game! Designed to
              bring joy and laughter to couples, creating unforgettable memories
              of happiness and love.
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <MdOutlineSportsKabaddi className="text-[38px] text-accent mb-4" />
            <h3 className="h3">Horny Couples</h3>
            <div className="text-3xl font-black mb-2">
              {inView ? (
                <CountUp start={49} end={100} duration={3} delay={1} />
              ) : null}
              %
            </div>
            <p className="hidden xl:flex">
              Heat things up in the bedroom with our steamy game for adventurous
              couples! Our games are the perfect way to explore fantasies,
              deepen intimacy, and keep the passion alive, leading to an
              increase in relationship satisfaction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
