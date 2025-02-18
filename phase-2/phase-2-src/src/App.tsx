import Header from "./components/Header";
import { useReducer, useState, useRef } from "react";
//import HeaderContext from "./context/header.ts";

import RegisterContext from "./context/register";

import Register from "./pages/Register";

export default function App() {
  const articleRef = useRef<HTMLElement>(null);
  const [page, dispatchPage] = useReducer(pageReducer, 1);
  //add id of input if error occurs in input
  const [errors, dispatchError] = useReducer(errorsReducer, []);
  const [validate, setValidate] = useState(false);

  function errorsReducer(
    state: number[],
    action: { type: "add" | "remove"; payload: number }
  ): number[] {
    switch (action.type) {
      case "add":
        return Array.from(new Set([...state, action.payload]));
      case "remove":
        return state.filter((i) => i !== action.payload);
      default:
        return state;
    }
  }

  function pageReducer(
    state: number,
    action: { type: "increment" | "decrement" }
  ) {
    switch (action.type) {
      case "increment":
        return state === 4 ? state : state + 1;
      case "decrement":
        return state === 1 ? state : state - 1;
      default:
        throw new Error("error");
    }
  }

  return (
    <>
      <article className="container" ref={articleRef}>
        <Header page={page} articleRef={articleRef} />

        <main className="main">
          <RegisterContext.Provider
            value={{ errors, dispatchError, validate, setValidate }}
          >
            <Register />
          </RegisterContext.Provider>

          <h2>Operational hours</h2>

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

        {page < 4 && (
          <footer className="footer">
            <button
              onClick={() => dispatchPage({ type: "decrement" })}
              className="btn"
              disabled={page === 1}
            >
              Back
            </button>

            <button
              onClick={() => {
                console.log(validate);
                setValidate(true);
              }}
              className="btn"
              disabled={page === 4}
            >
              Next
            </button>
          </footer>
        )}
      </article>
    </>
  );
}
