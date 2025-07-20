"use client";
import styles from "./types/Cart.module.css";
import { useState, useEffect } from "react";
import { Package } from "./types/types";
import emailjs from "@emailjs/browser";

interface CartProps {
  cart: Package[];
  setCart: React.Dispatch<React.SetStateAction<Package[]>>;
  setSelectedPackages: React.Dispatch<React.SetStateAction<Set<string>>>;
  packages: Package[];
}

const Cart = ({ cart, setCart, setSelectedPackages, packages }: CartProps) => {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [isCartUpdated, setIsCartUpdated] = useState(false);

  useEffect(() => {
    if (cart.length > 0 && cart.length > 1) {
      setIsCartUpdated(true);
    } else {
      setIsCartUpdated(false);
    }
    // Ініціалізація emailjs
    emailjs.init("_8KlxS0-6bbPQMhDy");
  }, [cart]);

  const calculateTotal = () => {
    return cart.reduce((total, item: Package) => {
      const price = parseFloat(item.price.replace("$", ""));
      return total + (price || 0) * (item.quantity || 1);
    }, 0);
  };

  const handleRemoveFromCart = (item: Package) => {
    if (item.id === "1") return;
    setSelectedPackages((prev: Set<string>) => {
      const newSet = new Set(prev);
      newSet.delete(item.id);
      return newSet;
    });
    setCart((prevCart: Package[]) => prevCart.filter((cartItem) => cartItem.id !== item.id));
  };

  const total = calculateTotal();

  // Функція відправки email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const selectedPackages = cart
        .filter((item) => packages.some((pkg) => pkg.name === item.name))
        .map((item) => item.name)
        .join(", ") || "Немає вибраних пакетів";

      const additionalOptions = cart
        .filter((item) => !packages.some((pkg) => pkg.name === item.name))
        .map((item) => item.name)
        .join(", ") || "Немає додаткових послуг";

      const templateParams = {
        company: companyName,
        email: email,
        packages: selectedPackages,
        options: additionalOptions,
        total: `${total}$`,
        message: `Компанія: ${companyName}<br>Email: ${email}<br>Пакети: ${selectedPackages}<br>Опції: ${additionalOptions}<br>Всього: ${total}$`,
      };

      await emailjs.send(
        "service_0ppucce",
        "template_yz1qdfq",
        templateParams,
        "u9J-J_czz99mb0qCW"
      );

      alert("Дякуємо! Ми зв'яжемося з вами найближчим часом.");
      setCompanyName("");
      setEmail("");
      
      setCart([]);
      setSelectedPackages(new Set());
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'text' in error) {
        console.error("Email sending error:", (error as { text: string }).text);
        alert("Помилка надсилання! " + (error as { text: string }).text);
      } else {
        console.error("Email sending error:", error);
        alert("Помилка надсилання! Спробуйте ще раз.");
      }
    }
  };

  return (
    <section className={styles.cartSection}>
      <div className={styles.cartWrapper}>
        <h1 className={styles.cartTitle}>КОШИК</h1>
        <div className={styles.cartContainer} style={{ backgroundImage: "url('/images/cart-background.png')" }}>
          <div className={styles.cartLeft}>
            <div className={styles.cartItems}>
              {cart.length === 0 ? (
                <p className={styles.emptyCart}>Кошик порожній</p>
              ) : (
                <>
                  <div className={styles.cartCategory}>
                    <h2 className={styles.categoryTitle}>Пакети</h2>
                    {cart
                      .filter((item: Package) => packages.some((pkg: Package) => pkg.name === item.name))
                      .map((item: Package, index) => (
                        <div key={index} className={`${styles.cartItem} ${isCartUpdated ? styles.cartItemUpdated : ""}`}>
                          <span>{item.name}</span>
                          <button
                            className={styles.removeButton}
                            onClick={() => handleRemoveFromCart(item)}
                            disabled={item.id === "1"}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                  </div>
                  <div className={styles.cartCategory}>
                    <h2 className={styles.categoryTitle}>Додаткові опції</h2>
                    {cart.filter((item: Package) => !packages.some((pkg: Package) => pkg.name === item.name)).length === 0 ? (
                      <p className={styles.emptyCart}>Немає</p>
                    ) : (
                      cart
                        .filter((item: Package) => !packages.some((pkg: Package) => pkg.name === item.name))
                        .map((item: Package, index) => (
                          <div key={index} className={`${styles.cartItem} ${isCartUpdated ? styles.cartItemUpdated : ""}`}>
                            <span>{item.name}</span>
                            <button
                              className={styles.removeButton}
                              onClick={() => handleRemoveFromCart(item)}
                            >
                              ×
                            </button>
                          </div>
                        ))
                    )}
                  </div>
                </>
              )}
            </div>
            <div className={styles.cartTotal}>
              <span>Всього:</span>
              <span>{total}$</span>
            </div>
          </div>
          <div className={styles.cartRight}>
            <form className={styles.orderForm} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Назва компанії"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={styles.inputField}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
                required
              />
              <button className={styles.orderButton} type="submit" disabled={!companyName || !email}>
                Замовити
              </button>
              <div className={styles.discountInfoLeft}>
                <p className={styles.discountInfoSpacing}>
                  <span className={styles.discountSquare}></span> Оплата буде здійснюватись за курсом НБУ.
                </p>
                <p className={styles.discountInfoSpacing}>
                  <span className={styles.discountSquare}></span> Партнерам попереднього CTF <span className={styles.highlightRed}>-5%</span> (після узгодження організаторами).
                </p>
                <p className={styles.discountInfoSpacing}>
                  <span className={styles.discountSquare}></span> Base + 3 додаткові опції <span className={styles.highlightRed}>-50$</span>.
                </p>
                <p className={styles.discountInfoSpacing}>
                  <span className={styles.discountSquare}></span> Base + два пакети <span className={styles.highlightRed}>-150$</span>.
                </p>
                <p className={styles.discountInfoFirst}>
                  Знижки не поєднуються між собою – автоматично вибирається найбільша з можливих.
                </p>
                <p className={styles.discountInfoSecond}>Акційна пропозиція “Early bird” сумується з найбільшою.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;