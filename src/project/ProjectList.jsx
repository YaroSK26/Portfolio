import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { github } from "../assets";
import { projects,technologies } from "../constants";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";
import { useState } from "react";

     

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
const FilterTags = ({ tags, onFilterChange }) => {
  return (
    <div>
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="bg-tertiary text-white py-4 px-6  rounded-lg outline-none w-[250px]"
      >
        <option value="">Select a tag to filter...</option>
        {tags.map((tag) => (
          <option key={tag.name} value={tag.name}>
            {tag.name}
          </option>
        ))}
      </select>
    </div>
  );
};

const getAllTags = (projects) => {
  const allTags = projects.flatMap((project) =>
    project.tags.map((tag) => tag.name)
  );
  return [...new Set(allTags)]; // Odstráni duplikáty
};

const Works = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [nameFilter, setNameFilter] = useState("");

const uniqueTags = getAllTags(projects);
const tagObjects = uniqueTags.map((tagName) => ({
  name: tagName,
  color: "text-white-200",
}));

 const handleFilterChange = (filter) => {
   setActiveFilter(filter);
 };

 const handleNameChange = (event) => {
   setNameFilter(event.target.value); // Aktualizácia stavu podľa vstupu užívateľa
 };

 // Filtrácia projektov podľa aktívneho tagu a mena
 const filteredProjects = projects.filter((project) => {
   const matchesTag = activeFilter
     ? project.tags.some((tag) => tag.name === activeFilter)
     : true;
   const matchesName = project.name
     .toLowerCase()
     .includes(nameFilter.toLowerCase());
   return matchesTag && matchesName;
 });

   return (
     <div className="bg-primary py-16">
       <Navbar />

       <div className="flex justify-center sm:flex-row flex-col items-center gap-5 mt-20">
         <FilterTags tags={tagObjects} onFilterChange={handleFilterChange} />
         <input
           type="text"
           placeholder="Filter projects by name..."
           value={nameFilter}
           onChange={handleNameChange}
           autoComplete="off"
           className="bg-teriary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-[250px]"
         />
       </div>

       <div className="mt-20 flex flex-wrap justify-center gap-7 ">
         {filteredProjects.map((project, index) => (
           <ProjectCard key={`project.${index}`} index={index} {...project} />
         ))}
       </div>

       <div className="flex justify-center items-center ">
         <Link to="/" className="button justify-center flex items-center mt-20">
           Go Back
         </Link>
       </div>
     </div>
   );
};


export default  Works