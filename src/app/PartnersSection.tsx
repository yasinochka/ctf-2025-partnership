'use client';
import styles from './PartnersSection.module.css';
import Image from 'next/image';

const PartnersSection: React.FC = () => {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Наші партнери</h2>
        <div className={styles.partnersLogos}>
          <Image
            src="/images/partner1.png" 
            alt="Partner 1"
            width={150}
            height={100}
            className={styles.logo}
          />
          <Image
            src="/images/partner2.png" 
            alt="Partner 2"
            width={150}
            height={100}
            className={styles.logo}
          />
          <Image
            src="/images/partner3.png" 
            alt="Partner 3"
            width={150}
            height={100}
            className={styles.logo}
          />
          <Image
            src="/images/partner4.png" 
            alt="Partner 4"
            width={150}
            height={100}
            className={styles.logo}
          />
          <Image
            src="/images/partner5.png" 
            alt="Partner 5"
            width={150}
            height={100}
            className={styles.logo}
          />
          <Image
            src="/images/partner6.png" 
            alt="Partner 6"
            width={150}
            height={100}
            className={styles.logo}
          />
          <Image
            src="/images/partner7.png"
            alt="Partner 7"
            width={150}
            height={100}
            className={styles.logo}
          />
          <Image
            src="/images/partner8.png" 
            alt="Partner 8"
            width={150}
            height={100}
            className={styles.logo}
          />
          <Image
            src="/images/partner9.png"
            alt="Partner 9"
            width={150}
            height={100}
            className={styles.logo}
          />

        </div>
      </div>
    </section>
  );
};

export default PartnersSection;