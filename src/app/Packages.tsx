"use client";
import styles from "./types/Packages.module.css";
import { useState, useEffect } from "react";
import { Package } from "./types/types";
import Image from "next/image";

interface PackagesProps {
  cart: Package[];
  setCart: React.Dispatch<React.SetStateAction<Package[]>>;
  selectedPackages: Set<string>;
  setSelectedPackages: React.Dispatch<React.SetStateAction<Set<string>>>;
  packages?: Package[];
}

const Packages = ({ cart, setCart, selectedPackages, setSelectedPackages, packages = [] }: PackagesProps) => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const defaultPackages: Package[] = [
    {
      id: "1",
      name: "Base *",
      price: "350$",
      features: [
        "Логотип компанії на бренд-волл та на сайті події",
        "Логотип у постівентному відео",
        "Промоція в соцмережах",
        "Участь у нетворкінгу",
      ],
      descriptions: [
        "На місці проведення події буде розміщено великий банер з логотипами всіх компаній, що стали нашими партнерами. На сайті івенту теж буде додано логотип про кожної з них.",
        "Після завершення змагань на Instagram-сторінку @best_lviv буде викладено відео з додаванням логотипа партнерів івенту.",
        "Розміщення інформації про компанію в соціальних мережах: 1 згадка в Instagram Stories на сторінці @best_lviv — Вашу компанію буде представлено як офіційного партнера BEST CTF 2025. Постдайджест у Telegram-каналі BEST Lviv Students https://t.me/bestlviv — інформація про Вашу компанію буде розміщена в пості про всіх партнерів.",
        "Нетворкінг – це час виділений на неформальну бесіду між організаторами, представниками компаній та учасниками для надання можливості поділитися інформацією про компанію, наявні вакансії та пропозиції. Нетворкінг відбуватиметься після лекцій та перед початком змагань.",
      ],
    },
    {
      id: "2",
      name: "Brand",
      price: "400$",
      features: [
        "BEST Treasure Hunt",
        "Розміщення банера компанії під час змагань",
        "Трансляція відеоролика про компанію під час події",
        "Розсилка можливостей від компанії у Telegram-боті та LinkedIn",
        "Промоція у TikTok",
      ],
      descriptions: [
        "Під час тижня живої реклами, що проходитиме за місяць до старту події в Національному університеті “Львівська політехніка”, ми організовуємо квест для студентів. Компанії-партнери, зокрема Ваша, можуть надати подарунки (мерч), які будуть заховані на території університету. Для учасників у форматі Instagram-stories публікуватимуться підказки для пошуку. Після знаходження подарунків ми опублікуємо Instagram-stories з переможцями та згадкою про Вашу компанію на сторінці @best_lviv.",
        "Впродовж усієї події на місці проведення буде розміщено банер Вашої компанії (надається компанією до зазначеного терміну).",
        "Трансляція відео про компанію на перервах між лекціями та під час нетворкінгу. (відео надсилає компанія, часове обмеження відео до 1 хвилини).",
        "Коротке відео про Вашу компанію та її внесок у розвиток молоді й кібербезпеки викладене на сторінку @best__lviv у TikTok. Відео буде зняте під час події, матеріал про Вашу компанію має бути підготовлений Вами до змагань.",
        "Розсилка можливостей від компанії у Telegram-боті та LinkedIn\nЩомісяця, протягом пів року у Telegram-боті CTF ’2025 та на нашій сторінці в LinkedIn будуть публікуватись пропозиції Вашої компанії (курси, стажування, вакансії).",
      ],
    },
    {
      id: "3",
      name: "Go with the flow",
      price: "700$",
      features: [
        "Стаття на сайті BEST Lviv",
        "Проведення лекції або воркшопу для учасників",
        "Доступ до бази CV учасників",
        "Логотип на футболках учасників-переможців та організаторів",
        "Пост про компанію в Instagram @best_lviv",
        "Надання завдань для змагань",
      ],
      descriptions: [
        "На сайті BEST Lviv буде розміщена стаття про Вашу компанію та її внесок в організацію івенту.",
        "Представник Вашої компанії має змогу провести лекцію або воркшоп для учасників (обмеження в часі – 1 година). Лекція має на меті не лише поділитися практичними знаннями, кейсами чи досвідом із реального середовища, а й надихнути студентів на подальший розвиток у галузі. Воркшоп – це тип інтерактивного навчання, де учасники виконують низку навчальних дій, це може бути демонстраційний показ, практичне заняття або дискусійний клуб.",
        "Надання бази CV учасників для подальшої комунікації з ними.",
        "Розміщення логотипа компанії на футболках учасників-переможців та організаторів (обмежена кількість – 3).",
        "Ми опублікуємо пост в Instagram-профілі @best_lviv, у якому буде представлена інформація про Вашу компанію із зазначенням Вашого статусу як ключового партнера події.",
        "Змога надати завдання для змагань, тим самим компанія має можливість підвищити свій імідж серед учасників. На платформі для завдань буде позначено, що вони від компанії, таким чином відбуватиметься піар в середовищі.",
      ],
    },
  ];

  useEffect(() => {
    const basePackage = defaultPackages.find((pkg) => pkg.id === "1");
    if (basePackage && !cart.some((item) => item.id === "1")) {
      setCart((prevCart) => [...prevCart, { ...basePackage, quantity: 1 }]);
      setSelectedPackages((prev) => new Set([...prev, "1"]));
    }
  }, [cart, setCart, setSelectedPackages]);

  const toggleCart = (pkg: Package) => {
    if (pkg.id === "1") return;

    setCart((prevCart: Package[]) => {
      const isAlreadyInCart = prevCart.some((item: Package) => item.id === pkg.id);
      if (isAlreadyInCart) {
        setSelectedPackages(new Set([...selectedPackages].filter((id) => id !== pkg.id)));
        return prevCart.filter((item: Package) => item.id !== pkg.id);
      } else {
        setSelectedPackages(new Set([...selectedPackages, pkg.id]));
        return [...prevCart, { ...pkg, quantity: 1 }];
      }
    });
  };

  const openDetails = (pkg: Package) => {
    setSelectedPackage(pkg);
  };

  const closeDetails = () => {
    const modalOverlay = document.querySelector(`.${styles.modalOverlay}`);
    const modalContent = document.querySelector(`.${styles.modalContent}`);
    if (modalOverlay && modalContent) {
      modalOverlay.classList.add(`${styles.closing}`);
      modalContent.classList.add(`${styles.closing}`);
      setTimeout(() => {
        setSelectedPackage(null);
        modalOverlay.classList.remove(`${styles.closing}`);
        modalContent.classList.remove(`${styles.closing}`);
      }, 700);
    }
  };

  useEffect(() => {
    if (selectedPackage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedPackage]);

  return (
    <section className={styles.packagesSection} id="offers">
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>ПРОПОЗИЦІЇ</h1>
        <div className={styles.packagesContainer}>
          {(packages.length > 0 ? packages : defaultPackages).map((pkg) => (
            <div
              key={pkg.id}
              className={`${styles.packageCard} ${
                pkg.id === "1" ? styles.packageCardBase :
                selectedPackages.has(pkg.id) ? styles.packageCardSelected : ""
              }`}
              data-package={pkg.id}
            >
              <h2 className={styles.packageTitle}>{pkg.name}</h2>
              <p className={styles.packagePrice}>{pkg.price}</p>
              {pkg.id === "1" && (
                <p className={styles.mandatoryText}>Цей пакет є обов’язковим!</p>
              )}
              {pkg.id === "3" && (
                <p className={styles.remainingText}>(Залишилось 3)</p>
              )}
              <ul className={styles.packageFeatures}>
                {pkg.features.map((feature, index) => (
                  <li
                    key={index}
                    className={styles.featureItem}
                    style={
                      pkg.id === "3"
                        ? { position: "relative", top: "-2px" }
                        : {}
                    }
                    data-testid={`feature-item-${pkg.id}-${index}`}
                  >
                    <Image
                      src="/images/Union1.svg"
                      alt="Union Icon"
                      width={10}
                      height={10}
                      className={
                        pkg.id === "1"
                          ? styles.unionBase
                          : pkg.id === "2"
                          ? styles.unionBrand
                          : styles.unionFlow
                      }
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className={styles.buttonGroup}>
                <button
                  className={styles.addButton}
                  onClick={() => toggleCart(pkg)}
                  disabled={pkg.id === "1"}
                >
                  {cart.some((item: Package) => item.id === pkg.id) ? "Видалити" : "До кошика"}
                </button>
              </div>
              <div className={styles.infoGroup}>
                <Image
                  src="/images/union.svg"
                  alt="Partner Info"
                  width={20}
                  height={20}
                  className={
                    pkg.id === "1"
                      ? styles.infoBase
                      : pkg.id === "2"
                      ? styles.infoBrand
                      : styles.infoFlow
                  }
                  onClick={() => openDetails(pkg)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.additionalInfo}>
          <p>10% від залучених коштів йдуть на потреби ЗСУ.</p>
          <p>Також після завершення BEST CTF 2025 Вам надається фото та відеозвіт від організаторів.</p>
        </div>
      </div>
      {selectedPackage && (
        <div className={styles.modalOverlay} onClick={closeDetails}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src="/images/close.svg"
              alt="Close Modal"
              width={40}
              height={40}
              className={styles.closeIcon}
              onClick={closeDetails}
            />
            <h2 className={styles.modalTitle}>{selectedPackage.name} {selectedPackage.price}</h2>
            <ul className={styles.modalFeatures}>
              {selectedPackage.descriptions.map((desc, index) => {
                const [title, ...rest] = desc.split('\n');
                return (
                  <li key={index}>
                    <h3>{title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: rest.join('<br>').replace(/\n/g, '<br>') }}></p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;