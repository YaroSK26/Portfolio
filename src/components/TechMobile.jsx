import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img className="bg-gray-50 rounded-full w-28 h-28 p-3" alt="logos of tech companies" src={technology.icon} />
          </div>
        ))}
      </div>
      <br />
      <div className="flex justify-center items-center text-lg animate-bounce">
        And much more...
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
