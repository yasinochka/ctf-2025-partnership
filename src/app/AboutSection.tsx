'use client';
import styles from './AboutSection.module.css';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.textBlock}>
            <h1 className={styles.mainHeading} data-aos="fade-up" data-aos-delay="100">Про наш івент</h1>
            <div className={styles.textContent}>
              <p className={styles.paragraph1} data-aos="fade-up" data-aos-delay="200">
                <span className={styles.highlight}>BEST CTF</span> — це командне змагання з кібербезпеки, де учасники демонструють свої технічні навички, розв’язуючи практичні завдання. Вони виявляють вразливості в системах і здобувають так звані “прапорці”.
              </p>
              <p className={styles.paragraph2} data-aos="fade-up" data-aos-delay="300">
                Уже другий рік поспіль ми проводимо ці змагання у Львові. <span className={styles.highlight}>BEST CTF</span> — це чудова можливість підтримати розвиток етичного хакінгу серед студентів і початківців у сфері кібербезпеки.
              </p>
              <div data-aos="fade-up" data-aos-delay="400">
                <h2 className={styles.subTitle}>Наша мета</h2>
                <ul className={styles.goalList}>
                  <li>підвищити зацікавленість студентів у галузі кібербезпеки;</li>
                  <li>зростити нове, сильне покоління молодих спеціалістів у цій сфері;</li>
                  <li>стати плацдармом для студентів у їхньому кар’єрному розвитку.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.imageBlock}>
            <Image
              src="/images/AboutSectionPhoto.svg"
              alt="Event Photo"
              width={1000}
              height={100}
              className={styles.eventImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;