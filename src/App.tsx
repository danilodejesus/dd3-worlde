import './App.css';
import './index.css';

function App() {
  const letra0 = 'G'
  const letra1 = 'C'
  const letra2 = 'O'

  const errorMessage = false;

  return (
    <div className="App container">

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

        <button className='button-primary flex items-center flex-col'>!JUGAR¡</button>
      </div>

      <hr className='mt-8' />
    
      <div className="wordle mt-4 pt-8">
        <div className="wordtle-title flex justify-evenly">
          <button className="go-instructions">BACK</button>
          <h2>WORDLE</h2>
          <button className="go-results">GO</button>
          <button>Change color</button>
        </div>


        <div className='words'>
          <div className='word'>
            <input type='text' name='first' maxLength={1} />
            <input type='text' name='second' maxLength={1} />
            <input type='text' name='third' maxLength={1} />
            <input type='text' name='four' maxLength={1} />
            <input type='text' name='five' maxLength={1} />
          </div>
          {
            errorMessage && (
              <>
                <p>La letra <strong>{letra0}</strong> está en la palabra y en la posción correcta.</p>
                <p>La letra <strong>{letra1}</strong> en la palabra pero en la posición incorrecta.</p>
                <p>La letra <strong>{letra2}</strong> no está en la palabra.</p>
              </>
            )
          }
          <div className='word'>
            <input type='text' name='first' maxLength={1} />
            <input type='text' name='second' maxLength={1} />
            <input type='text' name='third' maxLength={1} />
            <input type='text' name='four' maxLength={1} />
            <input type='text' name='five' maxLength={1} />
          </div>
          {
            errorMessage && (
              <>
                <p>La letra <strong>{letra0}</strong> está en la palabra y en la posción correcta.</p>
                <p>La letra <strong>{letra1}</strong> en la palabra pero en la posición incorrecta.</p>
                <p>La letra <strong>{letra2}</strong> no está en la palabra.</p>
              </>
            )
          }
          <div className='word'>
            <input type='text' name='first' maxLength={1} />
            <input type='text' name='second' maxLength={1} />
            <input type='text' name='third' maxLength={1} />
            <input type='text' name='four' maxLength={1} />
            <input type='text' name='five' maxLength={1} />
          </div>
          {
            errorMessage && (
              <>
                <p>La letra <strong>{letra0}</strong> está en la palabra y en la posción correcta.</p>
                <p>La letra <strong>{letra1}</strong> en la palabra pero en la posición incorrecta.</p>
                <p>La letra <strong>{letra2}</strong> no está en la palabra.</p>
              </>
            )
          }
          <div className='word'>
            <input type='text' name='first' maxLength={1} />
            <input type='text' name='second' maxLength={1} />
            <input type='text' name='third' maxLength={1} />
            <input type='text' name='four' maxLength={1} />
            <input type='text' name='five' maxLength={1} />
          </div>
          {
            errorMessage && (
              <>
                <p>La letra <strong>{letra0}</strong> está en la palabra y en la posción correcta.</p>
                <p>La letra <strong>{letra1}</strong> en la palabra pero en la posición incorrecta.</p>
                <p>La letra <strong>{letra2}</strong> no está en la palabra.</p>
              </>
            )
          }
          <div className='word'>
            <input type='text' name='first' maxLength={1} />
            <input type='text' name='second' maxLength={1} />
            <input type='text' name='third' maxLength={1} />
            <input type='text' name='four' maxLength={1} />
            <input type='text' name='five' maxLength={1} />
          </div>
          {
            errorMessage && (
              <>
                <p>La letra <strong>{letra0}</strong> está en la palabra y en la posción correcta.</p>
                <p>La letra <strong>{letra1}</strong> en la palabra pero en la posición incorrecta.</p>
                <p>La letra <strong>{letra2}</strong> no está en la palabra.</p>
              </>
            )
          }
        </div>
      </div>

      {true && (
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
