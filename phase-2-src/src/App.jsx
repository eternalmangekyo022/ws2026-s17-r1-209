function App() {
  return (
    <>
      <article className="container">
      <header className="header">
        <h1>Register a new location</h1>
        <div className="steps">
          <button className="step done">
            <img src="./assets/check.svg" alt="Check" />
          </button>
          <div className="step-divider"></div>
          <button className="step done">2</button>
          <div className="step-divider"></div>
          <button className="step current">3</button>
          <div className="step-divider dashed"></div>
          <button className="step" disabled>4</button>
        </div>

        <button className="fullscreen-btn">
          <img src="./assets/maximize.svg" alt="Maximize" />
        </button>
      </header>

      <main className="main">
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="input-1">Input</label>
            <input type="text" id="input-1" placeholder="Input placeholder" />
          </div>

          <div className="input-group">
            <label htmlFor="input-2">Input Error</label>
            <input type="text" id="input-2" className="error" />
            <span className="input-error">This field is required</span>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="textarea">Textarea</label>
          <textarea id="textarea" rows="5"></textarea>
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

export default App
