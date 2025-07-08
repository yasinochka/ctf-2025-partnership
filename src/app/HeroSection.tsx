'use client';
import styles from './HeroSection.module.css';
const heroImage: string = '/images/bigmask.png';
const calendarIcon: string = '/images/Group 950 (1).png'; // Шлях до вашого зображення
const HeroSection: React.FC = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <p className={styles.heroQuote}>Щоб захищати, треба вміти атакувати</p>
                    <h1 className={styles.heroTitle}>Best Capture The Flag</h1>
                    <div className={styles.heroSubtitleContainer}>
                        <img src={calendarIcon} alt="Календар" className={styles.calendarIcon} />
                        <p className={styles.heroSubtitle}>22-23 листопада</p>
                    </div>
                    <a href="#partner" className={styles.heroButton}>Стати партнером</a>
                </div>
                <div className={styles.heroMask}>
                    <img src={heroImage} alt="Фон героїв" className={styles.heroMaskImage} />
                </div>
                <div className={styles.heroCode}></div>
            </div>
        </section>
    );
};

export default HeroSection;