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
          <div className={styles.statsImg}>
            <Image
              src="/images/stats.png"
              alt="Stats"
              width={700}
              height={400}
              className={styles.statsImage}
            />
            <div className={styles.statsItems}>
              <div className={styles.statItem}>
                <Image
                  src="/images/instagram.png"
                  alt="Instagram Followers"
                  width={50}
                  height={50}
                  className={styles.statIcon}
                />
                <span>3550+ followers</span>
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
                <span>750+ followers</span>
              </div>
            </div>
          </div>
          <h1 className={styles.title}>Статистика</h1>
          <div className={styles.additionalContent}>
            <div className={styles.frameWrapper}>
              <Image
                src="/images/statsFrame.png"
                alt="Team Photo"
                width={1000}
                height={800}
                className={styles.teamPhoto}
              />
              <div className={styles.statsText}>
                <h1 >Статистика CTF 2024</h1>
                <p>Користувачі, які пройшли повну реєстрацію: 154</p>
                <p>Зареєстрованих команд: 42</p>
                <p>Команди, що пройшли відбір: 12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;