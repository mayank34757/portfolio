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
          <div className="mt-2 flex items-center gap-3 sm:mt-0">
            <div className="rounded-lg bg-[#232631] px-4 py-2 text-center">
              <p className="text-secondary text-[13px]">🗓 {ngoWork.period}</p>
            </div>
            {/* View Certificate Eye Icon */}
            <a
              href="https://drive.google.com/file/d/1Bt15CxGq1CCRSBbRGQSuGXDXkLOGEONW/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              title="View Certificate"
              className="flex items-center justify-center rounded-lg border border-[#915EFF]/50 p-2 text-[#915EFF] transition-all duration-300 hover:border-[#915EFF] hover:bg-[#915EFF]/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </a>
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
