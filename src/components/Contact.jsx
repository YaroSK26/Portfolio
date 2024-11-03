import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { Instagram } from "lucide-react";
import { slideIn } from "../utils/motion";
import { toast } from "react-hot-toast";
import { withSwal } from "react-sweetalert2";

const Contact = ({ swal }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_81tw9xw",
        "template_m37okw1",
        {
          from_name: form.name,
          to_name: "Jaroslav",
          from_email: form.email,
          to_email: "jaroba0@gmail.com",
          message: form.message,
        },
        "ao9Pnvt-EA8-h9gBU"
      )
      .then(
        () => {
          setLoading(false);
          swal.fire({
            title: "Thank you for your email",
            text: "We will send you a feedback soon!",
            icon: "success",
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          toast.error("Something went wrong.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}> Contact.</h2>

        {/* Add Instagram Link */}
        <div className="mt-4">
          <a
            href="https://www.instagram.com/jaroslav_barabas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors duration-300"
          >
            <Instagram size={24} />
            <span className="font-medium">Follow me on Instagram</span>
          </a>
        </div>

        <form
          className="mt-12 flex flex-col gap-8"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              autoComplete="off"
              placeholder="What's your name?"
              className="bg-teriary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label htmlFor="email" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              autoComplete="off"
              placeholder="What's your email?"
              className="bg-teriary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label htmlFor="message" className="flex flex-col ">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              autoComplete="off"
              placeholder="What do you want to say?"
              className=" resize-none bg-teriary py-4 px-6  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <button
            className=" bg-[#1d125e] outline-none w-fit py-3 px-8 text-white font-bold shadow-md shadow-primary rounded-xl"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default withSwal(Contact);
