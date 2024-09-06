import styles from './IconSwitch.module.css';

export const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <span className={styles["material-icons"]} onClick={onSwitch}>
      {icon}
    </span>
  );
};
