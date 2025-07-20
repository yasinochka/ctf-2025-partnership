'use client';
import styles from './WhyParticipateSection.module.css';
import Image from 'next/image';

const WhyParticipateSection: React.FC = () => {
  const rectanglesData = [
    {
      title: "Підсилення соціальної відповідальності бренду",
      text: "Участь у BEST CTF формує активну позицію Вашої компанії у сфері освіти, кібербезпеки та демонструє підтримку українських військових і волонтерів.",
      icon: "/images/why1.svg",
    },
    {
      title: "Доступ до молодих талантів у сфері кібербезпеки",
      text: "Отримайте пряму можливість познайомитися з перспективними студентами. BEST CTF дозволяє оцінювати навички в реальному часі та формувати перший контакт з потенційними майбутніми спеціалістами.",
      icon: "/images/why2.svg",
    },
    {
      title: "Підтримка українських військових",
      text: "10% зібраних коштів буде передано на підтримку Збройних Сил України — це Ваша нагода зробити крок до спільної перемоги.",
      icon: "/images/why3.svg",
    },
    {
      title: "Підвищення впізнаваності бренду серед молодої аудиторії",
      text: "Присутність Вашої компанії на BEST CTF посилює асоціацію бренду з інноваціями, розвитком та підтримкою українських студентів.",
      icon: "/images/why5.svg",
    },
    {
      title: "Інвестиція в майбутнє галузі",
      text: "BEST CTF є плацдармом для формування кваліфікованого середовища. Саме тут формуються компетентні, мотивовані студенти-фахівці, які вже завтра визначатимуть стандарти кібербезпеки.",
      icon: "/images/why6.svg",
    },
  ];

  return (
    <section className={styles.whyparticipateSection}>
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h1>Чому варто брати участь у CTF-змаганнях?</h1>
          </div>
          <div className={styles.redFrame}>
            <Image
              src="/images/redFrame.svg"
              alt="Frame design"
              width={2400}
              height={1060}
              className={styles.redframeImage}
            />
          </div>
          <div className={styles.rectangles}>
            {rectanglesData.map((rect, index) => (
              <div key={index} className={styles.rectangle}>
                <div className={styles.iconTitleWrapper}>
                  <Image
                    src={rect.icon}
                    alt={`${rect.title} icon`}
                    width={20}
                    height={20}
                    className={`${styles.rectangleIcon} ${
                      index === 0 ? styles.rectangleIcon1 :
                      index === 1 ? styles.rectangleIcon2 :
                      index === 2 ? styles.rectangleIcon3 :
                      index === 3 ? styles.rectangleIcon4 :
                      index === 4 ? styles.rectangleIcon5 :
                      index === 5 ? styles.rectangleIcon6 : ''
                    }`}
                  />
                  <h3 className={styles.rectangleTitle}>{rect.title}</h3>
                </div>
                <p className={styles.rectangleText}>{rect.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyParticipateSection;