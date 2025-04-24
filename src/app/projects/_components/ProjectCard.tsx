/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ProjectCardProps {
  title: string;
  releaseDate: string;
  description: string;
  urls: string[];
}

export const ProjectCard = ({
  title,
  releaseDate,
  description,
  urls,
}: ProjectCardProps) => {
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <div className="w-full max-w-4xl shadow-md rounded-lg p-6 mb-6 border border-gray-300 ">
      <div>
        <h3 className="text-xl font-bold text-orange-600">{title}</h3>
        <span className="text-sm text-gray-500 italic mt-1 block">
          {releaseDate}
        </span>
      </div>

      <p className="mt-3 text-gray-700 text-base break-words md:text-justify rounded-md">
        {description}
      </p>

      <div className="container mx-auto mt-4 flex justify-center ">
        <Swiper
          spaceBetween={16}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="w-full max-w-xl mt-4 rounded-md "
        >
          {urls.map((url, idx) => (
            <SwiperSlide key={idx} className="flex items-center justify-center">
              <div className="flex items-center justify-center h-full w-full">
                <img
                  src={url}
                  alt={`Imagen ${idx + 1} de ${title}`}
                  className="object-contain max-h-full max-w-full rounded-md cursor-pointer"
                  onClick={() => setOpenImage(url)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {openImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setOpenImage(null)}
        >
          <img
            src={openImage}
            alt="Imagen ampliada"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
            loading="lazy"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
