"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "/Users/macbook/Desktop/brochure/ctf-2025-partnership/src/app/types/Additional.module.css";
import { Package } from "./types/types";

// Визначення типу пропсів
interface AdditionalOptionsProps {
  cart?: Package[];
  setCart?: (cart: Package[]) => void;
  removeFromCart?: (item: Package) => void;
  selectedPackageServices?: string[];
}

// Тип для опцій
interface AddOption {
  id: string;
  name: string;
  price: string;
  description: string;
  available: number;
}

// Просте модальне вікно
const Modal = ({ onClose, children }: { onClose: () => void; children: React.ReactNode }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

// Дані для додаткових опцій
const addOptions: AddOption[] = [
  { id: "1", name: "Доступ до бази CV учасників - 90$", price: "90$", description: "Доступ до бази резюме всіх учасників.", available: 10 },
  { id: "2", name: "Публікація reels в Instagram - 80$", price: "80$", description: "Публікація ролика в Instagram.", available: 3 },
  { id: "3", name: "Пост у LinkedIn - 80$", price: "80$", description: "Публікація поста у LinkedIn.", available: 0 },
  { id: "4", name: "Промоція в TikTok - 60$", price: "60$", description: "Промоція в TikTok.", available: 5 },
  { id: "5", name: "Логотип на футболках - 150$", price: "150$", description: "Логотип на футболках.", available: 3 },
  { id: "6", name: "BEST Treasure Hunt - 150$", price: "150$", description: "Організація квесту.", available: 2 },
  { id: "7", name: "Лекція/воркшоп - 190$", price: "190$", description: "Проведення заходу.", available: 3 },
];

const AdditionalOptions = ({
  cart = [],
  setCart = () => {},
  removeFromCart = () => {},
  selectedPackageServices = [],
}: AdditionalOptionsProps) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);

  useEffect(() => {
    if (openTooltipId) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openTooltipId]);

  const handleToggle = (serviceName: string) => {
    const service = addOptions.find(opt => opt.name === serviceName);
    if (!service || service.available === 0) return;

    setSelectedServices(prev => {
      const isSelected = prev.includes(serviceName);
      if (isSelected) {
        const itemToRemove = cart.find(item => item.name === serviceName);
        if (itemToRemove) removeFromCart(itemToRemove); // Виклик removeFromCart
        return prev.filter(s => s !== serviceName);
      } else {
        setCart([...cart, { id: `add_${Date.now()}_${serviceName}`, name: serviceName, price: service.price, quantity: 1, features: [], descriptions: [] }]);
        return [...prev, serviceName];
      }
    });
  };

  const handleTooltip = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenTooltipId(openTooltipId === id ? null : id);
  };

  return (
    <>
      <section className={styles.additionalSection}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>ДОДАТКОВІ ПРОПОЗИЦІЇ</h2>
          <div className={styles.additionalContainer}>
            {addOptions.map(service => {
              const isDisabled = selectedPackageServices.includes(service.name) || service.available === 0;
              const isSelected = selectedServices.includes(service.name);

              return (
                <div key={service.id} className={`${styles.additionalCard} ${isSelected ? styles.selectedCard : ''} ${isDisabled ? styles.disabledCard : ''}`}>
                  <div className={styles.cardContent}>
                    <span className={styles.serviceName}>{service.name}</span>
                    <div className={styles.infoCheckboxWrapper}>
                      <Image
                        src="/images/info.png"
                        alt="Info"
                        width={20}
                        height={20}
                        className={`${styles.infoIcon} ${isSelected ? styles.selectedInfoIcon : ''}`}
                        onClick={e => handleTooltip(service.id, e)}
                      />
                      <label className={styles.checkboxWrapper}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleToggle(service.name)}
                          disabled={isDisabled}
                          className={styles.checkbox}
                        />
                        <span className={styles.checkboxLabel}></span>
                        {isSelected && <span className={styles.checkboxCheckmark}></span>}
                      </label>
                    </div>
                  </div>
                  {openTooltipId === service.id && (
                    <Modal onClose={() => setOpenTooltipId(null)}>
                      <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={() => setOpenTooltipId(null)} aria-label="Close">
                          ×
                        </button>
                        <h2 className={styles.modalTitle}>{service.name}</h2>
                        <p className={styles.modalDescription}>{service.description}</p>
                      </div>
                    </Modal>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdditionalOptions;