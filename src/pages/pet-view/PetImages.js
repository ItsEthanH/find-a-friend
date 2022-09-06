import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import Backdrop from '../../components/cards-and-sections/Backdrop';

import fullscreenIcon from '../../assets/svgs/pet-view/fullscreen.svg';
import classes from './styles/PetImages.module.css';
import 'swiper/css';

function PetImages({ photos }) {
  const [image, setImage] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  function slideInitialiseHandler(event) {
    setImage(event.activeIndex + 1);
  }

  function slideChangeHandler(event) {
    setImage(event.activeIndex + 1);
  }

  function fullscreenClickHandler() {
    setIsFullscreen((prevState) => !prevState);
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = isFullscreen ? 'hidden' : 'auto';
  }, [isFullscreen]);

  const renderedPhotos = photos.map((image) => (
    <SwiperSlide>
      <img src={image.full} alt="" />
    </SwiperSlide>
  ));

  const componentStyles = `${classes.slider} ${isFullscreen ? classes.fullscreen : ''}`;
  const petImagesComponent = (
    <div className={componentStyles}>
      <Swiper
        autoHeight={isFullscreen ? false : true}
        modules={[Navigation, Pagination]}
        navigation
        pagination
        slidesPerView={1}
        onInit={slideInitialiseHandler}
        onSlideChange={slideChangeHandler}
      >
        {renderedPhotos}
      </Swiper>
      <button onClick={fullscreenClickHandler}>
        <img src={fullscreenIcon} alt="Go fullscreen" />
      </button>
      <p className={classes.number}>
        {image} of {photos.length}
      </p>
    </div>
  );

  return (
    <>
      {isFullscreen && <Backdrop onClick={fullscreenClickHandler}>{petImagesComponent}</Backdrop>}
      {isFullscreen ? <div className={classes.hidden} /> : petImagesComponent}
    </>
  );
}

export default PetImages;
