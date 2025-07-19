'use client';
import styles from './StatsSection.module.css';
import Image from 'next/image';

const StatsSection: React.FC = () => {
  return (
    <section className={styles.statsSection} id="stats">
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.statsImg}>
            <Image
              src="/images/stats.svg"
              alt="Stats"
              width={700}
              height={400}
              className={styles.statsImage}
            />
            <div className={styles.statsItems}>
              <div className={styles.statItem}>
                <div className={styles.iconWrapper}>
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram Followers"
                    width={50}
                    height={50}
                    className={styles.statIcon}
                  />
                </div>
                <span>3550+ followers</span>
              </div>
              <div className={styles.statItem}>
                <div className={styles.iconWrapper}>
                  <Image
                    src="/images/telegram.png"
                    alt="Tg Followers"
                    width={50}
                    height={50}
                    className={styles.statIcon}
                  />
                </div>
                <span>900+ followers</span>
              </div>
              <div className={styles.statItem}>
                <div className={styles.iconWrapper}>
                  <Image
                    src="/images/linkedin.png"
                    alt="LinkedIn Followers"
                    width={50}
                    height={50}
                    className={styles.statIcon}
                  />
                </div>
                <span>750+ followers</span>
              </div>
            </div>
          </div>
          <h1 className={styles.title}>Статистика</h1>
          <div className={styles.statsItemsMobile}>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/instagram.png"
                  alt="Instagram Followers"
                  width={50}
                  height={50}
                  className={styles.statIcon}
                />
              </div>
              <span>3550+ followers</span>
            </div>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/telegram.png"
                  alt="Tg Followers"
                  width={50}
                  height={50}
                  className={styles.statIcon}
                />
              </div>
              <span>900+ followers</span>
            </div>
            <div className={styles.statItem}>
              <div className={styles.iconWrapper}>
                <Image
                  src="/images/linkedin.png"
                  alt="LinkedIn Followers"
                  width={50}
                  height={50}
                  className={styles.statIcon}
                />
              </div>
              <span>750+ followers</span>
            </div>
          </div>
          <div className={styles.settingMobile}>
            <Image
              src="/images/settingmobile.svg"
              alt="Setting Mobile"
              width={125}
              height={100}
              className={styles.settingMobileImage}
            />
          </div>
          <div className={styles.additionalContent}>
            <div className={styles.frameWrapper}>
              <Image
                src="/images/statsFrame.svg"
                alt="Team Photo Desktop"
                width={1000}
                height={800}
                className={styles.teamPhoto}
              />
              <Image
                src="/images/StatsFrameMobile.svg"
                alt="Team Photo Mobile"
                width={500}
                height={400}
                className={styles.teamPhotoMobile}
              />
              <div className={styles.statsText}>
                <h1>Статистика CTF 2024</h1>
                <p>Користувачі, які пройшли повну реєстрацію: 154</p>
                <p>Зареєстрованих команд: 42</p>
                <p>Команди, що пройшли відбір: 12</p>
                <p>Кількість переглядів публікацій під час івентів: 20.5 тисяч</p>
                <p>Середня кількість переглядів у Stories: 675</p>
                <p>Середня кількість взаємодій протягом місяця: 6 тисяч</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;