import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import AdoptionCard from './AdoptionCard';

import 'swiper/css';
import 'swiper/css/navigation';

function AdoptionCarousel() {
  const sliderBreakpoints = {
    400: {
      slidesPerView: 1.5,
    },

    500: {
      slidesPerView: 2,
    },

    700: {
      slidesPerView: 2.5,
    },

    900: {
      slidesPerView: 3,
    },

    1100: {
      slidesPerView: 4,
    },

    1300: {
      slidesPerView: 5,
    },

    1700: {
      slidesPerView: 6,
    },
  };

  return (
    <Swiper
      modules={[Navigation]}
      loop="true"
      navigation
      spaceBetween={30}
      slidesPerView={1.4}
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
