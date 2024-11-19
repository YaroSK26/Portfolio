import React from "react";
import {
  Trophy,
  Medal,
  Award,
  Briefcase,
  ScrollText,
  Code,
  Globe,
  Database,
} from "lucide-react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const AwardCard = ({ index, title, description, type, icon: Icon }) => {
  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case "winner":
        return "bg-blue-500";
      case "participation":
        return "bg-green-500";
      case "internship":
        return "bg-purple-500";
      case "certificate":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div
          className={`${getTypeColor(
            type
          )} w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0`}
        >
          <Icon className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ title, items, icon: Icon }) => (
  <div

    className="mb-12"
  >
    <div className="flex items-center gap-3 mb-6">
      <Icon className="w-8 h-8 text-blue-500" />
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <AwardCard key={index} index={index} {...item} />
      ))}
    </div>
  </div>
);

const Awards = () => {
  const competitions = [
    {
      type: "winner",
      title: "School Competition - WebDeveloper",
      description: "Zenit 2023 - 1st Place",
      icon: Medal,
    },
    {
      type: "participation",
      title: "Regional Competition - WebDeveloper",
      description: "Zenit 2023",
      icon: Code,
    },
    {
      type: "winner",
      title: "School Competition - WebDeveloper",
      description: "Zenit 2024 - 1st Place",
      icon: Medal,
    },
    {
      type: "participation",
      title: "JuniorWEB Competition",
      description: "Participant",
      icon: Code,
    },
    {
      type: "participation",
      title: "Hack Košice 2024, Data Hackathon Gymbeam 2024",
      description: "",
      icon: Database,
    },
  ];

  const internships = [
    {
      type: "internship",
      title: "Siemens",
      description: "Professional Internship",
      icon: Briefcase,
    },
    {
      type: "internship",
      title: "Erasmus Program",
      description: "International Program",
      icon: Globe,
    },
  ];

  const certificates = [
    {
      type: "certificate",
      title: "Autodesk Inventor 2024",
      description: "Technical Certificate",
      icon: ScrollText,
    },

    {
      type: "certificate",
      title: "Cisco Introduction to Cybersecurity 2024",
      description: "Technical Certificate",
      icon: ScrollText,
    },
  ];

  return (
    <div className="min-h-screen  py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>
              Professional Achievements and Qualifications
            </p>
            <h2 className={styles.sectionHeadText}>Awards and Certificates.</h2>
          </motion.div>
        </div>

        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
          <CategorySection
            title="Competitions"
            items={competitions}
            icon={Trophy}
          />
        </motion.div>

        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
          <CategorySection
            title="Professional Experience"
            items={internships}
            icon={Briefcase}
          />
        </motion.div>

        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
          <CategorySection
            title="Certificates"
            items={certificates}
            icon={ScrollText}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper( Awards, "")