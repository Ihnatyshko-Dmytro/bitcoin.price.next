import { useEffect, useState } from "react";
import { CartCurrently } from "../components/cartCurrenlty";
import { MainLayout } from "../components/mainLayout";
import styles from "../styles/tokens.price.module.scss";

export default function TokenPrice() {
  let [bitcoinPrice, setBitcoinPrice] = useState(null);

  const fetchPrice = async () => {
    const res = await fetch("https://api.bitaps.com/market/v1/ticker/btcusdt");
    const bitcoin = await res.json();
    setBitcoinPrice(bitcoin);
  };

  setInterval(fetchPrice, 60000);

  useEffect(() => {
    fetchPrice();
  }, []);

  return (
    <MainLayout>
      <h2 className={styles.title}>Tokens Price</h2>
      <div className={styles.carts}>
        <div className={styles.carts__titels}>
          <div className={styles.carts__titles__titlePair}>Pair Tocens </div>
          <div className={styles.carts__titles__titlePrice}>Price</div>
          <div className={styles.carts__titles__titleChange}>Last change</div>
        </div>
        {bitcoinPrice === null ? (<h1>Loading</h1>) : 
        (
          <>
            <CartCurrently bitcoinPrice={bitcoinPrice} />
            <CartCurrently bitcoinPrice={bitcoinPrice} />
            <CartCurrently bitcoinPrice={bitcoinPrice} />
          </>
        )}
      </div>
    </MainLayout>
  );
}

// TokenPrice.getInitialProps = async () => {
//   const res = await fetch("https://api.bitaps.com/market/v1/ticker/btcusdt");
//   const bitcoin = await res.json();

//   return {
//     bitcoin,
//   };
// };
