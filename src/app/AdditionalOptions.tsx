"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import styles from "./types/Additional.module.css";
import { Package } from "./types/types";

interface AdditionalOptionsProps {
  cart?: Package[];
  setCart?: (newCart: Package[] | ((prevCart: Package[]) => Package[])) => void;
  removeFromCart?: (item: Package) => void;
  selectedPackageServices?: string[];
}

interface AddOption {
  id: string;
  name: string;
  price: string;
  description: string;
  available: number;
}

const Modal = ({ onClose, children }: { onClose: () => void; children: React.ReactNode }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const addOptions: AddOption[] = [
  { id: "1", name: "Доступ до бази CV учасників - 90$", price: "90$", description: "Доступ до бази резюме всіх учасників.", available: 6 },
  { id: "2", name: "Публікація reels в Instagram - 80$", price: "80$", description: "Публікація ролика в Instagram.", available: 6 },
  { id: "3", name: "Пост у LinkedIn - 80$", price: "80$", description: "Публікація поста у LinkedIn.", available: 6 },
  { id: "4", name: "Промоція в TikTok - 60$", price: "60$", description: "Промоція в TikTok.", available: 6 },
  { id: "5", name: "Логотип на футболках - 150$", price: "150$", description: "Логотип на футболках.", available: 6 },
  { id: "6", name: "BEST Treasure Hunt - 150$", price: "150$", description: "Організація квесту.", available: 6 },
  { id: "7", name: "Лекція/воркшоп - 190$", price: "190$", description: "Проведення заходу.", available: 6 },
];

const AdditionalOptions = ({
  cart = [],
  setCart = () => {},
  removeFromCart = () => {},
  selectedPackageServices = [],
}: AdditionalOptionsProps) => {
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);

  useEffect(() => {
    if (openTooltipId) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openTooltipId]);

  const toggleOption = useCallback((service: AddOption) => {
    console.log("toggleOption called for:", service.name);
    console.log("Current cart:", cart); 

    if (service.available === 0 || selectedPackageServices.includes(service.name)) {
      console.log(`Опція ${service.name} недоступна`);
      return;
    }

    const isAlreadyInCart = cart.some((item) => item.name === service.name);

    if (isAlreadyInCart) {
      setCart((prevCart: Package[]) => {
        const newCart = prevCart.filter((item) => item.name !== service.name);
        console.log(`Видалено ${service.name}, new cart:`, newCart); 
        return newCart;
      });
    } else {
      const currentOptions = cart.filter((item) => addOptions.some((opt) => opt.name === item.name)).length;
      if (currentOptions >= 7) {
        console.log("Досягнуто ліміт у 7 опцій");
        return;
      }
      const newItem: Package = {
        id: `add_${Date.now()}_${service.name}`,
        name: service.name,
        price: service.price,
        quantity: 1,
        features: [],
        descriptions: [],
      };
      setCart((prevCart: Package[]) => {
        const newCart = [...prevCart, newItem];
        console.log(`Додано ${service.name}, new cart:`, newCart);
        return newCart;
      });
    }
  }, [cart, setCart, selectedPackageServices]);

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
            {addOptions.map((service) => {
              const isDisabled = 
                selectedPackageServices.includes(service.name) || 
                service.available === 0 || 
                (cart.filter((item) => addOptions.some((opt) => opt.name === item.name)).length >= 7 && 
                 !cart.some((item) => item.name === service.name));
              const isSelected = cart.some((item) => item.name === service.name);

              console.log(`Service: ${service.name}, isDisabled: ${isDisabled}, isSelected: ${isSelected}`); 

              return (
                <div 
                  key={service.id} 
                  className={`${styles.additionalCard} ${isSelected ? styles.selectedCard : ''} ${isDisabled ? styles.disabledCard : ''}`}
                  onClick={() => {
                    console.log(`Card clicked for ${service.name}`); 
                    if (!isDisabled) toggleOption(service);
                  }}
                >
                  <div className={styles.cardContent}>
                    <span className={styles.serviceName}>{service.name}</span>
                    <div className={styles.infoCheckboxWrapper}>
                      <Image
                        src="/images/info.png"
                        alt="Info"
                        width={20}
                        height={20}
                        className={`${styles.infoIcon} ${isSelected ? styles.selectedInfoIcon : ''}`}
                        onClick={(e) => handleTooltip(service.id, e)}
                      />
                      <button
                        className={`${styles.addButton} ${isDisabled ? styles.disabledButton : ''}`}
                        onClick={() => {
                          console.log(`Button clicked for ${service.name}`); 
                          toggleOption(service);
                        }}
                        disabled={isDisabled}
                      >
                        {isSelected ? "Видалити" : "Додати"}
                      </button>
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
