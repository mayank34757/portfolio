import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="w-full sm:w-[calc(50%-14px)] xl:w-[calc(25%-21px)]"
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        glareColor="#aaa6c3"
        className="h-full"
      >
        <div className="bg-tertiary flex h-full flex-col rounded-2xl p-5">
          {/* Image */}
          <div className="relative h-[180px] w-full flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover"
            />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="mt-4 flex flex-1 flex-col">
            <h3 className="text-[18px] font-bold text-white leading-snug">{name}</h3>
            <p className="text-secondary mt-2 flex-1 text-[13px] leading-relaxed">{description}</p>

            <div className="mt-3 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[12px] font-medium ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      {/* 4 cards in one row on large screens */}
      <div className="mt-20 flex flex-wrap gap-7 items-stretch">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
