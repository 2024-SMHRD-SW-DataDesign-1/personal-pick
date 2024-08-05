import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import './CustomSwiper.scss'
import 'swiper/css';
import { useEffect, useState } from 'react';
import Star from '../../img/별.png'

const CustomSwiper = ({ list }) => {
    
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{ clickable: true }}
            navigation
            //   direction='vertical'
            
            loop={true}
            speed={400}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            
        >
            {list.length > 0 && list.map((item, i)=>{
                return (
                <SwiperSlide key={i}>
                    <img src={item.cos_img_src} alt="" />   
                    <div className='cos_conater'>
                        <p>
                            {item.brand_name}
                        </p>
                        <p>{item.cos_name}</p>
                        <p>{"정가 " + item.price + "원 / " + item.vol + "ml"}</p>
                        <div className='flex_col'>
                            <img className='star' src={Star} alt="" />
                            <p>{"   "+item.grade+" ("+item.grade_count+")"}</p>
                        </div>
                    </div> 
                </SwiperSlide>
                )
            })}
        </Swiper>
    );
};

export default CustomSwiper;

// const CustomSwiper = ({ list }) => {
//     console.log(list)
//     return (
//         <Swiper
//             modules={[Autoplay]}
//             spaceBetween={2000}
//             slidesPerView={1}
//             onSlideChange={() => console.log('slide change')}
//             onSwiper={(swiper) => console.log(swiper)}
//             pagination={{ clickable: true }}
//             navigation
//             //   direction='vertical'
            
//             loop={true}
//             speed={400}
//             autoplay={{ delay: 1000, disableOnInteraction: false }}
            
//         >
//             {list.length > 0 && list.map((item, i)=>{
//                 return (
//                 <SwiperSlide key={i}>
//                     <img src={item.cos_img_src} alt="" />   
//                     <div className='cos_conater'>
//                         <p>
//                             {item.brand_name}
//                         </p>
//                         <p>{item.cos_name}</p>
//                         <p>{"정가 " + item.price + "원 / " + item.vol + "ml"}</p>
//                         <div className='flex_col'>
//                             <img className='star' src={Star} alt="" />
//                             <p>{"   "+item.grade+" ("+item.grade_count+")"}</p>
//                         </div>
//                     </div> 
//                 </SwiperSlide>
//                 )
//             })}
            


//         </Swiper>
//     );
// };

// export default CustomSwiper;