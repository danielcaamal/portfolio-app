"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DownloadCV, PageTitle } from "../_components";
import { getOffers } from "../_utils";
import { OfferCard } from "./_components";
import { Offer } from "../_utils/getOffers";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    getOffers().then((o) => {
      setOffers(o);
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
      <PageTitle title="Contact" subtitle="I&apos;d Love To Hear From You" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Introduction */}
        <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            What can I do for you?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Web development, software development, and technology are my passions. 
            I&apos;m always excited to take on new challenges and collaborate on innovative projects.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="snap-start">
              <OfferCard
                name={offer.name}
                description={offer.description}
                imageSrc={offer.iconSrc}
              />
            </div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                If you have any questions, comments, or just want to say hello, I&apos;d love to hear from you. 
                Feel free to reach out to me using any of the methods below.
              </p>
              
              <div className="space-y-4">
                <motion.a
                  href="mailto:danielcaamal97@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition-colors duration-200"
                >
                  <FaEnvelope size={20} />
                  <span>danielcaamal97@gmail.com</span>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/daniel-caamal-herrera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition-colors duration-200"
                >
                  <FaLinkedin size={20} />
                  <span>LinkedIn Profile</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/danielcaamal"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition-colors duration-200"
                >
                  <FaGithub size={20} />
                  <span>GitHub Profile</span>
                </motion.a>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I&apos;ll do my best to respond as soon as possible. If you&apos;d like to learn more about my work 
                experience, skills, or projects, you can download my CV below.
              </p>
              
              <div className="flex justify-center">
                <DownloadCV />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
