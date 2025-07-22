'use client';
import styles from './Contacts.module.css';
import Image from 'next/image';

const contacts = [
  {
    name: 'Антончик Дмитро',
    role: 'Відповідальний за корпоративні зв’язки',
    email: 'dmytro.antonchyk@best-eu.org',
    phone: '+380969809048',
    imageSrc: '/images/Dima.svg',
    imageAlt: 'Dima',
    phoneClass: styles.phoneDima,
  },
  {
    name: 'Синичак Юлія',
    role: 'Головний організатор',
    email: 'yuliia.synychak@best-eu.org',
    phone: '+380993107224',
    imageSrc: '/images/Yulya.svg',
    imageAlt: 'Yulya',
    phoneClass: styles.phoneYulya,
  },
  {
    name: 'Галіпчак Вікторія',
    role: 'Відповідальна за корпоративні зв’язки',
    email: 'victoriia.galipchak@best-eu.org',
    phone: '+380681330480',
    imageSrc: '/images/Vika.svg',
    imageAlt: 'Vika',
    phoneClass: styles.phoneVika,
  },
];

const ContactsSection = () => {
  return (
    <section className={styles.contactsSection} id="contact">
      <div className={styles.content}>
        <div className={styles.container}>
          <h1 className={styles.title}>Контакти</h1>
          <div className={styles.contacts}>
            {contacts.map((contact, index) => (
              <div key={index} className={styles.card}>
                <Image
                  src={contact.imageSrc}
                  alt={contact.imageAlt}
                  width={400}
                  height={550}
                  className={styles.image}
                />
                <div className={styles.info}>
                  <h1 className={styles.name}>{contact.name}</h1>
                  <p className={styles.role}>{contact.role}</p>
                  <div className={styles.mailWrapper}>
                    <Image
                      src="/images/Mail.svg"
                      alt="Mail"
                      width={13}
                      height={13}
                      className={styles.mailIcon}
                    />
                    <p>
                      <a
                        href={`mailto:${contact.email}`}
                        className={styles.email}
                      >
                        {contact.email}
                      </a>
                    </p>
                  </div>
                  <div className={styles.phoneWrapper}>
                    <Image
                      src="/images/Phone.svg"
                      alt="Phone"
                      width={15}
                      height={15}
                      className={styles.phoneIcon}
                    />
                    <p>
                      <a
                        href={`tel:${contact.phone}`}
                        className={contact.phoneClass}
                      >
                        {contact.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;