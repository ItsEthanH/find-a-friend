import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import AdoptionCard from './AdoptionCard';

import 'swiper/css';
import 'swiper/css/navigation';

function AdoptionSlider() {
  const sliderBreakpoints = {
    600: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    800: {
      slidesPerView: 2.5,
    },
  };

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1.6}
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

export default AdoptionSlider;
