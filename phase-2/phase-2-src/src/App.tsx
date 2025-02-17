import Header from './components/Header';
import { useRef } from 'react'
import HeaderContext from './context/header.ts'
import Input from './components/Input.tsx';

export default function App() {
  const articleRef = useRef<HTMLElement>(null);
  return (
    <>
      <article className="container" ref={articleRef}>
      <Header articleRef={articleRef}/>

      <main className="main">
        <div className="input-row">
          <Input rules={{ isNum: false, length: [0, 10]}} validate={() => {}} />


        </div>

        <div className="input-group">
          <label htmlFor="textarea">Textarea</label>
          <textarea id="textarea" rows={5}></textarea>
        </div>

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

      <footer className="footer">
        <button className="btn" disabled>Back</button>
        <button className="btn">Next</button>
      </footer>
    </article>
    </>
  )
}