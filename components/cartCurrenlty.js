import style from "../styles/cartCurrently.module.scss";

export function CartCurrently({ bitcoinPrice }) {
  return (
    <div className={style.cart}>
      <div className={style.cart__title}>BTC/USDT</div>
      <div className={style.cart__prise}>{bitcoinPrice.data.last}</div>
      <div className={bitcoinPrice.data.last_change < 0 ? style.cart__change__red : style.cart__change__green}>
        {bitcoinPrice.data.last_change}
      </div>
    </div>
  );
}
