'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules"
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

export default function Swiper() {
    return (
        <div className="overflow-hidden">
            <Swiper
                // slidesPerView={3}
                spaceBetween={12}
                grabCursor={true}
                loop={true}
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    1000: {
                        slidesPerView: 4
                    },
                    500: {
                        slidesPerView: 1
                    },
                    300: {
                        slidesPerView: 1
                    }
                }}
                className="mySwiper sm:max-w-7xl"
            >
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/1.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={1080}
                                height={1072}
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide ">
                    <div className="swiper-div">
                        <div className="flex items-center relative h-[256px] w-[256px] pb-12">
                            <Image
                                src="/images/clients/2.png"
                                alt="Depoimentos"
                                className="rounded"
                                width={810}
                                height={452}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}