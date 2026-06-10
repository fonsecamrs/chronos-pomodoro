import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading />
      <br />
      <p>Olá mundo! (Importando do componente App)</p>
    </>
  );
}
