import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Cycles</span>

      <div className={styles.cycleDots}>
        <span className={styles.cycleDot}></span>
      </div>
    </div>
  );
}
