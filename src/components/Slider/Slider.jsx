import {Swiper, SwiperSlide} from 'Swiper/react';

import 'Swiper/css';
import 'Swiper/css/effect-coverflow';
import 'Swiper/css/pagination';
import 'Swiper/css/navigation';

import '../../components/Slider/Slider.css';

import art1 from '../../img/artwork/art1.jpeg';
import art2 from '../../img/artwork/art2.jpeg';
import art3 from '../../img/artwork/art3.jpeg';
import art4 from '../../img/artwork/art4.jpeg';
import art5 from '../../img/artwork/art5.jpeg';
import art6 from '../../img/artwork/art6.jpeg';
import art7 from '../../img/artwork/art7.jpeg';
import art8 from '../../img/artwork/art8.jpeg';
import art9 from '../../img/artwork/art9.jpeg';
import art10 from '../../img/artwork/art10.jpeg';
import art11 from '../../img/artwork/art11.jpeg';
import art12 from '../../img/artwork/art12.jpeg';
import art13 from '../../img/artwork/art13.jpeg';
import art14 from '../../img/artwork/art14.jpeg';

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
                    <img src={art1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art5} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art6} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art7} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art8} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art9} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art10} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art11} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art12} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art13} alt="slide_image"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={art14} alt="slide_image"/>
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