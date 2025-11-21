import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                navigation ={true}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <img src="https://plus.unsplash.com/premium_photo-1675342786681-e33a19414cfd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGxhbnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600" alt="" />
                    

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://plus.unsplash.com/premium_photo-1673203734665-0a534c043b7f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnR8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;