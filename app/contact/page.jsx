"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+33) 7 81 31 15 41",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sadoumachi@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adresse",
    description: "7 rue baudin Courbevoie 92400",
  },
];

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
          <form 
      name="contact" 
      method="POST" 
      data-netlify="true"
      netlify-honeypot="bot-field"  // Champ pour éviter les soumissions de bots
      action="/thank-you"  // Redirection après soumission
      className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
    >
      {/* Champ caché obligatoire pour Netlify Forms */}
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Champ honeypot caché pour éviter le spam */}
      <p hidden>
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>

      <h3 className="text-4xl text-accent">Let's work together</h3>
      <p className="text-white/60">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
        exercitationem quas dicta. Provident, reiciendis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input type="text" name="firstname" placeholder="Firstname" required />
        <Input type="text" name="lastname" placeholder="Lastname" required />
        <Input type="email" name="email" placeholder="Email" required />
        <Input type="tel" name="phone" placeholder="Phone number" required />
      </div>

      {/* Sélection du service */}
      <Select name="service">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a service</SelectLabel>
            <SelectItem value="Web Development">Web Development</SelectItem>
            <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
            <SelectItem value="Logo Design">Logo Design</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Message */}
      <Textarea 
        className="h-[200px]" 
        name="message" 
        placeholder="Type your message here." 
        required
      />

      <Button type="submit" size="md" className="max-w-40">Send message</Button>
    </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end xl:order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=>{
                return <li key={index} className="flex items-czntzr gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center" >
                    <div className="text-[28px">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
