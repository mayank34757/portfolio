import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { mayank } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { styles } from "../../constants/styles";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* ── Top row: text on left, portrait on right ── */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">

        {/* LEFT: header + bio */}
        <div className="flex flex-1 flex-col justify-center">
          <Header useMotion={true} {...config.sections.about} />

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary mt-6 text-[17px] leading-[32px]"
          >
            {config.sections.about.content}
          </motion.p>

          {/* Skill tags */}
          <motion.div
            variants={fadeIn("up", "spring", 0.3, 0.9)}
            className="mt-6 flex flex-wrap gap-2"
          >
            {["Java", "C++", "Python", "JavaScript", "React.js", "SQL", "Power BI", "Cloud Computing"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 px-3 py-1 text-[13px] font-medium text-[#BF6CF7]"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT: full portrait photo — creative angled card */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.9)}
          className="relative flex-shrink-0 lg:w-[340px]"
        >
          {/* Decorative corner accent */}
          <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl border-2 border-[#915EFF]/40" />

          {/* Glow blob behind photo */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#915EFF]/30 via-[#6a3de8]/15 to-transparent blur-2xl" />

          {/* Photo card */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={mayank}
              alt="Mayank Yadav"
              className="h-[420px] w-full object-cover object-top lg:h-[480px]"
            />

            {/* Bottom gradient overlay with name */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-5 pt-12">
              <p className="text-[18px] font-bold text-white">Mayank Yadav</p>
              <p className="text-[13px] font-medium text-[#915EFF]">
                CSE @ LPU &nbsp;·&nbsp; Full-Stack &amp; AI Developer
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Service cards row ── */}
      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
