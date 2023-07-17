import { useEffect, useState } from 'react';
import './App.css';
import './index.css';
import { useForm } from "react-hook-form";

function App() {
  const firstSession: boolean = true;

  const words = ['holas', 'redes', 'perro', 'loros', 'toros'];

  const [wordSelected, setWordSelected] = useState('');

  const [instructions, setInstructions] = useState(true);
  const [pageTwo, setPageTwo] = useState(false);
  const [modalComponent, setmodalComponent] = useState(false);
  const [word, setWords] = useState([{}]);

  const letra0: String = 'G'
  const letra1: String = 'C'
  const letra2: String = 'O'

  const errorMessage = false;

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    const wordForm = data.first + data.second + data.third + data.four + data.five;
    // const wordFormMayus = wordForm.toUpperCase();
    // console.log(wordSelected, wordFormMayus);
    // console.log('comparation: ', wordSelected === wordFormMayus)
  };

  useEffect(() => {
    setWords(words);
    const wordSelected = words[(Math.floor(Math.random() * words.length))];
    console.log(wordSelected);
    setWordSelected(wordSelected.toUpperCase());
  }, []);

  const play = () => {
    setInstructions(false);
    setPageTwo(true);
  }

  const handleChange = (event: any) => {
    const word = event.target.value += event.target.value
    console.log(word)
  }

  return (
    <div className="App container">

      {instructions && (
        <div className="instructions">
          <h2>Cómo jugar</h2>
          <p>Adivina la palabra oculta en cinco intentos.</p>
          <p>Cada intento debe ser una palabra válida de 5 letras.</p>
          <p>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
          <p className='mb-2'><strong>Ejemplos</strong></p>

          <div className='words'>
            <div className='word'>
              <input type='text' name='first' maxLength={1} value='G' className='green' disabled/>
              <input type='text' name='second' maxLength={1} value='A' disabled/>
              <input type='text' name='third' maxLength={1} value='T' disabled/>
              <input type='text' name='four' maxLength={1} value='O' disabled/>
              <input type='text' name='five' maxLength={1} value='S' disabled/>
            </div>
          
            <p>La letra <strong>{letra0}</strong> está en la palabra y en la posición correcta.</p>
          </div>

          <div className='words'>
            <div className='word'>
              <input type='text' name='first' maxLength={1} value='V' disabled/>
              <input type='text' name='second' maxLength={1} value='O' disabled/>
              <input type='text' name='third' maxLength={1} value='C' className='yellow' disabled/>
              <input type='text' name='four' maxLength={1} value='A' disabled/>
              <input type='text' name='five' maxLength={1} value='L' disabled/>
            </div>
            <p>La letra <strong>{letra1}</strong> en la palabra pero en la posición incorrecta.</p>
          </div>

          <div className='words'>
            <div className='word'>
              <input type='text' name='first' maxLength={1} value='C' disabled/>
              <input type='text' name='second' maxLength={1} value='A' disabled/>
              <input type='text' name='third' maxLength={1} value='N' disabled/>
              <input type='text' name='four' maxLength={1} value='T' disabled/>
              <input type='text' name='five' maxLength={1} value='O' className='gray' disabled/>
            </div>
            <p>La letra <strong>{letra2}</strong> no está en la palabra.</p>
          </div>

          <p>Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>

          <p className='flex text-3xl items-center flex-col'>¡Una palabra nueva cada 5 minutos!</p>

          <button onClick={play} className='button-primary flex items-center flex-col'>!JUGAR¡</button>
        </div>
      )}

      {pageTwo && (
        <div className="wordle mt-4 pt-8">
          <div className="wordtle-title flex justify-evenly">
            <button className="go-instructions">BACK</button>
            <h2>WORDLE</h2>
            <button className="go-results">GO</button>
            <button>Change color</button>
          </div>

          <div className='words'>
            <div className='word'>
              <input type='text' maxLength={1} onChange={handleChange} />
              <input type='text' maxLength={1} onChange={handleChange} />
              <input type='text' maxLength={1} onChange={handleChange} />
              <input type='text' maxLength={1} onChange={handleChange} />
              <input type='text' maxLength={1} onChange={handleChange} />
            </div>
            <div className='word'>
              <input type='text' name='first' maxLength={1} />
              <input type='text' name='second' maxLength={1} />
              <input type='text' name='third' maxLength={1} />
              <input type='text' name='four' maxLength={1} />
              <input type='text' name='five' maxLength={1} />
            </div>
            <div className='word'>
              <input type='text' name='first' maxLength={1} />
              <input type='text' name='second' maxLength={1} />
              <input type='text' name='third' maxLength={1} />
              <input type='text' name='four' maxLength={1} />
              <input type='text' name='five' maxLength={1} />
            </div>
            <div className='word'>
              <input type='text' name='first' maxLength={1} />
              <input type='text' name='second' maxLength={1} />
              <input type='text' name='third' maxLength={1} />
              <input type='text' name='four' maxLength={1} />
              <input type='text' name='five' maxLength={1} />
            </div>
            <div className='word'>
              <input type='text' name='first' maxLength={1} />
              <input type='text' name='second' maxLength={1} />
              <input type='text' name='third' maxLength={1} />
              <input type='text' name='four' maxLength={1} />
              <input type='text' name='five' maxLength={1} />
            </div>
          </div>
        </div>
      )}

      {modalComponent && (
        <>
          <div className="results">
            <h3 className='mb-6 font-bold'>Estadísticas</h3>
            <div className="flex justify-evenly mb-8">
              <p className='flex flex-col'>
                <strong>8</strong>
                Jugadas
              </p>
              <p className='flex flex-col'>
                <strong>2</strong>
                Victorias
              </p>
              <p>learn react</p>
            </div>
            {true && (
              <>
                <p className='text-xs mb-4'>La palabra era: <strong>PERRO</strong></p>
              </>
            )}
            <p className='text-xs'>SIGUIENTE PALABRA</p>
            <p className='mb-5'><strong>04:10</strong></p>
            <button className='button-primary flex items-center flex-col'>ACEPTAR</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
