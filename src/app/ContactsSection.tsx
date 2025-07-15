'use client';
import styles from './Contacts.module.css';
import Image from 'next/image';

const ContactsSection: React.FC = () => {
  return (
    <section className={styles.contactsSection} id="contact">
      <div className={styles.content}>
        <div className={styles.container}>
            <h1 className={styles.title}>Контакти</h1>
            <div className={styles.contactsFrames}>

                <div className={styles.Dima}>
                    <Image
                    src="/images/Dima.png"
                    alt="Dima"
                    width={400}
                    height={550}
                    />
                    <div className={styles.Text}>
                        <h1 className={styles.NameSurname}>Антончик Дмитро</h1>
                        <p className={styles.WhoIs}>Відповідальний за корпоративні зв'язки</p>
                        <div className={styles.MailWrapper}> 
                            <Image
                            src="/images/Mail.png"
                            alt="Phone"
                            width={13}
                            height={13}
                            className={styles.mail}
                            />
                            <p className={styles.Mail}>name.surname@best-eu.org</p>
                        </div>
                        <div className={styles.PhoneWrapper}> 
                            <Image
                            src="/images/Phone.png"
                            alt="Phone"
                            width={15}
                            height={15}
                            className={styles.phone}
                            />
                            <p className={styles.PhoneDima}>+380969809048</p>
                        </div>
                    </div>
                </div>

                <div className={styles.Yulya}>
                    <Image
                    src="/images/Dima.png"
                    alt="Yulya"
                    width={400}
                    height={550}
                    />
                     <div className={styles.Text}>
                        <h1 className={styles.NameSurname}>Синичак Юлія</h1>
                        <p className={styles.WhoIs}>Головний організатор</p>
                        <div className={styles.MailWrapper}> 
                            <Image
                            src="/images/Mail.png"
                            alt="Phone"
                            width={13}
                            height={13}
                            className={styles.mail}
                            />
                            <p className={styles.Mail}>name.surname@best-eu.org</p>
                            </div>
                        <div className={styles.PhoneWrapper}> 
                            <Image
                            src="/images/Phone.png"
                            alt="Phone"
                            width={15}
                            height={15}
                            className={styles.phone}
                            />
                            <p className={styles.PhoneYulya}>+380993107224</p>
                        </div>
                     </div>
                </div>

                <div className={styles.Vika}>
                    <Image
                    src="/images/Dima.png"
                    alt="Vika"
                    width={400}
                    height={550}
                    />
                    <div className={styles.Text}>
                        <h1 className={styles.NameSurname}>Галіпчак Вікторія</h1>
                        <p className={styles.WhoIs}>Відповідальна за корпоративні зв'язки</p>
                        <div className={styles.MailWrapper}> 
                            <Image
                            src="/images/Mail.png"
                            alt="Phone"
                            width={13}
                            height={13}
                            className={styles.mail}
                            />
                            <p className={styles.Mail}>name.surname@best-eu.org</p>
                        </div>
                        <div className={styles.PhoneWrapper}> 
                            <Image
                            src="/images/Phone.png"
                            alt="Phone"
                            width={15}
                            height={15}
                            className={styles.phone}
                            />
                        <p className={styles.PhoneVika}>+380681330480</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.underEverything}>
                <div className={styles.textUnder}>
                    <p> Зробіть свій внесок у майбутнє кібербезпеки !
                    Станьте партнером <span className={styles.highlightRed}>BEST CTF 2025</span>!</p>
                </div>
                <div className={styles.buttonUnder}>
                    <p className={styles.textOnButton}>Співпрацювати</p>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;