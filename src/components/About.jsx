import aboutImg from "../assets/about1.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import ThreeDCard from "./ThreeDCard";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <ThreeDCard hoverScale={1} rotateDivisor={150}>
              <figure className="group w-full max-w-xl" tabIndex={0}>
                <img
                  className="block w-full rounded-3xl"
                  src={aboutImg}
                  alt="My brother and me at the theater"
                />

                {/* collapsible caption under the image */}
                <figcaption
                  className="
                    overflow-hidden max-h-0 group-hover:max-h-32 focus-within:max-h-32
                    transition-[max-height] duration-300 ease-out
                  "
                >
                  <div className="
                    mt-3 rounded-2xl px-6 py-4 text-center text-sm sm:text-base font-medium
                    text-white shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500
                    opacity-0 translate-y-2
                    group-hover:opacity-100 group-hover:translate-y-0
                    focus-within:opacity-100 focus-within:translate-y-0
                    transition-all duration-300 ease-out
                  ">
                    This is me as a kid, when I went to visit Bronx Zoo
                  </div>
                </figcaption>
              </figure>
            </ThreeDCard>
          </div>
        </motion.div>


        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 maxw-xl py-6 whitespace-pre-line">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
