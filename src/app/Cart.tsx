import styles from "./types/Cart.module.css";
import { useState, useEffect } from "react";
import { Package } from "./types/types";

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
            <div className={styles.orderForm}>
              <input
                type="text"
                placeholder="Назва компанії"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className={styles.inputField}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
              />
              <button className={styles.orderButton} disabled={!companyName || !email}>
                Замовити
              </button>
              <div className={styles.discountInfo}>
                <p>
                  <span className={styles.discountSquare}></span> Оплата буде здійснюватись за курсом НБУ.
                </p>
                <p>
                  <span className={styles.discountSquare}></span> Партнерам попереднього CTF -5% (після узгодження організаторами).
                </p>
                <p>
                  <span className={styles.discountSquare}></span> Base + 3 додаткові опції -50$.
                </p>
                <p>
                  <span className={styles.discountSquare}></span> Base + два пакети -150$.
                </p>
                <p>
                  Знижки не поєднуються між собою – автоматично вибирається найбільша з можливих. 
                  Акційна пропозиція “Early bird” сумується з найбільшою.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;