import { useEffect, useState } from 'react';
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

  const [disable, setDisable] = useState(false);

  const [win, setWin] = useState(0);
  const [lose, setLose] = useState(0);

  const [word1Success, setWord1Success] = useState(false);
  const [word2Success, setWord2Success] = useState(false);
  const [word3Success, setWord3Success] = useState(false);
  const [word4Success, setWord4Success] = useState(false);
  const [word5Success, setWord5Success] = useState(false);

  const [word1, setWord1] = useState(false);
  const [word2, setWord2] = useState(false);
  const [word3, setWord3] = useState(false);
  const [word4, setWord4] = useState(false);
  const [word5, setWord5] = useState(false);

  const [word1Gray, setWord1Gray] = useState(false);
  const [word2Gray, setWord2Gray] = useState(false);
  const [word3Gray, setWord3Gray] = useState(false);
  const [word4Gray, setWord4Gray] = useState(false);
  const [word5Gray, setWord5Gray] = useState(false);

  const errorMessage = false;

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { register: register2, handleSubmit: handleSubmit2} = useForm();
  const { register: register3, handleSubmit: handleSubmit3} = useForm();
  const { register: register4, handleSubmit: handleSubmit4} = useForm();
  const { register: register5, handleSubmit: handleSubmit5} = useForm();

  const validateWord = () => {
    return word1Success && word2Success && word3Success && word4Success && word5Success;
  }

  const onSubmit = (data: any) => {
    const disWord = wordSelected.split('');

    if (disWord[0] === data.first.toUpperCase()) {
      setWord1Success(true)
      setWord1(false)
      setWord1Gray(false)
    } else {
      if (wordSelected.includes(data.first.toUpperCase())) {
        setWord1(true)
        setWord1Gray(false)
      } else {
        setWord1(false)
        setWord1Gray(true)
      }
    }

    if (disWord[1] === data.second.toUpperCase()) {
      setWord2Success(true)
      setWord2(false)
      setWord2Gray(false)
    } else {
      if (wordSelected.includes(data.second.toUpperCase())) {
        setWord2(true)
        setWord2Gray(false)
      } else {
        setWord2(false)
        setWord2Gray(true)
      }
    }

    if (disWord[2] === data.third.toUpperCase()) {
      setWord3Success(true)
      setWord3(false)
      setWord3Gray(false)
    } else {
      if (wordSelected.includes(data.third.toUpperCase())) {
        setWord3(true)
        setWord3Gray(false)
      } else {
        setWord3(false)
        setWord3Gray(true)
      }
    }

    if (disWord[3] === data.four.toUpperCase()) {
      setWord4Success(true)
      setWord4(false)
      setWord4Gray(false)
    } else {
      if (wordSelected.includes(data.four.toUpperCase())) {
        setWord4(true)
        setWord4Gray(false)
      } else {
        setWord4(false)
        setWord4Gray(true)
      }
    }

    if (disWord[4] === data.five.toUpperCase()) {
      setWord5Success(true)
      setWord5(false)
      setWord5Gray(false)
    } else {
      if (wordSelected.includes(data.five.toUpperCase())) {
        setWord5(true)
        setWord5Gray(false)
      } else {
        setWord5(false)
        setWord5Gray(true)
      }
    }

    if ((data.first.toUpperCase() + data.second.toUpperCase() + data.third.toUpperCase() + data.four.toUpperCase() + data.five.toUpperCase()) == wordSelected) {
      setWin(win + 1);
      setLose(lose + 1);
      setDisable(true);
    }
  };

  const onSubmit2 = (data: any) => {
    console.log(data)
    const wordForm = data.first + data.second + data.third + data.four + data.five;
  };

  const onSubmit3 = (data: any) => {
    const wordForm = data.first + data.second + data.third + data.four + data.five;
  };

  const onSubmit4 = (data: any) => {
    const wordForm = data.first + data.second + data.third + data.four + data.five;
  };

  const onSubmit5 = (data: any) => {
    const wordForm = data.first + data.second + data.third + data.four + data.five;
  };

  useEffect(() => {
    setWords(words);
    const wordSelected = words[(Math.floor(Math.random() * words.length))];
    setWordSelected(wordSelected.toUpperCase());
  }, []);

  const play = () => {
    setInstructions(false);
    setPageTwo(true);
  }

  const close = () => {
    setWord1Success(false);
    setWord2Success(false);
    setWord3Success(false);
    setWord4Success(false);
    setWord5Success(false);
  }

  return (
    <div className="App">

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
          
            <p>La letra <strong>G</strong> está en la palabra y en la posición correcta.</p>
          </div>

          <div className='words'>
            <div className='word'>
              <input type='text' name='first' maxLength={1} value='V' disabled/>
              <input type='text' name='second' maxLength={1} value='O' disabled/>
              <input type='text' name='third' maxLength={1} value='C' className='yellow' disabled/>
              <input type='text' name='four' maxLength={1} value='A' disabled/>
              <input type='text' name='five' maxLength={1} value='L' disabled/>
            </div>
            <p>La letra <strong>C</strong> en la palabra pero en la posición incorrecta.</p>
          </div>

          <div className='words'>
            <div className='word'>
              <input type='text' name='first' maxLength={1} value='C' disabled/>
              <input type='text' name='second' maxLength={1} value='A' disabled/>
              <input type='text' name='third' maxLength={1} value='N' disabled/>
              <input type='text' name='four' maxLength={1} value='T' disabled/>
              <input type='text' name='five' maxLength={1} value='O' className='gray' disabled/>
            </div>
            <p>La letra <strong>A</strong> no está en la palabra.</p>
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
          {wordSelected}
          <div className='words'>
            <form onSubmit={handleSubmit(onSubmit)} className='word'>
              <input className={`${word1Success ? "green" : ""} ${word1 ? 'yellow' : ''} ${word1Gray ? 'gray' : ''}`} type='text' maxLength={1} {...register("first", { required: true })} disabled={disable} />
              <input className={`${word2Success ? "green" : ""} ${word2 ? 'yellow' : ''} ${word2Gray ? 'gray' : ''}`} type='text' maxLength={1} {...register("second", { required: true })} disabled={disable} />
              <input className={`${word3Success ? "green" : ""} ${word3 ? 'yellow' : ''} ${word3Gray ? 'gray' : ''}`} type='text' maxLength={1} {...register("third", { required: true })} disabled={disable} />
              <input className={`${word4Success ? "green" : ""} ${word4 ? 'yellow' : ''} ${word4Gray ? 'gray' : ''}`} type='text' maxLength={1} {...register("four", { required: true })} disabled={disable} />
              <input className={`${word5Success ? "green" : ""} ${word5 ? 'yellow' : ''} ${word5Gray ? 'gray' : ''}`} type='text' maxLength={1} {...register("five", { required: true })} disabled={disable} />
              <button type="submit" value="save" disabled={disable}>Save</button>
            </form>
            <form onSubmit={handleSubmit2(onSubmit2)} className='word'>
              <input type='text' maxLength={1} {...register2("first2", { required: true })} />
              <input type='text' maxLength={1} {...register2("second2", { required: true })} />
              <input type='text' maxLength={1} {...register2("third2", { required: true })} />
              <input type='text' maxLength={1} {...register2("four2", { required: true })} />
              <input type='text' maxLength={1} {...register2("five2", { required: true })}/>
              <button type="submit" value="save">Save</button>
            </form>
            <form onSubmit={handleSubmit3(onSubmit3)} className='word'>
              <input type='text' maxLength={1} {...register3("first", { required: true })} />
              <input type='text' maxLength={1} {...register3("second", { required: true })} />
              <input type='text' maxLength={1} {...register3("third", { required: true })} />
              <input type='text' maxLength={1} {...register3("four", { required: true })} />
              <input type='text' maxLength={1} {...register3("five", { required: true })}/>
              <button type="submit" value="save">Save</button>
            </form>
            <form onSubmit={handleSubmit4(onSubmit4)} className='word'>
              <input type='text' maxLength={1} {...register4("first", { required: true })} />
              <input type='text' maxLength={1} {...register4("second", { required: true })} />
              <input type='text' maxLength={1} {...register4("third", { required: true })} />
              <input type='text' maxLength={1} {...register4("four", { required: true })} />
              <input type='text' maxLength={1} {...register4("five", { required: true })}/>
              <button type="submit" value="save">Save</button>
            </form>
            <form onSubmit={handleSubmit5(onSubmit5)} className='word'>
              <input type='text' maxLength={1} {...register5("first", { required: true })} />
              <input type='text' maxLength={1} {...register5("second", { required: true })} />
              <input type='text' maxLength={1} {...register5("third", { required: true })} />
              <input type='text' maxLength={1} {...register5("four", { required: true })} />
              <input type='text' maxLength={1} {...register5("five", { required: true })}/>
              <button type="submit" value="save">Save</button>
            </form>
          </div>
        </div>
      )}

      {validateWord() && (
        <>
          <div className="modal">
            <div className="results">
              <h3 className='mb-6 font-bold'>Estadísticas</h3>
              <div className="flex justify-evenly mb-8">
                <p className='flex flex-col'>
                  <strong>{win}</strong>
                  Jugadas
                </p>
                <p className='flex flex-col'>
                  <strong>{lose}</strong>
                  Victorias
                </p>
              </div>
              {true && (
                <>
                  <p className='text-xs mb-4'>La palabra era: <strong>PERRO</strong></p>
                </>
              )}
              <p className='text-xs'>SIGUIENTE PALABRA</p>
              <p className='mb-5'><strong>04:10</strong></p>
              <button className='button-primary flex items-center flex-col' onClick={close}>ACEPTAR</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
