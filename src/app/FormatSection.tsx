'use client';
import styles from './FormatSection.module.css';
import Image from 'next/image';

const FormatSection: React.FC = () => {
  return (
    <section className={styles.formatSection}>
      <div className={styles.formatContent}>
        <div className={styles.formatContainer}>
          <div className={styles.fingerprintFrame}>
            <Image
              src="/images/finger.png" 
              alt="Fingerprint design"
              width={500}
              height={500}
              className={styles.fingerprintImage}
            />
          </div>
          <div className={styles.frame}>
            <h1>Формат змагань - <span className={styles.highlightRed}>Jeopardy</span></h1>
            <p>
              Завдання класифікуються за категоріями, кожна з яких має свій баловий еквівалент, зважаючи на складність. Учасники намагаються вирішити якомога більше завдань за встановлений час, і відповідно до кількості балів визначається їх місце в рейтингу в реальному часі.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatSection;