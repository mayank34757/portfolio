import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { ngoWork } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../constants/styles";

const NGOSection = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Community Work</p>
        <h2 className={styles.sectionHeadText}>Volunteer Experience.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-10 rounded-2xl bg-[#1d1836] p-8"
      >
        {/* Header */}
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-[22px] font-bold text-white">{ngoWork.role}</h3>
            <p className="mt-1 text-[16px] font-semibold text-[#915EFF]">
              {ngoWork.orgName}
            </p>
            <p className="text-secondary mt-1 text-[14px]">📍 {ngoWork.location}</p>
          </div>
          <div className="mt-2 rounded-lg bg-[#232631] px-4 py-2 text-center sm:mt-0">
            <p className="text-secondary text-[13px]">🗓 {ngoWork.period}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-white-100 mb-6 text-[15px] leading-relaxed">
          {ngoWork.description}
        </p>

        {/* Divider */}
        <div className="mb-5 h-px bg-[#aaa6c3]/20" />

        {/* Points */}
        <ul className="space-y-3">
          {ngoWork.points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1 text-[#915EFF]">▸</span>
              <p className="text-white-100 text-[14px] leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>

        {/* Bottom badge */}
        <div className="mt-6 flex flex-wrap gap-2">
          {["Teaching", "Mentoring", "Social Work", "Community Service", "LPU B.Tech CSE"].map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#232631] px-3 py-1 text-[12px] font-medium text-[#aaa6c3]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(NGOSection, "ngo");
