import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { certifications } from "../../constants";

import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TCertification } from "../../types";
import { config } from "../../constants/config";


const CertificationCard: React.FC<TCertification> = (certification) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={certification.date}
      iconStyle={{ background: "#232631", color: "#fff" }}
      icon={
        <div className="flex h-full w-full items-center justify-center text-2xl">
          🎓
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{certification.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {certification.provider}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {certification.points.map((point, index) => (
          <li
            key={`certification-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>

      {certification.link && (
        <a
          href={certification.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-lg bg-[#915EFF] px-4 py-2 text-[13px] font-semibold text-white transition-opacity hover:opacity-80"
        >
          🔗 View Certificate
        </a>
      )}
    </VerticalTimelineElement>
  );
};

const Certifications = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
