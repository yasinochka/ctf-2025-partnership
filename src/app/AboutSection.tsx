'use client';
import styles from './AboutSection.module.css';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Тривалість анімації в мілісекундах
      once: false,    // Анімація повторюється при повторному вході в зону видимості
    });
  }, []);

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutContent}>
        <div className={styles.container}>
          <div 
            className={styles.textFrame} 
            data-aos="fade-up" 
            data-aos-delay="50"
          >
            <div className={styles.justText}>
              <h1 data-aos="fade-up" data-aos-delay="100">Про наш івент</h1>
              <p data-aos="fade-up" data-aos-delay="200">
                <span className={styles.highlightRed}>BEST CTF</span> — це командні змагання з інформаційної безпеки, де команди намагаються знайти вразливості в системі і, використовуючи їх, отримати секретні дані (прапорці).
              </p>
              <p data-aos="fade-up" data-aos-delay="300">
                Ми проводимо <span className={styles.highlightRed}>CTF</span> — змагання у Львові, що є унікальною можливістю для Вас зробити внесок у розвиток етичного хакінгу серед студентів.
              </p>
            </div>
          </div>
          <div 
            className={styles.photoFrame} 
            data-aos="fade-up"           // Анімація для photoFrame
            data-aos-delay="450"         // Затримка для photoFrame
          >
            <Image
              src="/images/AboutSectionPhoto.png"
              alt="Photo frame"
              width={600}
              height={380}
              className={styles.imageRight}
              data-aos="fade-up"
              data-aos-delay="450"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;