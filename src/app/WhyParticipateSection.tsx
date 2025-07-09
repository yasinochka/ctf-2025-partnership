'use client';
import styles from './WhyParticipateSection.module.css';
import Image from 'next/image';

const WhyParticipateSection: React.FC = () => {
  return (
    <section className={styles.whyparticipateSection}>
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1>Чому варто брати участь у CTF-змаганнях? </h1>
                    
                </div>
                <div className={styles.redFrame}>
                    <Image
              src="/images/redFrame.png" 
              alt="Frame design"
              width={1030}
              height={1000}
              className={styles.redframeImage}
            />
                </div>
                <div className={styles.rectangles}>
                    <Image
              src="/images/rectangle.png" 
              alt="rectangle design"
              width={200}
              height={100}
              className={styles.rectanglesImage}
            />

             <Image
              src="/images/rectangle.png" 
              alt="rectangle design"
              width={200}
              height={100}
              className={styles.rectanglesImage}
            />

             <Image
              src="/images/rectangle.png" 
              alt="rectangle design"
              width={200}
              height={100}
              className={styles.rectanglesImage}
            />

             <Image
              src="/images/rectangle.png" 
              alt="rectangle design"
              width={200}
              height={100}
              className={styles.rectanglesImage}
            />

             <Image
              src="/images/rectangle.png" 
              alt="rectangle design"
              width={200}
              height={100}
              className={styles.rectanglesImage}
            />

             <Image
              src="/images/rectangle.png" 
              alt="rectangle design"
              width={200}
              height={100}
              className={styles.rectanglesImage}
            />
                </div>
            </div>
        </div>
    </section>
  );
};

export default WhyParticipateSection;