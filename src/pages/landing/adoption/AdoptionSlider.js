import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import AdoptionCard from './AdoptionCard';

import 'swiper/css';
import 'swiper/css/navigation';

function AdoptionSlider() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1.4}
      centeredSlides="true"
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
