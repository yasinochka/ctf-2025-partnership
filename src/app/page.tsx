'use client';

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
import styles from './Home.module.css';
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
  const [selectedPackages, setSelectedPackages] = useState<Set<string>>(new Set(["1"]));
  const [highlightedOptions, setHighlightedOptions] = useState<string[]>([]); 

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
        "Логотип компанії на бренд-волл та на сайті події\nНа місці проведення події буде розміщено великий банер з логотипами всіх компаній, що стали нашими партнерами. На сайті івенту теж буде додано логотип про кожної з них.",
        "Логотип у постівентному відео\nПісля завершення змагань на Instagram-сторінку @best_lviv буде викладено відео з додаванням логотипа партнерів івенту.",
        "Промоція в соціальних мережах\nРозміщення інформації про компанію в соціальних мережах:\n1 згадка в Instagram Stories на сторінці @best_lviv — Вашу компанію буде представлено як офіційного партнера BEST CTF 2025.\nПостдайджест у Telegram-каналі BEST Lviv Students https://t.me/bestlviv — інформація про Вашу компанію буде розміщена в пості про всіх партнерів.",
        "Участь у нетворкінгу\nНетворкінг – це час виділений на неформальну бесіду між організаторами, представниками компаній та учасниками для надання можливості поділитися інформацією про компанію, наявні вакансії та пропозиції. Нетворкінг відбуватиметься після лекцій та перед початком змагань.",
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
        "Промоція у TikTok"
      ],
      descriptions: [
        "BEST Treasure Hunt\nПід час тижня живої реклами, що проходитиме за місяць до старту події в Національному університеті “Львівська політехніка”, ми організовуємо квест для студентів. Компанії-партнери, зокрема Ваша, можуть надати подарунки (мерч), які будуть заховані на території університету. Для учасників у форматі Instagram-stories публікуватимуться підказки для пошуку. Після знаходження подарунків ми опублікуємо Instagram-stories з переможцями та згадкою про Вашу компанію на сторінці @best_lviv.",
        "Розміщення банера компанії під час змагань\nВпродовж усієї події на місці проведення буде розміщено банер Вашої компанії (надається компанією до зазначеного терміну).",
        "Трансляція відеоролика про компанію під час події\nТрансляція відео про компанію на перервах між лекціями та під час нетворкінгу. (відео надсилає компанія, часове обмеження відео до 1 хвилини).",
        "Розсилка можливостей від компанії у Telegram-боті та LinkedIn\nЩомісяця, протягом пів року у Telegram-боті CTF ’2025 та на нашій сторінці в LinkedIn будуть публікуватись пропозиції Вашої компанії (курси, стажування, вакансії).\nКоротке відео про Вашу компанію та її внесок у розвиток молоді й кібербезпеки викладене на сторінку @best__lviv у TikTok. Відео буде зняте під час події, матеріал про Вашу компанію має бути підготовлений Вами до змагань.",
        "Промоція у TikTok\nКоротке відео про Вашу компанію та її внесок у розвиток молоді й кібербезпеки викладене на сторінку @best__lviv у TikTok. Відео буде зняте під час події, матеріал про Вашу компанію має бути підготовлений Вами до змагань.",
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
        "Стаття на сайті BEST Lviv\nНа сайті BEST Lviv буде розміщена стаття про Вашу компанію та її внесок в організацію івенту.",
        "Проведення лекції або воркшопу для учасників\nПредставник Вашої компанії має змогу провести лекцію або воркшоп для учасників (обмеження в часі – 1 година). Лекція має на меті не лише поділитися практичними знаннями, кейсами чи досвідом із реального середовища, а й надихнути студентів на подальший розвиток у галузі. Воркшоп – це тип інтерактивного навчання, де учасники виконують низку навчальних дій, це може бути демонстраційний показ, практичне заняття або дискусійний клуб.",
        "Доступ до бази CV учасників\nНадання бази CV учасників для подальшої комунікації з ними.",
        "Логотип на футболках учасників-переможців та організаторів\nРозміщення логотипа компанії на футболках учасників-переможців та організаторів (обмежена кількість – 3).",
        "Пост про компанію в Instagram @best_lviv\nМи опублікуємо пост в Instagram-профілі @best_lviv, у якому буде представлена інформація про Вашу компанію із зазначенням Вашого статусу як ключового партнера події.",
        "Надання завдань для змагань\nЗмога надати завдання для змагань, тим самим компанія має можливість підвищити свій імідж серед учасників. На платформі для завдань буде позначено, що вони від компанії, таким чином відбуватиметься піар в середовищі.",
      ],
    },
  ];

  return (
    <>
      <HeroSection />
      <AboutSection />
      <div className={styles.fullBackground}>
        <FormatSection />
        <WhyParticipateSection />
      </div>
      <StatsSection />
      <SwiperSection />
      <PortraitSection />
      <CountdownSection />
      <Packages
        cart={cart}
        setCart={setCart}
        selectedPackages={selectedPackages}
        setSelectedPackages={setSelectedPackages}
        packages={defaultPackages}
        setHighlightedOptions={setHighlightedOptions} 
      />
      <AdditionalOptions
        cart={cart}
        setCart={setCart}
        selectedPackageServices={[]}
        highlightedOptions={highlightedOptions}
      />
      <Cart
        cart={cart}
        setCart={setCart}
        setSelectedPackages={setSelectedPackages}
        packages={defaultPackages}
      />
      <PartnersSection />
      <OrganisersSection />
      <ContactsSection />
      <BottomSection />
    </>
  );
}