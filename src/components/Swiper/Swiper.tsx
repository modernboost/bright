"use client";
import Swiper from "swiper";
import { Grid, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import { useEffect, useRef } from "react";
import { SwiperOptions } from "swiper/types";

export default function Swipper({
  children,
  props,
}: {
  props?: SwiperOptions;
  children?: React.ReactNode;
}) {
  const swp = useRef(null);
  useEffect(() => {
    if(!swp && !swp.current)return ;
    const swiper = new Swiper(swp?.current, {
      // configure Swiper to use modules
      modules: [Navigation, Pagination, Grid],
      slidesPerView: "auto",
      spaceBetween: 3,
      freeMode: true,
      // grid: {
      //   rows: 2,
      // },
      // breakpoints: {
      // 	'@0.0': {
      // 	  slidesPerView: 1,
      // 	  spaceBetween: 20,
      // 	},
      // 	'@.75': {
      // 	  slidesPerView: 2,
      // 	  spaceBetween: 40,
      // 	},
      // 	'@1.2': {
      // 	  slidesPerView: 3,
      // 	  spaceBetween: 50,
      // 	},
      //   },
      // breakpoints: {
      // 	// when window width is >= 640px
      // 	0: {
      // 		slidesPerView: 1,
      // 		spaceBetween: 20,
      // 	},
      // 	640: {
      // 		slidesPerView: 2,
      // 		spaceBetween: 20,
      // 	},
      // 	// when window width is >= 768px
      // 	768: {
      // 		slidesPerView: 3,
      // 		spaceBetween: 40,
      // 	},
      // 	// when window width is >= 1024px
      // 	// 1024: {
      // 	// 	slidesPerView: 4,
      // 	// 	spaceBetween: 50,
      // 	// },
      // },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",
      },
      ...props,
    });

    return () => swiper.destroy(true);
  }, [swp]);
  // init Swiper:
  return (
    <div className="swiper-outer-wrapper">
      <div className="swiper" ref={swp}>
        <div className="swiper-wrapper ">{children}</div>
        {/* <div className='swiper-wrapper'>

				<div className="swiper-slide">slide 1</div>
				<div className="swiper-slide">slide 2</div>
				<div className="swiper-slide">slide 3</div>
				<div className="swiper-slide">slide 4</div>
			</div> */}
        <div className="swiper-pagination "></div>
        <div className="swiper-button-prev rounded-full cursor-none"></div>
        <div className="swiper-button-next rounded-full  cursor-none  "></div>
        <div className="swiper-scrollbar"></div>
      </div>
    </div>
  );
}
