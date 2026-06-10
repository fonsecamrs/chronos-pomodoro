import './styles/theme.css';
import './styles/global.css';

//import { TimerIcon } from 'lucide-react';
//import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <div className='container-fluid'>
        <div className='container'>
          <div className='content'>
            <section>ESTRUTURA DO PROJETO</section>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>LOGO</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>MENU</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FORM</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FOOTER</section>
        </div>
      </div>
    </>
  );
  /* return (
    <>
      <Heading>INICIANDO A ESTRUTURA DO PROJETO</Heading>
      <br />
      <Heading>
        CABEÇALHO TESTE
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <br />
      <p>Olá mundo! (Importando do componente App)</p>
    </>
  ); */
}
