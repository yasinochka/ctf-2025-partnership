'use client';
import styles from './HeroSection.module.css';
const heroImage: string = '/images/bigmask.png';
const HeroSection: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <p className={styles.heroQuote}>Щоб знати як захищати, треба знати, як атакувати</p>
                    <h1 className={styles.heroTitle}>Capture the flag</h1>
                    <p className={styles.heroSubtitle}>22-23 листопада</p>
                    <a href="#partner" className={styles.heroButton}>Стати партнером</a>
                </div>
                <div className={styles.heroMask}>
                    <img src={heroImage} alt="Hero background" className={styles.heroMaskImage} />
                </div>
                <div className={styles.heroCode}></div>
            </div>
        </section>
    );
};

export default HeroSection;