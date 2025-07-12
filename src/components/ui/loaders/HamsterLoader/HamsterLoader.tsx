import styles from "./HamsterLoader.module.css";

export const HamsterLoader = () => {
  return (
    <div
      className={styles.wheelAndHamster}
      role="img"
      aria-label="Hamster running in a wheel"
    >
      <div className={styles.wheel} />
      <div className={styles.hamster}>
        <div className={styles.hamster__body}>
          <div className={styles.hamster__head}>
            <div className={styles.hamster__ear} />
            <div className={styles.hamster__eye} />
            <div className={styles.hamster__nose} />
          </div>
          <div className={styles["hamster__limb--fr"]} />
          <div className={styles["hamster__limb--fl"]} />
          <div className={styles["hamster__limb--br"]} />
          <div className={styles["hamster__limb--bl"]} />
          <div className={styles.hamster__tail} />
        </div>
      </div>
      <div className={styles.spoke} />
    </div>
  );
};
