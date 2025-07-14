'use client';
import styles from './Swiper.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const ImageSwiper: React.FC = () => {
  const images = [
    { src: "/images/swiper1.png", alt: "Photo 1" },
    { src: "/images/swiper2.png", alt: "Photo 2" },
    { src: "/images/swiper3.png", alt: "Photo 3" },
    { src: "/images/swiper4.png", alt: "Photo 4" },
    { src: "/images/swiper5.png", alt: "Photo 5" },
    { src: "/images/swiper6.png", alt: "Photo 6" },
  ];

  return (
    <section className={styles.swiperSection}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.swiperContainer}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={{
                nextEl: `.${styles.swiperButtonNext}`,
                prevEl: `.${styles.swiperButtonPrev}`,
              }}
              autoplay={{ delay: 1300, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={3}
              direction="horizontal"
              loop={true}
              className={styles.swiper}
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.swiperSlide}>
                    <img src={image.src} alt={image.alt} className={styles.swiperPhoto} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button className={styles.swiperButtonPrev}>
              <span className={styles.arrow}>&lt;</span>
            </button>
            <button className={styles.swiperButtonNext}>
              <span className={styles.arrow}>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSwiper;