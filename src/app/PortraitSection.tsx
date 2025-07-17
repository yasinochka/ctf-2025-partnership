'use client';
import styles from './Portrait.module.css';
import Image from 'next/image';

const PortraitSection: React.FC = () => {
  return (
    <section className={styles.portraitSection}>
      <div className={styles.content}>
        <div className={styles.TextContainer}>
          <h1 className={styles.title}>Портрет учасника</h1>
          <div className={styles.underTitle}>
            <ul className={styles.goalList}>
              <li>Студент, віком 17-21 років</li>
              <li>Зацікавлений сферою кібербезпеки</li>
              <li>Прагне розвивати командні навички, працювати зі справжніми 
                технічними викликами та налагодити зв’язки з експертами у цій галузі.
              </li>
            </ul>
          </div>
          <div className={styles.universities}>
            <h2 className={styles.title2}>Статистика по курсах університету:</h2>
            <ul className={styles.goalList2}>
              <li>І курс – 25</li>
              <li>ІІ курс – 58</li>
              <li>ІІІ курс – 34</li>
              <li>IV курс – 30</li>
              <li>Магістратура – 5</li>
            </ul>
            <div className={styles.universityWrapper}>
              <div className={styles.leftDiv}>
                <Image
                  src="/images/portraitandtabl.png"
                  alt="portraitandtabl"
                  width={700}
                  height={500}
                />
                <h3 className={styles.title3}>Спеціальності на яких навчаються учасники:</h3>
                <ul className={styles.goalList3}>
                  <li>Кібербезпека</li>
                  <li>Мережеві технології</li>
                  <li>Телекомунікакція і радіотехніка</li>
                  <li>Інженерія програмного забезпечення</li>
                </ul>
                <ul className={styles.goalList4}>
                  <li>Комп’ютерні науки</li>
                  <li>Прикладна математика</li>
                  <li>Інформаційні технології</li>
                  <li>Системний аналіз</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortraitSection;