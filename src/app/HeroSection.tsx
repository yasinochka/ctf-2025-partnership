"use client";
import styles from './HeroSection.module.css';
import Image from 'next/image';

const heroImage: string = '/images/bigmask.png';
const calendarIcon: string = '/images/Group 950 (1).png';

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.heroQuote}>Щоб захищати, треба вміти атакувати</p>
          <h1 className={styles.heroTitle}>Best Capture The Flag</h1>
          <div className={styles.heroSubtitleContainer}>
            <Image src={calendarIcon} alt="Календар" width={24} height={24} className={styles.calendarIcon} />
            <p className={styles.heroSubtitle}>22 листопада</p>
          </div>
          <a href="#partner" className={styles.heroButton}>Стати партнером</a>
        </div>
        <div className={styles.heroMask}>
          <Image src={heroImage} alt="Фон чела" width={600} height={400} className={styles.heroMaskImage} />
        </div>
        <div className={styles.heroCode}></div>
      </div>
    </section>
  );
};

export default HeroSection;