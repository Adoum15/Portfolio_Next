"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Agence Ledor",
    description:
      "These is a real estate agency site, it is also one of my first website which was entirely created in html and css.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/agence.png",
    live: "https://agence-immo-ledor.netlify.app/",
    github: ""
  },
  {
    num: "02",
    category: "frontend",
    title: "caffe fleur",
    description:
      "The café fleur site is also a simple site but the advantage of this site is that it is not a single page, and the style of this site is also more advanced.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }],
    image: "/caffe_fleur.png",
    live: "https://caffe-fleur.netlify.app/",
    
  },
  {
    num: "03",
    category: "frontend",
    title: "Cookchef",
    description:
      "Cookchef is a site that lists recipes that can be saved locally. this site also allows you to search for a new recipe thanks to a search algorithm which allows you to display a recipe according to the name, it is also possible to add sites as favorites, I notably discovered and experimented with scss thanks to this site.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript"},{ name: "React"},{ name: "SCSS"}],
    image: "/cookchef.png",
    live: "https://cook-chef.netlify.app/",
    github: "",
  },
  {
    num: "04",
    category: "frontend",
    title: "Flag of the world",
    description:
      "Flag of the world is a site which displays the flags of the world according to continent for its I use an API which keeps important information on the countries such as their name, image, number of inhabitants.",
    stack: [ { name: "Firebase"},{ name: "React"}],
    image: "/Drapeau.png",
    live: "https://drapeau-du-monde.web.app",
    github: "https://github.com/Adoum15/React-drapeau",
  },
  {
    num: "05",
    category: "frontend",
    title: "Pokedex",
    description:
      "Pokedex is a site that uses authentication as well as the reading of an API for the display of pokemon as well as the different categories of them such as the type, it is also possible to delete and modify the characteristics, the 'image and name of the pokemon to personalize it.",
    stack: [ { name: "Firebase"},{ name: "React"}],
    image: "/pokedex.png",
    live: "https://pokedex-00.web.app/pokemons",
    github: "https://github.com/Adoum15/react-pokedex",
  },
  {
    num: "06",
    category: "frontend and backend",
    title: "Codeurs-Monkeys",
    description:
      "Codeur-monkey is a React learning platform that aims to bring together different learners of this technology. The creation of this site allowed me to discover the functions, authentication, the concept of onboarding and data management in Firebase.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Firebase"},{ name: "React"}],
    image: "/Factory-project.png",
    live: "https://codersmonkey-2-e8e48.web.app/",
  },
  
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update the project state based on the current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline flex justify-between ">
                <div>{project.num}</div>
                <div className="text-4xl font-bold text-accent pt-6">{project.title}</div>
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the laste */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                {project.github && <Link href={project.github} target="blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> }
                
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button*/}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
