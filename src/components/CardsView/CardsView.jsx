import { ShopCard } from '../ShopCard';
import styles from './CardsView.module.css';

export const CardsView = ({ cards }) => (
  <div className={styles["cards-view"]}>
    {cards.map((product, index) => (
      <ShopCard key={index} product={product} />
    ))}
  </div>
);
