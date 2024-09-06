import styles from './ShopCard.module.css';

export const ShopCard = ({ product }) => (
  <div className={styles["shop-card"]}>
    <img className={styles["shop-card-img"]} src={product.img} alt={product.name} />
    <h3 className={styles["name"]}>{product.name}</h3>
    <p className={styles["color"]}>{product.color}</p>
    <p className={styles["price"]}>${product.price}</p>
    <button className={styles["add-to-cart"]}>ADD TO CART</button>
  </div>
);
