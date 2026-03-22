import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { Header } from "../atoms/Header";

const Tech = () => {
  return (
    <>
      <Header useMotion={true} p="My skills" h2="Technologies." />
      <div className="mt-14 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center gap-2" key={technology.name}>
            <div className="h-28 w-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="text-secondary text-center text-[13px] font-medium">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
