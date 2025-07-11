'use client';
import styles from './StatsSection.module.css';
import Image from 'next/image';

const StatsSection: React.FC = () => {
  return (
    <section className={styles.statsSection} id="stats">
        <Image
      src="/images/statsBack.png"
      alt="StatsBack"
      width={230}
      height={670}
      className={styles.statsBack}
    />
      <div className={styles.content}>
        <div className={styles.container}>
            <Image
      src="/images/stats.png"
      alt="Stats"
      width={700}
      height={400}
      className={styles.statsImg}
    />
            <h1 className={styles.title}>Статистика</h1>
            <div className={styles.statsItems}>
                <div className={styles.statItem}>
              <Image
                src="/images/instagram.png"
                alt="Instagram Followers"
                width={50}
                height={50}
                className={styles.statIcon}
              />
              <span>3400+ followers</span>
            </div>
            <div className={styles.statItem}>
              <Image
                src="/images/telegram.png"
                alt="Tg Followers"
                width={50}
                height={50}
                className={styles.statIcon}
              />
              <span>900+ followers</span>
            </div>
            <div className={styles.statItem}>
              <Image
                src="/images/linkedin.png" 
                alt="LinkedIn Followers"
                width={50}
                height={50}
                className={styles.statIcon}
              />
              <span>800+ followers</span>
            </div>
            <div className={styles.statItem}>
              <Image
                src="/images/facebook.png"
                alt="Facebook Followers"
                width={50}
                height={50}
                className={styles.statIcon}
              />
              <span>2100+ followers</span>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;