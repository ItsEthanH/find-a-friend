import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import classes from './styles/PetImages.module.css';
import 'swiper/css';

function PetImages({ photos }) {
  const [image, setImage] = useState(1);

  function slideInitialiseHandler(event) {
    setImage(event.activeIndex + 1);
  }

  function slideChangeHandler(event) {
    setImage(event.activeIndex + 1);
  }

  const renderedPhotos = photos.map((image) => (
    <SwiperSlide>
      <img src={image.full} alt="" />
    </SwiperSlide>
  ));

  return (
    <div className={classes.slider}>
      <Swiper
        autoHeight={true}
        modules={[Navigation, Pagination]}
        navigation
        pagination
        spaceBetween={50}
        slidesPerView={1}
        onInit={slideInitialiseHandler}
        onSlideChange={slideChangeHandler}
      >
        {renderedPhotos}
      </Swiper>
      <p className={classes.number}>
        {image} of {photos.length}
      </p>
    </div>
  );
}

export default PetImages;
