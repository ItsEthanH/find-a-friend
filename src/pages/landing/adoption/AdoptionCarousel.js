import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import AdoptionCard from './AdoptionCard';

import 'swiper/css';
import 'swiper/css/navigation';

function AdoptionCarousel() {
  const sliderBreakpoints = {
    500: {
      slidesPerView: 1.7,
      spaceBetween: 40,
    },

    800: {
      slidesPerView: 2.5,
    },

    1000: {
      slidesPerView: 3,
    },

    1300: {
      slidesPerView: 4,
    },

    1700: {
      slidesPerView: 5,
    },
  };

  return (
    <Swiper
      modules={[Navigation]}
      loop="true"
      navigation
      spaceBetween={20}
      slidesPerView={1.2}
      centeredSlides="true"
      breakpoints={sliderBreakpoints}
    >
      <SwiperSlide>
        <AdoptionCard />
      </SwiperSlide>
      <SwiperSlide>
        <AdoptionCard />
      </SwiperSlide>
      <SwiperSlide>
        <AdoptionCard />
      </SwiperSlide>
      <SwiperSlide>
        <AdoptionCard />
      </SwiperSlide>
    </Swiper>
  );
}

export default AdoptionCarousel;
