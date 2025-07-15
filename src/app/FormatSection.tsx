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
              width={300}
              height={330}
              className={styles.fingerprintImage}
            />
          </div>
          <div className={styles.frame}>
            <h1>Формат змагань - <span className={`${styles.highlightRed} ${styles.jeopardyFont}`}>Jeopardy</span></h1>
                <p>
                Цьогоріч <span className={styles.highlightRed}>BEST CTF</span> знову проводиться у форматі Jeopardy. Принцип змагань полягає тому, що студенти вирішують завдання, виборюючи “прапорці”, які приносять командам бали. За відведений час змагань учасники намагаються розв’язати якомога більше задач поділених на категорії: Web, Crypto, Reversing, Exploitation, борючись за місце в рейтингу.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FormatSection;