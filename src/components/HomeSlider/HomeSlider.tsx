'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

const width = window.innerWidth;
const height = window.innerHeight / 2;

const HomeSlider = () => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <Image src="https://assets-in.bmscdn.com/promotions/cms/creatives/1695071372300_web.jpg" alt="s1" width={width} height={height} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src="https://assets-in.bmscdn.com/promotions/cms/creatives/1695203118926_motogpreviseddesktop.jpg" alt="s1" width={width} height={height} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src="https://assets-in.bmscdn.com/promotions/cms/creatives/1695053694763_navratridesktop.jpg" alt="s1" width={width} height={height} />{" "}
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image src="https://assets-in.bmscdn.com/promotions/cms/creatives/1695287073315_aastadesktop.jpg" alt="s1" width={width} height={height} />{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
