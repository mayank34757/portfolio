import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { styles } from "../../constants/styles";

const GENERAL_CV_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1y3aAILN0Bf4dd6lIkFh41L_mVhd5YJtH";
const GENERAL_CV_VIEW = "https://drive.google.com/file/d/1y3aAILN0Bf4dd6lIkFh41L_mVhd5YJtH/view?usp=sharing";
const SPECIALISED_CV_DOWNLOAD = "https://drive.google.com/uc?export=download&id=13e9ylusv6p-GIc2U9iy7p4W8YhgK4Jqd";
const SPECIALISED_CV_VIEW = "https://drive.google.com/file/d/13e9ylusv6p-GIc2U9iy7p4W8YhgK4Jqd/view?usp=sharing";

const Resume = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Section heading */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText}`}>MY CREDENTIALS</p>
        <h2 className={`${styles.sectionHeadText}`}>Resume.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="text-secondary mt-4 max-w-2xl text-center text-[17px] leading-[30px]"
      >
        Want to know more about my skills, projects, and education? Download my
        General CV or my Specialised CV below.
      </motion.p>

      {/* Glassy card */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.9)}
        className="relative mt-12 w-full max-w-3xl overflow-hidden rounded-3xl border border-[#915EFF]/30 bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 p-8 shadow-2xl backdrop-blur-sm"
      >
        {/* Purple glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#915EFF]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#6a3de8]/20 blur-3xl" />

        <div className="relative flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left: Info */}
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              {/* Animated dot */}
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#915EFF] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#915EFF]" />
              </span>
              <span className="text-[13px] font-semibold uppercase tracking-widest text-[#915EFF]">
                Available for Opportunities
              </span>
            </div>

            <h3 className="text-[26px] font-bold text-white leading-tight">
              Mayank Yadav
            </h3>
            <p className="text-secondary text-[15px]">
              B.Tech CSE &nbsp;·&nbsp; LPU &nbsp;·&nbsp; Full-Stack &amp; AI Developer
            </p>

            {/* Skills chips */}
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {["Java", "Python", "React.js", "Power BI", "Cloud"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 px-3 py-1 text-[12px] font-medium text-[#BF6CF7]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Buttons */}
          <div className="flex flex-col gap-3 min-w-[220px]">
            {/* General CV row */}
            <div className="flex items-center gap-2">
              <a
                href={GENERAL_CV_DOWNLOAD}
                download
                target="_blank"
                rel="noreferrer"
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold text-white transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #915EFF 0%, #6a3de8 100%)",
                  boxShadow: "0 0 20px #915EFF55",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 32px #915EFFaa")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 0 20px #915EFF55")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>
                General CV
              </a>
              {/* Eye / View Online icon */}
              <a
                href={GENERAL_CV_VIEW}
                target="_blank"
                rel="noreferrer"
                title="View General CV Online"
                className="flex items-center justify-center rounded-xl border border-[#915EFF]/50 p-3 text-[#915EFF] transition-all duration-300 hover:border-[#915EFF] hover:bg-[#915EFF]/10"
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

            {/* Specialised CV row */}
            <div className="flex items-center gap-2">
              <a
                href={SPECIALISED_CV_DOWNLOAD}
                download
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#915EFF]/50 px-5 py-3 text-[15px] font-semibold text-[#915EFF] transition-all duration-300 hover:border-[#915EFF] hover:bg-[#915EFF]/10"
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
                    d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>
                Specialised CV
              </a>
              {/* Eye / View Online icon */}
              <a
                href={SPECIALISED_CV_VIEW}
                target="_blank"
                rel="noreferrer"
                title="View Specialised CV Online"
                className="flex items-center justify-center rounded-xl border border-[#915EFF]/50 p-3 text-[#915EFF] transition-all duration-300 hover:border-[#915EFF] hover:bg-[#915EFF]/10"
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
        </div>

        {/* Bottom divider + hint */}
        <div className="relative mt-6 border-t border-[#915EFF]/20 pt-4 text-center">
          <p className="text-[12px] text-[#aaa] tracking-wide">
            PDF · Last updated Mar 2025 · Includes projects, certifications &amp; education
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");
