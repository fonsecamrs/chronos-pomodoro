import { DefaultInput } from '../DefaultInput';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { PlayCircleIcon } from 'lucide-react';

export function MainForm() {
  return (
    <form action='' className='form'>
      <div className='formRow'>
        <DefaultInput
          type='text'
          id='myInput'
          labelText='Task'
          title='Descrição da task'
          placeholder='Descrição'
        />
      </div>
      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton
          type='button'
          id='myButton'
          icon={<PlayCircleIcon />}
          color='green'
        />
      </div>
    </form>
  );
}
