'use client';
import styles from './AboutSection.module.css';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <div className={styles.container}>
          <div className={styles.textFrame}>
            <div className={styles.justText}>
              <h1>Про наш івент</h1>
              <p>
                <span className={styles.highlightRed}>BEST CTF</span> — це командні змагання з інформаційної безпеки, де команди намагаються знайти вразливості в системі і, використовуючи їх, отримати секретні дані (прапорці).
              </p>
              <p>
                Ми проводимо <span className={styles.highlightRed}>CTF</span> — змагання у Львові, що є унікальною можливістю для Вас зробити внесок у розвиток етичного хакінгу серед студентів.
              </p>
            </div>
          </div>
          <div className={styles.photoFrame}>
            <Image
              src="/images/AboutSectionPhoto.png"
              alt="Photo frame"
              width={600}
              height={500}
              className={styles.imageRight} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;