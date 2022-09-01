import useFetch from '../../../hooks/useFetch';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import AdoptionCard from './AdoptionCard';

import 'swiper/css';
import 'swiper/css/navigation';
import loading from '../../../assets/svgs/loading.svg';

function AdoptionCarousel() {
  const { response, isLoading, error } = useFetch('animals?limit=30');

  const renderedCards =
    response &&
    response.animals.map((pet) => {
      if (!pet.primary_photo_cropped) return <></>;

      return (
        <SwiperSlide>
          <AdoptionCard pet={pet} />
        </SwiperSlide>
      );
    });

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
    <>
      {response && (
        <Swiper
          modules={[Navigation]}
          loop="true"
          navigation
          spaceBetween={30}
          slidesPerView={1.4}
          centeredSlides="true"
          breakpoints={sliderBreakpoints}
        >
          {renderedCards}
        </Swiper>
      )}

      {isLoading && <img style={{ margin: 'auto' }} src={loading} alt="Loading..." />}
      {error && !isLoading && (
        <p style={{ textAlign: 'center', margin: '2rem' }}>
          There was an error fetching our featured pets. We apologise on behalf of all of the
          animals of Find-a-Friend
        </p>
      )}
    </>
  );
}

export default AdoptionCarousel;
