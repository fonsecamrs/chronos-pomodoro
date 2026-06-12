import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Entenda como funciona a técnica Pomodoro ⏱️</p>
      <p>Chronos Pomodoro &copy; {new Date().getFullYear()}</p>
      <p>Desenvolvido por Marcos Fonseca</p>
    </footer>
  );
}
