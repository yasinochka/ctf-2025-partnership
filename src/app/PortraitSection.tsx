'use client';
import styles from './Portrait.module.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const PortraitSection: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.portraitSection}>
      <div className={styles.content}>
        <div className={styles.TextContainer}>
          <h1 className={styles.title}>Портрет учасника</h1>
          <div className={styles.underTitleNew}>
            <ul className={styles.goalListNew}>
              <li>Студент, віком 17-21 років</li>
              <li>Зацікавлений сферою кібербезпеки</li>
              <li>Прагне розвивати командні навички, працювати зі справжніми 
                технічними викликами та налагодити зв’язки з експертами у цій галузі.
              </li>
            </ul>
          </div>
          <div className={styles.universitiesNew}>
            <h2 className={styles.title2New}>Статистика по курсах університету:</h2>
            <ul className={styles.goalList2New}>
              <li>І курс – 17%</li>
              <li>ІІ курс – 38%</li>
              <li>ІІІ курс – 22%</li>
              <li>IV курс – 20%</li>
              <li>Магістратура – 3%</li>
            </ul>
            <div className={styles.universityWrapperNew}>
              <div className={styles.leftDivNew}>
                {isDesktop && (
                  <Image
                    src="/images/portraitandtabl.svg"
                    alt="portraitandtabl"
                    width={700}
                    height={500}
                  />
                )}
                <h3 className={styles.title3New}>Спеціальності на яких навчаються учасники:</h3>
                <ul className={styles.goalList3New}>
                  <li>Кібербезпека</li>
                  <li>Мережеві технології</li>
                  <li>Телекомунікакція і радіотехніка</li>
                  <li>Інженерія програмного забезпечення</li>
                </ul>
                <ul className={styles.goalList4New}>
                  <li>Комп’ютерні науки</li>
                  <li>Прикладна математика</li>
                  <li>Інформаційні технології</li>
                  <li>Системний аналіз</li>
                </ul>
              </div>
            </div>
          </div>
          {!isDesktop && (
            <div className={styles.universities}>
              <div className={styles.mobileUnderTitle}>
                <ul className={styles.goalList}>
                  <li>Студент, віком 17-21 років</li>
                  <li>Зацікавлений сферою кібербезпеки</li>
                  <li>Прагне розвивати командні навички, працювати зі справжніми 
                    технічними викликами та налагодити зв’язки з експертами у цій галузі.
                  </li>
                </ul>
              </div>
              <div className={styles.mobileStat}>
                <h2 className={styles.title2}>Статистика по курсах університету:</h2>
                <ul className={styles.goalList2}>
                  <li>І курс – 17%</li>
                  <li>ІІ курс – 38%</li>
                  <li>ІІІ курс – 22%</li>
                  <li>IV курс – 20%</li>
                  <li>Магістратура – 3%</li>
                </ul>
                </div>
                <div className={styles.universityWrapperMobile}>
                  <div className={styles.leftDivMobile}>
                    {!isDesktop && (
                      <Image
                        src="/images/head.svg"
                        alt="head"
                        width={170}
                        height={170}
                      />
                    )}
                </div>
              </div>
              <h3 className={styles.title3}>Спеціальності на яких навчаються учасники:</h3>
              <div className={styles.mobileSpecialties}>
                <ul className={styles.goalList3}>
                  <li>Кібербезпека</li>
                  <li>Мережеві технології</li>
                  <li>Телекомунікакція і радіотехніка</li>
                  <li>Інженерія програмного забезпечення</li>
                  <li>Комп’ютерні науки</li>
                  <li>Прикладна математика</li>
                  <li>Інформаційні технології</li>
                  <li>Системний аналіз</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortraitSection;