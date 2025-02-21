import Header from "./components/Header";
import { useReducer, useState, useRef, useEffect } from "react";
//import HeaderContext from "./context/header.ts";

import LayoutContext from "./context/layout";
import RegisterContext from "./context/register";
import Register from "./pages/Register";
import Layout from "./pages/Layout";

export default function App() {
  const articleRef = useRef<HTMLElement>(null);
  const [COLS, ROWS] = [5, 6];
  const [page, dispatchPage] = useReducer(pageReducer, 2);
  const [tiles, dispatchTiles] = useReducer(tilesReducer, []);
  const [safeTiles, dispatchSafeTiles] = useReducer(safeTilesReducer, []);
  const [form, dispatchForm] = useReducer(formReducer, {
    address: "",
    city: "",
    description: "",
    from: "",
    to: "",
    name: "",
    openAt: "everyday",
    postalCode: "",
  });
  //add id of input if error occurs in input
  const errors = useRef<{ id: number; name: keyof IFormState }[]>([]);
  const [shouldFocus, setShouldFocus] = useState({ id: 0 });
  const [validate, setValidate] = useState(false);
  const [dragging, setDragging] = useState<Tile | null>(null);

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

  function tilesReducer(state: Tile[], action: TileReducerAction) {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "error":
        return [];
      case "modify":
        return state.map((i) =>
          i.id === action.payload.id ? action.payload.modified : i
        );
      default:
        return [];
    }
  }

  function safeTilesReducer(
    state: { id: `${number};${number}` }[],
    action: SafeTileReducerAction
  ) {
    switch (action.type) {
      case "add":
        return [...state, action.payload];
      case "remove":
        return state.filter((i) => i.id !== action.payload.id);
      case "reset":
        return [];
      default:
        return [];
    }
  }

  function formReducer(
    state: IFormState,
    action: { type: keyof IFormState; payload: string }
  ) {
    return { ...state, [action.type]: action.payload };
  }

  function initTiles() {
    for (let i = 1; i < ROWS + 1; i++) {
      for (let j = 1; j < COLS + 1; j++) {
        if (i === 1 || i === 6 || j === 1 || j === 5) {
          dispatchSafeTiles({ type: "add", payload: { id: `${i};${j}` } });
        }
        dispatchTiles({
          type: "add",
          payload: {
            type: "empty",
            pos: {
              x: i,
              y: j,
            },
            id: `${i};${j}`,
            weight: 8,
          },
        });
      }
    }
  }

  useEffect(() => {
    initTiles();
    return () => {
      dispatchTiles({ type: "" });
      dispatchSafeTiles({ type: "reset" });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <article className="container" ref={articleRef}>
        <Header page={page} articleRef={articleRef} />

        <main className="main">
          {page === 1 && (
            <RegisterContext.Provider
              value={{
                form,
                dispatchForm,
                shouldFocus,
                errors,
                validate,
                setValidate,
              }}
            >
              <Register />
            </RegisterContext.Provider>
          )}

          {page === 2 && (
            <>
              <LayoutContext.Provider
                value={{
                  dispatchTiles,
                  tiles,
                  dragging,
                  setDragging,
                  safeTiles,
                  dispatchSafeTiles,
                }}
              >
                <Layout />
              </LayoutContext.Provider>
            </>
          )}

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

          <hr />
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
                setValidate(true);
                if (errors.current.length) {
                  setShouldFocus({
                    id: Math.min(...errors.current.map((i) => i.id)),
                  });
                } else dispatchPage({ type: "increment" });
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
