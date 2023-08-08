import { SectionWrapper } from "../hoc";
import Contact from "./Contact";

const ContactWrapper = () => {
  return <div>
        <Contact></Contact>
  </div>;
};

export default SectionWrapper(ContactWrapper, "contact");
