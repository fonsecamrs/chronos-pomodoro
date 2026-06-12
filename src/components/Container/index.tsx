import styles from './styles.module.css';

type ContainePrrops = {
  children: React.ReactNode;
};

export function Container({ children }: ContainePrrops) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
