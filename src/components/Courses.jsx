import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import React from "react";


const Courses = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mx-auto text-center">
        <p className={styles.sectionSubText}>
          Wanna learn how to make websites?
        </p>
        <a
          target="_blank"
          href="https://jaroslav-kurzy.vercel.app/"
          className={` underline ${styles.sectionHeadText}`}
        >
          Learn with me!
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Courses, "about");
