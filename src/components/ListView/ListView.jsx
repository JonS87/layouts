import { ShopItem } from '../ShopItem';
import styles from './ListView.module.css';

export const ListView = ({ items }) => (
  <div className={styles["list-view"]}>
    {items.map((product, index) => (
      <ShopItem key={index} product={product} />
    ))}
  </div>
);
