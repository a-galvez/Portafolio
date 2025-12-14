import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Carrusel({ media }) {
  return (
    <div className="custom-swiper">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        slidesPerView={1}
        className="w-full"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "video" ? (
              <video
                controls
                className="w-full rounded-[12px] max-h-[500px] object-contain"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={item.src}
                alt=""
                className="w-full rounded-[12px] max-h-[500px] object-contain"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

