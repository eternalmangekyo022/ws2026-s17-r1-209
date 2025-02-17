import Header from './components/Header';
import { useRef, useReducer, useState } from 'react'
import HeaderContext from './context/header.ts'

import RegisterContext from './context/register';

import Register from './pages/Register';

export default function App() {
  const articleRef = useRef<HTMLElement>(null);
  const [page, dispatch] = useReducer(pageReducer, 1)
  const [error, setError] = useState(false);
	const [validate, setValidate] = useState(false);

  

  function pageReducer(state: number, action: { type: 'increment' | 'decrement' }) {
    switch(action.type) {
      case 'increment':
        return state === 4 ? state: state + 1
      case 'decrement':
        return state === 1 ? state: state - 1
      default:
        throw new Error('error')
    }
  }

  return (
    <>
      <article className="container" ref={articleRef}>
      <Header page={page} articleRef={articleRef}/>

      <main className="main">
        <RegisterContext.Provider value={{ error, setError, validate, setValidate }}>
          <Register />
        </RegisterContext.Provider>

        <h2>Subtitle inside the form</h2>

        <div className="input-group">
          <label htmlFor="select">Test select</label>
          <select id="select">
            <option value="1">Value 1</option>
            <option value="2">Value 2</option>
          </select>
        </div>

        <hr />

        <label className="cnr-label">
          <input type="checkbox" />
          <span>Checkbox 1</span>
        </label>

        <label className="cnr-label">
          <input type="checkbox" />
          <span>Checkbox with long label</span>
        </label>

        <h3>H3 inside the form</h3>
        <div className="input-row">
          <label className="cnr-label">
            <input type="radio" name="radio-test" checked />
            <span>Radio</span>
          </label>
          <label className="cnr-label">
            <input type="radio" name="radio-test" />
            <span>Radio with long label</span>
          </label>
        </div>

        <hr />

        <div className="dnd-row">
          <div className="grid-item washer">
            <img src="./assets/washing-machine.svg" alt="Washing Machine" />
            <span>Washer (11 kg)</span>
          </div>
          <div className="grid-item dryer">
            <img src="./assets/washing-machine.svg" alt="Drying Machine" />
            <span>Dryer (25 kg)</span>
          </div>
          <div className="grid-item">
            <img src="./assets/armchair.svg" alt="Waiting Area" />
            <span>Waiting Area</span>
          </div>
          <div className="grid-item">
            <img src="./assets/space.svg" alt="Folding Tables" />
            <span>Folding Table</span>
          </div>
        </div>

        <div className="grid">
          <div className="grid-item empty"></div>
          <div className="grid-item wall">
            <span>Wall</span>
          </div>
          <div className="grid-item washer">
            <img src="./assets/washing-machine.svg" alt="Washing Machine" />
            <span>Washer (11 kg)</span>
          </div>
          <div className="grid-item dryer">
            <img src="./assets/washing-machine.svg" alt="Drying Machine" />
            <span>Dryer (25 kg)</span>
          </div>
          <div className="grid-item dryer">
            <img src="./assets/washing-machine.svg" alt="Drying Machine" />
            <span>Dryer (25 kg)</span>
          </div>
          <div className="grid-item entrance"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
          <div className="grid-item empty"></div>
        </div>

        <hr />

        <div className="alert">
          <img src="./assets/alert.svg" alt="Alert" />
          <span>This is an error message.</span>
        </div>
      </main>

      {page < 4 &&
        <footer className="footer">
          <button onClick={() => dispatch({ type: 'decrement' })} className="btn" disabled={page === 1}>Back</button>

          
          <button onClick={() => {
            setValidate(true)
          }} className="btn" disabled={page === 4}>Next</button>
        </footer>
      }
    </article>
    </>
  )
}