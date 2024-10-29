"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I am a React.js Next.js Front-end Developer and Web Integrator, currently freelance.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I help companies stand out with captivating digital solutions that build loyalty for their users.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "I suggest you create the business logo of your dreams. My goal? Retranscribe the values ​​of your brand in an elegant logo that remains engraved in the memory of your customers. I offer you as many modifications as necessary to arrive at your dream logo.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "optimal SEO positioning on Google and visitors who turn into customers.",
    href: "",
  },
];

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            trasition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* Title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* Description */}
                <p className="text-white/60">{service.description}</p>
                {/* Border*/}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
