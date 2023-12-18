import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
      <section className={`relative w-full min-h-screen  mx-auto `}>
        <div
          className={`absolute inset-0 top-[5rem]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Production</h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Front- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        {/* motion section */}
        <div className="absolute xs:bottom-10 top-22 w-full flex justify-center items-center">
          <div className="w-[2.5rem] h-[4rem] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </div>
        {/*  */}
      </section>
      <div className="absolute inset-1">
        <ComputersCanvas />
      </div>
      <div className={`relative w-full min-h-screen  mx-auto `}>
        <div
          className={`absolute inset-0 top-[10rem]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Side- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className={`relative w-full min-h-screen  mx-auto `}>
        <div
          className={`absolute inset-0 top-[10rem]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Back- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
