import styles from './Heading.module.css';

export function Heading() {
  console.log(styles);
  return <h1 className={styles.heading}>INICIANDO A ESTRUTURA DO PROJETO</h1>;
}
