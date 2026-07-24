"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";

const speakersData = [
  {
    name: "Coming Soon",
    role: "Web 3 & Crypto Speaker",
    image: "/speakers/quest.png",
  }
];

export default function SpeakerSlider() {
  return (
    <section className="bg-black relative z-10 overflow-hidden md:hidden">
      <Swiper

        slidesPerView={1.1} 
        spaceBetween={25}  
        centeredSlides={false} 
        grabCursor={true}
        speed={600}
        freeMode={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full px-4 py-10" 
      >
        {speakersData.map((item, i) => (
          <SwiperSlide
            key={i}
            className="w-full group" 
          >
            <div className="flex flex-col gap-3">

              <div className="relative overflow-hidden rounded-xl border-[1.5px] border-orange-500 bg-white aspect-[4/5]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="rounded-xl bg-orange-500 px-4 py-4 text-left shadow-lg min-h-[100px] flex flex-col justify-center">
                <h3 className="text-white font-bold text-lg leading-tight mb-1 uppercase tracking-tight">
                  {item.name}
                </h3>
                <p className="text-white/90 text-xs font-medium leading-snug line-clamp-2">
                  {item.role}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}