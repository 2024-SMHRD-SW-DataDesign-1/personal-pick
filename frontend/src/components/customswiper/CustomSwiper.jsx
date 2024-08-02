// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import { useEffect, useState } from 'react';

const CustomSwiper = ({ list }) => {

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={500}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            navigation
            //   direction='vertical'
            
            loop={true}
            speed={400}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            
        >
            {list.length > 0 && list.map((item)=>{
                return (
                <SwiperSlide>
                    <img src={item.cos_img_src} alt="" />    
                </SwiperSlide>
                )
            })}
            


        </Swiper>
    );
};

export default CustomSwiper;