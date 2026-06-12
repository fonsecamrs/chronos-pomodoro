import styles from './styles.module.css';

type DefaultButtonProps = {
  id: string;
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  type,
  id,
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button
        type={type}
        id={id}
        className={`${styles.button} ${styles[color]}`}
        {...props}
      >
        {icon}
      </button>
    </>
  );
}
