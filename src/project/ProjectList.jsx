import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

     

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  source_website,
}) => {
  return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          option={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl scale-105"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer "
              >
                <img
                  src={github}
                  alt="github logo"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2  flex-col">
            {source_website.map((w) => (
              <a
                href={`https://${source_website}`}
                target="_blank"
                key={source_website}
                className="text-[14px]  underline"
              >
                {source_website}
              </a>
            ))}

            <div className="flex flex-row">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color} mr-2`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </Tilt>
      </motion.div>
  );
};

const Works = () => {
  return (
    <div className="bg-black py-16">
      <Navbar></Navbar>

      <div className="mt-20 flex flex-wrap justify-center gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project.${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="flex justify-center items-center ">
        <Link
          to="/"
          className="button justify-center flex items-center mt-20"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default  Works