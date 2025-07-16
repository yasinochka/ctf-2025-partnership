"use client";
import { useState } from "react";
import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import FormatSection from './FormatSection';
import WhyParticipateSection from './WhyParticipateSection';
import PartnersSection from './PartnersSection';
import OrganisersSection from './OrganisersSection';
import StatsSection from './StatsSection';
import SwiperSection from './SwiperSection';
import PortraitSection from './PortraitSection';
import CountdownSection from './CountdownSection';
import Packages from "./Packages";
import AdditionalOptions from "./AdditionalOptions"; 
import Cart from "./Cart"; 
import ContactsSection from './ContactsSection';
import BottomSection from './BottomSection';
import { Package } from "./types/types";

export default function Home() {
  const [cart, setCart] = useState<Package[]>([
    {
      id: "1",
      name: "Base *",
      price: "350$",
      quantity: 1,
      features: [
        "Логотип компанії на бренд-волл та на сайті події",
        "Логотип у постівентному відео",
        "Промоція в соцмережах",
        "Участь у нетворкінгу",
      ],
      descriptions: [
        "Банер з логотипами на події.",
        "Логотип у поствідео на @best_lviv.",
        "Mention у 1 story, дайджест у Telegram.",
        "Нетворкінг в день закриття.",
      ],
    },
  ]);
  const [selectedPackages, setSelectedPackages] = useState<Set<string>>(new Set(["1"])); // Додаємо "Base *" за замовчуванням

  // Визначимо масив пакетів
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
        "Mention у 1 story, дайджест у Telegram.",
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
        "Логотип на足球ках учасників-переможців та організаторів",
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

  return (
    <>
      <HeroSection />
      <AboutSection />
      <div
        className="fullBackground"
        style={{
          backgroundImage: "url('/images/backgroundFormat.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'auto 215vh', 
          backgroundPosition: 'right -400px',
          position: 'relative',
          width: '100%',
          minHeight: '150vh', 
          zIndex: 0,
        }}
      >
        <FormatSection />
        <WhyParticipateSection />
      </div>
      <StatsSection/>
      <SwiperSection/>
      <PortraitSection/>
      <CountdownSection/>
      <Packages
        cart={cart}
        setCart={setCart}
        selectedPackages={selectedPackages}
        setSelectedPackages={setSelectedPackages}
        packages={defaultPackages}
      />
      <AdditionalOptions
        cart={cart}
        setCart={setCart}
        selectedPackageServices={[]}
      />
      <Cart
        cart={cart}
        setCart={setCart}
        setSelectedPackages={setSelectedPackages}
        packages={defaultPackages}
      />
      <PartnersSection/>
      <OrganisersSection/>
      <ContactsSection/>
      <BottomSection/>
    </>
  );
}