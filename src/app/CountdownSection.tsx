'use client';
import styles from './Countdown.module.css';
import { useState, useEffect } from 'react';

const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-08-21T00:00:00+03:00').getTime(); 

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <section className={styles.CountdownSection}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title1}>Акційна пропозиція “Early bird”</h1>
          <h2 className={styles.title2}>Акція діє ще</h2>
          <div className={styles.countdown}>
            <div className={styles.countdownItem}>
              <span className={styles.count}>{formatTime(timeLeft.days)}</span>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.count}>{formatTime(timeLeft.hours)}</span>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.count}>{formatTime(timeLeft.minutes)}</span>
            </div>
            <div className={styles.countdownItem}>
              <span className={styles.count}>{formatTime(timeLeft.seconds)}</span>
            </div>
          </div>
          <div className={styles.labels}>
            <p className={styles.label1}>Днів</p>
            <p className={styles.label2}>Годин</p>
            <p className={styles.label3}>Хвилин</p>
            <p className={styles.label4}>Секунд</p>
          </div>
          <p className={styles.notTitle}><span className={styles.highlightRed}>-5%</span> для партнерів, які придбають та оплатять пакети
          або додаткові опції у перший місяць пропозиції.</p>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;