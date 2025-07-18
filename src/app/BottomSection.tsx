"use client";
import styles from './Bottom.module.css';
import Image from 'next/image';

const BottomSection: React.FC = () => {
  const handleScroll = () => {
    document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.bottomSection}>
      <div className={styles.bottomBlock}>
        <div className={styles.textBottom}>
          <p>Зробіть свій внесок у майбутнє кібербезпеки! Станьте партнером <span className={styles.highlightRed}>BEST CTF 2025</span>!</p>
        </div>
        <div className={styles.buttonBottom}>
          <button
            className={styles.textOnButton}
            onClick={handleScroll}
            aria-label="Перейти до акційної пропозиції"
          >
            Співпрацювати
          </button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <Image
            src="/images/bottomLeft.svg"
            alt="left"
            width={450}
            height={580}
          />
        </div>
        <div className={styles.right}>
          <Image
            src="/images/bottomRight.svg"
            alt="right"
            width={500}
            height={580}
          />
        </div>
      </div>
      <div className={styles.strip}>
        <div className={styles.stripItem}>
          <div className={styles.socialLogos}>
            <a href="https://t.me/bestlviv" target="_blank" rel="tg">
              <Image
                src="/images/telegram.png"
                alt="Tg Followers"
                width={35}
                height={35}
                className={styles.TgIcon}
              />
            </a>
            <a href="https://www.instagram.com/best_lviv/" target="_blank" rel="insta">
              <Image
                src="/images/instagram.png"
                alt="Instagram Followers"
                width={35}
                height={35}
                className={styles.statIcon}
              />
            </a>
            <a href="https://ua.linkedin.com/company/bestlviv" target="_blank" rel="linkedin">
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn Followers"
                width={35}
                height={35}
                className={styles.statIcon}
              />
            </a>
          </div>
        </div>
        <div className={styles.stripItem}>
          <Image
            src="/images/logocopy.png"
            alt="CTF logo"
            width={75}
            height={50}
            className={styles.statIcon + " " + styles.bestLogo}
          />
        </div>
        <div className={styles.stripItem}>
          <p className={styles.year + " " + styles.yearText}>2025</p>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;