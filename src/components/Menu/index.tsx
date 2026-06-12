import styles from './styles.module.css';

import { useState, useEffect } from 'react';
import {
  HouseIcon,
  HistoryIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from 'lucide-react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('_pom-theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //Não segue o link do botão

    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  // useEffect(() => {
  //   console.log('useEffect sem dependências', Date.now());
  // }); //É executado todas às vezes que o componente renderiza na tela

  // useEffect(() => {
  //   console.log('useEffect com array de dependências vazio', Date.now());
  // }, []); //É executado apenas quando o React monta o componente na tela pela primeira vez. Bom para ser usado para retornar dados de uma API externa

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('_pom-theme', theme); //Salva o tema (theme) no armazenamento local do navegador
    return () => {
      //Função cleanup para limpeza de componentes
      //????
      //console.log('Olha, este componente será atualizado');
    };
  }, [theme]); //É executado somento quando o valor de theme muda

  return (
    <nav className={styles.menu}>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para página inicial'
        title='Home'
      >
        <HouseIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ver histórico'
        title='Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para página de configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Mudar tema'
        title='Tema'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
