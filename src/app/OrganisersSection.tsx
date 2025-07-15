'use client';
import styles from './OrganisersSection.module.css';
import Image from 'next/image';

const OrganisersSection: React.FC = () => {
  return (
    <section className={styles.organisersSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>ОРГАНІЗАТОР ПОДІЇ</h2>
        <div className={styles.logoContainer}>
  <div className={styles.textOverlay}>
    <div className={styles.highlightedText}>
      <p>BEST Lviv</p>
    </div>
    <div className={styles.mainText}>
      <p>(Board of European Students of Technology) - </p>
      <p>осередок університету "Львівська політехніка"</p>
      <p>розвиває технічну освіту та інновації</p>
      <p>студентська організація</p>
      <p>надає можливості для молоді</p>
      <p>унікальні проекти та конкурси</p>
    </div>
  </div>
  <Image
    src="/images/bestframe.png"
    alt="BEST Logo"
    width={500}
    height={300}
    className={`${styles.logo} ${styles.logoFaded}`}
  />
  <Image
    src="/images/bestlogo.png"
    alt="BEST Logo"
    width={350}
    height={250}
    className={`${styles.logo} ${styles.logoShifted}`}
  />
</div>
        <div className={styles.mapContainer}>
            <div className={styles.radarContainer}>
    <Image
      src="/images/radar.png"
      alt="Red Radar"
      width={400}
      height={900}
      className={styles.radar}
    />
  </div>
          <Image
            src="/images/best.png"
            alt="Europe Map"
            width={600}
            height={550}
            className={styles.map}
          />
          <div className={styles.stats}>
            <div className={styles.statGroup}>
              <div className={styles.statItem}>
                83
                <span className={styles.statText}>осередків</span>
              </div>
              <div className={styles.statColumn}>
                <div className={styles.statItem}>
                  29
                  <span className={styles.statText}>країн</span>
                </div>
                <div className={styles.statItem}>
                  36
                  <span className={styles.statText}>років досвіду</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganisersSection;