import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import placeholder1 from '../../assets/images/organisations/hero.jpg';
import placeholder2 from '../../assets/images/breeds/cat-hero.jpg';
import placeholder3 from '../../assets/images/breeds/dog-hero.jpg';

import classes from './styles/PetImages.module.css';
import 'swiper/css';

function PetImages() {
  const [image, setImage] = useState(1);
  const [totalImages, setTotalImages] = useState(1);

  function slideInitialiseHandler(event) {
    setTotalImages(event.imagesLoaded);
    setImage(event.activeIndex + 1);
  }

  function slideChangeHandler(event) {
    setImage(event.activeIndex + 1);
  }

  return (
    <div className={classes.slider}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination
        spaceBetween={50}
        slidesPerView={1}
        onInit={slideInitialiseHandler}
        onSlideChange={slideChangeHandler}
      >
        <SwiperSlide>
          <img src={placeholder1} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={placeholder2} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={placeholder3} alt="img" />
        </SwiperSlide>
      </Swiper>
      <p className={classes.number}>
        {image} of {totalImages}
      </p>
    </div>
  );
}

export default PetImages;
