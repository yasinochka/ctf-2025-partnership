"use client";
import styles from "/Users/macbook/Desktop/brochure/ctf-2025-partnership/src/app/types/Packages.module.css";
import { useState } from "react";
import { Package } from "./types/types";
import Image from "next/image";

// Визначення пропсів для Packages
interface PackagesProps {
  cart: Package[];
  setCart: React.Dispatch<React.SetStateAction<Package[]>>;
  selectedPackages: Set<string>;
  setSelectedPackages: React.Dispatch<React.SetStateAction<Set<string>>>;
  packages?: Package[]; // Зроблено опціональним
}

const Packages = ({ cart, setCart, selectedPackages, setSelectedPackages, packages = [] }: PackagesProps) => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  // Локальні дані про пакети (за замовчуванням)
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
        "Банер з логотипами на події.",
        "Логотип у поствідео на @best_lviv.",
        "Мention у 1 story, дайджест у Telegram.",
        "Нетворкінг в день закриття.",
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
      ],
      descriptions: [
        "Співбесіди з учасниками на нетворкінгу.",
        "Пост про компанію в LinkedIn.",
        "Розіграш (Kahoot/Quiz).",
        "До 3 stories з контентом компанії.",
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
        "Доступ до CV",
        "Пост про компанію в Instagram @best_lviv",
        "Надання завдань для змагань",
      ],
      descriptions: [
        "Відео до 5 хвилин на нетворкінгу.",
        "Воркшоп до 1 години.",
        "База CV учасників.",
        "Стаття на BEST Lviv.",
        "Логотип на мерчі (футболки, плакати).",
      ],
    },
  ];

  const toggleCart = (pkg: Package) => {
    // Ігноруємо кліки для Base *
    if (pkg.id === "1") return;

    setCart((prevCart: Package[]) => {
      const isAlreadyInCart = prevCart.some((item: Package) => item.id === pkg.id);
      if (isAlreadyInCart) {
        // Видаляємо пакет з кошика і selectedPackages
        setSelectedPackages(new Set([...selectedPackages].filter((id) => id !== pkg.id)));
        return prevCart.filter((item: Package) => item.id !== pkg.id);
      } else {
        // Додаємо пакет до кошика і selectedPackages
        setSelectedPackages(new Set([...selectedPackages, pkg.id]));
        return [...prevCart, { ...pkg, quantity: 1 }];
      }
    });
  };

  const openDetails = (pkg: Package) => {
    setSelectedPackage(pkg);
  };

  const closeDetails = () => {
    setSelectedPackage(null);
  };

  return (
    <section className={styles.packagesSection}>
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
            >
              <h2 className={styles.packageTitle}>{pkg.name}</h2>
              <p className={styles.packagePrice}>{pkg.price}</p>
              {pkg.id === "1" && (
                <p className={styles.mandatoryText}>Цей пакет є обов’язковим!</p>
              )}
              <ul className={styles.packageFeatures}>
                {pkg.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <Image
                      src="/images/Union.png"
                      alt="Union Icon"
                      width={15}
                      height={15}
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
                  {cart.some((item: Package) => item.id === pkg.id) && pkg.id !== "1" ? "Видалити" : "До кошика"}
                </button>
                <Image
                  src="/images/info.png"
                  alt="Partner Info"
                  width={30}
                  height={30}
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
            <h2>{selectedPackage.name} {selectedPackage.price}</h2>
            <ul className={styles.modalFeatures}>
              <li>Логотип на брендволлі</li>
              <li>Плакат на брендволлі</li>
              <li>Логотип у постівентному відео</li>
              <li>Логотип у постівідео на @best_lviv</li>
              <li>Логотип у постівідео на сторінці всиx партнерів змагань</li>
              <li>Логотип у всіх змагань</li>
              <li>Логотип у постівентному відео</li>
              <li>Промоція в соцмережах</li>
              <li>Дайджест у Telegram</li>
              <li>Участь у нетворкінгу</li>
              <li>Нетворкінг у день закриття</li>
            </ul>
            <button className={styles.closeButton} onClick={closeDetails}>
              Закрити
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Packages;