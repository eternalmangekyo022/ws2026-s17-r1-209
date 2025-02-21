import Header from "./components/Header";
import { useReducer, useState, useRef, useEffect } from "react";
//import HeaderContext from "./context/header.ts";

import LayoutContext from "./context/layout";
import RegisterContext from "./context/register";
import Register from "./pages/Register";
import Layout from "./pages/Layout";

export default function App() {
  const articleRef = useRef<HTMLElement>(null);
  const [wallChanged, setWallChanged] = useState(false);
  const [COLS, ROWS] = [5, 6];
  const [page, dispatchPage] = useReducer(pageReducer, 2);
  const [tiles, dispatchTiles] = useReducer(tilesReducer, {
    tiles: [],
    safeTiles: [],
  });
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
  const formErrors = useRef<{ id: number; name: keyof IFormState }[]>([]);
  const [shouldFocus, setShouldFocus] = useState({ id: 0 });
  const [validate, setValidate] = useState(false);
  const [dragging, setDragging] = useState<Tile | null>(null);
  const [tilesError, setTilesError] = useState(false);

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

  function tilesReducer(
    state: { tiles: Tile[]; safeTiles: { id: PosId }[] },
    action: TileReducerAction | SafeTileReducerAction
  ): { tiles: Tile[]; safeTiles: { id: PosId }[] } {
    switch (action.type) {
      case "add":
        return { ...state, tiles: [...state.tiles, action.payload] };
      case "error":
        return { tiles: [], safeTiles: [] }; // Return an object with empty arrays
      case "modify":
        if (action.payload.modified.type === "wall") setWallChanged(true);
        if (
          action.payload.modified.type !== "wall" &&
          state.tiles.filter((i) => i.id === action.payload.id)[0].type ===
            "wall"
        ) {
          setWallChanged(true);
        }
        return {
          ...state,
          tiles: state.tiles.map((i) =>
            i.id === action.payload.id ? action.payload.modified : i
          ),
        };
      case "addSafe":
        return {
          ...state,
          safeTiles: state.safeTiles.filter((i) => i.id === action.payload.id)
            .length
            ? state.safeTiles
            : [...state.safeTiles, action.payload],
        };
      case "removeSafe":
        return {
          ...state,
          safeTiles: state.safeTiles.filter((i) => i.id !== action.payload.id),
        };
      case "resetSafe":
        return { ...state, safeTiles: [] };
      default:
        return { tiles: [], safeTiles: [] }; // Return an object with empty arrays
    }
  }

  function formReducer(
    state: IFormState,
    action: { type: keyof IFormState; payload: string }
  ) {
    return { ...state, [action.type]: action.payload };
  }

  function initTiles(
    { safeOnly }: { safeOnly?: boolean } = { safeOnly: false }
  ) {
    dispatchTiles({ type: "resetSafe" });
    for (let x = 1; x < ROWS + 1; x++) {
      for (let y = 1; y < COLS + 1; y++) {
        if (x === 1 || x === 6 || y === 1 || y === 5) {
          dispatchTiles({ type: "addSafe", payload: { id: `${x};${y}` } });
        }
        if (safeOnly) {
          const wallHere = tiles.tiles.filter(
            (i) => i.id === `${x};${y}` && i.type === "wall"
          );
          if (wallHere.length && wallHere[0].pos) {
            dispatchTiles({
              type: "addSafe",
              payload: { id: `${x - 1};${y}` },
            });
            dispatchTiles({
              type: "addSafe",
              payload: { id: `${x + 1};${y}` },
            });
            dispatchTiles({
              type: "addSafe",
              payload: { id: `${x};${y - 1}` },
            });
            dispatchTiles({
              type: "addSafe",
              payload: { id: `${x};${y + 1}` },
            });
          }
          continue;
        }
        dispatchTiles({
          type: "add",
          payload: {
            type: "empty",
            pos: {
              x: x,
              y: y,
            },
            id: `${x};${y}`,
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
      dispatchTiles({ type: "resetSafe" });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (wallChanged) {
      initTiles({ safeOnly: true });
      setWallChanged(false);
    }
  }, [wallChanged]);

  function validateTiles(_tiles: Tile[], _safeTiles: { id: PosId }[]): boolean {
    for (let i = 0; i < _tiles.length; i++) {
      const isSafe = !!_safeTiles.filter(
        (safeTile) => safeTile.id === _tiles[i].id
      ).length;
      const isMachine = ["washer", "dryer"].includes(_tiles[i].type);
      if (!isSafe && isMachine) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    if (!tiles.tiles.length || !tiles.safeTiles.length) return;
    const isError = validateTiles(tiles.tiles, tiles.safeTiles);
    console.log(
      "change",
      tiles.tiles.filter((i) => i.type === "wall").length,
      isError,
      tilesError
    );
    if (tilesError && !isError) setTilesError(false);
  }, [tiles.tiles, tiles.safeTiles]);

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
                errors: formErrors,
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
                  tilesError,
                  dispatchTiles,
                  tiles,
                  dragging,
                  setDragging,
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
                if (page === 1) {
                  setValidate(true);
                  if (formErrors.current.length) {
                    setShouldFocus({
                      id: Math.min(...formErrors.current.map((i) => i.id)),
                    });
                  } else dispatchPage({ type: "increment" });
                } else if (page === 2) {
                  const isError = validateTiles(tiles.tiles, tiles.safeTiles);
                  setTilesError(isError);
                  if (!isError) dispatchPage({ type: "increment" });
                }
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
