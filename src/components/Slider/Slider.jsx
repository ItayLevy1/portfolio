import {Swiper, SwiperSlide} from 'Swiper/react';

import 'Swiper/css';
import 'Swiper/css/effect-coverflow';
import 'Swiper/css/pagination';
import 'Swiper/css/navigation';

import '../../components/Slider/Slider.css';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

export default function Slider() {
    return (
        <div className='container'>
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={
                {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }
            }
            pagination={{el:'.swiper-pagination', clickable: true}}
            navigation={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_container'

            >
                <SwiperSlide>
                    <img src="../../img/artwork/art1.jpeg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art2.jpeg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art3.jpeg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art4.jpeg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art5.jpeg" alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art6.jpeg" alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art7.jpeg" alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art8.jpeg" alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art9.jpeg" alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art10.jpeg" alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art11.jpeg" alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art12.jpeg" alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art13.jpeg" alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="../../img/artwork/art14.jpeg" alt="slide_image"/>
                </SwiperSlide>

                <div className="slide-container">
                    <div className="swiper-button-prev slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>   
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>   
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
    );
}