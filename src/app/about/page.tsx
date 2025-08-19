"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PageTitle } from "../_components";
import { getProfile } from "../_utils";

export default function About() {
  const [profile, setProfile] = useState({ age: 0, experience: 0 });

  useEffect(() => {
    getProfile().then(({ age, experience }) => {
      setProfile({ age, experience });
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6">
      <PageTitle title="About Me" subtitle="Let me introduce myself" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-3 gap-12 items-start"
      >
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-sky-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <img
              className="relative w-full max-w-sm mx-auto rounded-2xl shadow-2xl object-cover aspect-square"
              src="/images/me.jpeg"
              alt="Daniel Caamal Herrera"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Who I Am
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                My name is <span className="text-sky-400 font-semibold">Daniel Karim Caamal Herrera</span>, 
                and I am a {profile.age}-year-old Mechatronic Engineer with a passion for technology and innovation. 
                My ultimate goal is to travel the world and contribute to groundbreaking projects that challenge and inspire me.
              </p>
              
              <p>
                I hold a Bachelor&apos;s degree in Mechatronic Engineering from the Universidad Autónoma de Yucatán, 
                where I graduated with an impressive GPA of <span className="text-accent-400 font-semibold">94.80</span>. 
                My thesis, titled{" "}
                <span className="text-sky-400 italic">
                  &quot;Energy Efficient Framework for Sport Wearable AIoT Cardiac Arrhythmia Detection System&quot;
                </span>
                , was published in the prestigious{" "}
                <span className="text-sky-400 font-semibold">
                  IEEE Transactions on Instrumentation &amp; Measurement journal
                </span>{" "}
                in 2021.
              </p>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Professional Journey
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I bring over <span className="text-accent-400 font-semibold">{profile.experience} years</span> of 
                experience in the IT industry, where I&apos;ve had the opportunity to grow and develop my skills across 
                multiple roles. I began my career as a Backend Developer, where I discovered a strong affinity for 
                data manipulation and architecture design.
              </p>
              
              <p>
                Over time, I continued to hone my expertise in backend development, eventually venturing into 
                frontend work. While I&apos;ve gained valuable experience in UI/UX design, my true passion lies in 
                problem-solving across all aspects of development.
              </p>
              
              <p>
                Currently, I work as a <span className="text-sky-400 font-semibold">Full Stack Developer</span>, 
                leveraging my proficiency in <span className="text-accent-400">NEST.js</span> and{" "}
                <span className="text-accent-400">NEXT.js</span> frameworks, with{" "}
                <span className="text-accent-400">TypeScript</span> as my primary language.
              </p>
              
              <p>
                Although I don&apos;t yet consider myself a senior developer, I&apos;ve mastered these tools and am 
                constantly seeking new challenges to expand my skill set.
              </p>
            </div>
          </div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">{profile.age}</div>
              <div className="text-gray-400">Years Old</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-accent-400 mb-2">{profile.experience}+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
