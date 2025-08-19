/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProjectCardProps {
  title: string;
  releaseDate: string;
  description: string;
  urls: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard = ({
  title,
  releaseDate,
  description,
  urls,
  githubUrl,
  liveUrl,
}: ProjectCardProps) => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-4xl glass-effect rounded-2xl p-8 mb-8 card-hover"
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <h3 className="text-2xl font-bold gradient-text mb-2 sm:mb-0">{title}</h3>
          <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
            {releaseDate}
          </span>
        </div>
        
        <p className="text-gray-300 leading-relaxed mb-6">
          {description}
        </p>

        {/* Project Links */}
        {(githubUrl || liveUrl) && (
          <div className="flex gap-4 mb-6">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors duration-200"
              >
                <FaGithub size={20} />
                <span>View Code</span>
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-gray-400 hover:text-sky-400 transition-colors duration-200"
              >
                <FaExternalLinkAlt size={16} />
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>
        )}
      </div>

      {/* Image Gallery */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          loop={urls.length > 1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="w-full rounded-xl overflow-hidden"
        >
          {urls.map((url, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative group cursor-pointer"
                onClick={() => setOpenImage(url)}
              >
                <img
                  src={url}
                  alt={`${title} screenshot ${idx + 1}`}
                  className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text-lg font-semibold">
                    Click to enlarge
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation Buttons */}
          {urls.length > 1 && (
            <>
              <div className="swiper-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-200">
                <FaChevronLeft size={16} />
              </div>
              <div className="swiper-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-200">
                <FaChevronRight size={16} />
              </div>
            </>
          )}
        </Swiper>
        
        {/* Image Counter */}
        {urls.length > 1 && (
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full z-10">
            {urls.length} images
          </div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
            onClick={() => setOpenImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={openImage}
                alt="Project screenshot"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                loading="lazy"
              />
              <button
                onClick={() => setOpenImage(null)}
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
