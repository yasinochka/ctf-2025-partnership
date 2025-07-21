'use client';
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import styles from "./types/Additional.module.css";
import { Package } from "./types/types";

interface AdditionalOptionsProps {
  cart?: Package[];
  setCart?: (newCart: Package[] | ((prevCart: Package[]) => Package[])) => void;
  selectedPackageServices?: string[];
  highlightedOptions?: string[]; // Додаємо проп для підсвічених опцій
}

interface AddOption {
  id: string;
  name: string;
  price: string;
  description: string;
  available: number;
}

const Modal = ({ onClose, children }: { onClose: () => void; children: React.ReactNode }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 300);
  };

  return (
    <div className={`${styles.modalOverlay} ${isClosing ? styles.closing : ''}`} onClick={handleClose}>
      <div className={`${styles.modalContent} ${isClosing ? styles.closing : ''}`} onClick={(e) => e.stopPropagation()}>
        <Image
          src="/images/close.svg"
          alt="Close Modal"
          width={40}
          height={40}
          className={styles.closeIcon}
          onClick={handleClose}
        />
        {children}
      </div>
    </div>
  );
};

const addOptions: AddOption[] = [
  { id: "1", name: "Доступ до бази CV учасників - 90$", price: "90$", description: "Надання доступу до бази CV учасників для подальшої комунікації з ними.", available: 6 },
  { id: "2", name: "Публікація reels в Instagram - 80$", price: "80$", description: "На сторінці @best_lviv в Instagram  буде викладено коротке відео (обмеження в часі 1 хвилина) з інформацією про компанію-партнера та її внесок в організацію події.", available: 6 },
  { id: "3", name: "Пост із короткою розповіддю про компанію в LinkedIn - 110$ (залишилось 3)", price: "110$", description: "На сторінці @best_lviv у LinkedIn буде викладено пост з основною інформацією про компанію-партнера та її сприяння проведенню змагань із кібербезпеки.", available: 3 },
  { id: "5", name: "Логотип на футболках учасників-переможців та організаторів - 150$ (залишилось 3)", price: "150$", description: "На футболках переможців та організаторів змагань буде розміщено логотип компанії.", available: 3 },
  { id: "6", name: "BEST Treasure Hunt - 150$", price: "150$", description: "Під час тижня живої реклами, що проходитиме за місяць до старту події в Національному університеті “Львівська політехніка”, ми організовуємо захопливий квест для студентів. Компанії-партнери можуть надати подарунки (мерч), які будуть заховані на території університету. Для учасників у форматі Instagram-stories публікуватимуться підказки для пошуку. Після знаходження подарунків ми опублікуємо Instagram-stories з переможцями та згадкою про вашу компанію на сторінці  @best_lviv.", available: 6 },
  { id: "7", name: "Проведення лекції або воркшопу для учасників - 190$ (залишилось 3)", price: "190$", description: "Представник Вашої компанії має змогу провести лекцію або воркшоп для учасників (обмеження в часі – 1 година). Лекція має на меті не лише поділитися практичними знаннями, кейсами чи досвідом із реального середовища, а й надихнути студентів на подальший розвиток у галузі. Воркшоп – це тип інтерактивного навчання, де учасники виконують низку навчальних дій, це може бути демонстраційний показ, практичне заняття або дискусійний клуб.", available: 6 },
];

const AdditionalOptions = ({
  cart = [],
  setCart = () => {},
  selectedPackageServices = [],
  highlightedOptions = [], 
}: AdditionalOptionsProps) => {
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (openTooltipId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openTooltipId]);

  const toggleOption = useCallback((service: AddOption) => {
    if (isProcessing) {
      console.log(`Обробка для ${service.name} вже триває`);
      return;
    }

    setIsProcessing(true);
    console.log("toggleOption called for:", service.name);
    console.log("Current cart:", cart);

    if (service.available === 0 || selectedPackageServices.includes(service.name)) {
      console.log(`Опція ${service.name} недоступна`);
      setIsProcessing(false);
      return;
    }

    const isAlreadyInCart = cart.some((item) => item.name === service.name);

    if (isAlreadyInCart) {
      setCart((prevCart: Package[]) => {
        const newCart = prevCart.filter((item) => item.name !== service.name);
        console.log(`Видалено ${service.name}, new cart:`, newCart);
        setIsProcessing(false);
        return newCart;
      });
    } else {
      const currentOptions = cart.filter((item) => addOptions.some((opt) => opt.name === item.name)).length;
      if (currentOptions >= 7) {
        console.log("Досягнуто ліміт у 7 опцій");
        setIsProcessing(false);
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
        if (prevCart.some((item) => item.name === service.name)) {
          console.log(`Опція ${service.name} вже в кошику`);
          setIsProcessing(false);
          return prevCart;
        }
        const newCart = [...prevCart, newItem];
        console.log(`Додано ${service.name}, new cart:`, newCart);
        setIsProcessing(false);
        return newCart;
      });
    }
  }, [cart, setCart, selectedPackageServices, isProcessing]);

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
                 !cart.some((item) => item.name === service.name)) ||
                isProcessing;
              const isSelected = cart.some((item) => item.name === service.name);
              const isHighlighted = highlightedOptions.includes(service.name) && !isSelected; 

              console.log(`Service: ${service.name}, isDisabled: ${isDisabled}, isSelected: ${isSelected}, isHighlighted: ${isHighlighted}`);

              return (
                <div
                  key={service.id}
                  className={`${styles.additionalCard} ${isSelected ? styles.selectedCard : ''} ${isDisabled ? styles.disabledCard : ''} ${isHighlighted ? styles.highlightedCard : ''}`}
                  onClick={() => !isDisabled && toggleOption(service)}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log(`Button clicked for ${service.name}`);
                          if (!isDisabled) toggleOption(service);
                        }}
                        disabled={isDisabled}
                      >
                        {isSelected ? "Видалити" : "Додати"}
                      </button>
                    </div>
                  </div>
                  {openTooltipId === service.id && (
                    <Modal onClose={() => setOpenTooltipId(null)}>
                      <h2 className={styles.modalTitle}>{service.name}</h2>
                      <div className={styles.modalDescription}>
                        {service.description.split('. ').map((sentence, index) => (
                          sentence && <p key={index}>{sentence.trim()}{sentence.endsWith('.') ? '' : '.'}</p>
                        ))}
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