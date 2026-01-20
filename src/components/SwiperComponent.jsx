import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperComponent = ({ children }) => {
  return (
    <div className="">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".pagination",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper max-w-[90vw] mx-auto" /*max-w-[90vw] mx-auto lo centra*/
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
        <div className="pagination w-full flex justify-center items-center mt-4"></div>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

/*
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      loop={true}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide><div className="w-60 h-60 bg-amber-600 flex justify-center items-center text-white text-4xl"> hola1</div></SwiperSlide>
      <SwiperSlide><div className="w-60 h-60 bg-amber-600 flex justify-center items-center text-white text-4xl"> hola2</div></SwiperSlide>
      <SwiperSlide><div className="w-60 h-60 bg-amber-600 flex justify-center items-center text-white text-4xl"> hola3</div></SwiperSlide>
      <SwiperSlide><div className="w-60 h-60 bg-amber-600 flex justify-center items-center text-white text-4xl"> hola4</div></SwiperSlide>

    </Swiper>*/
