import Washer from "../assets/washing-machine.svg";
import Waiting from "../assets/armchair.svg";
import Table from "../assets/space.svg";

import { useState, useEffect, useContext } from "react";
import Tile from "../components/Tile";
import LayoutContext from "../context/layout";

export default function Layout() {
  const [COLS, ROWS] = [5, 6];
  const [error, setError] = useState("");
  const { dispatchTiles, tiles } = useContext(LayoutContext);

  useEffect(() => {
    for (let i = 1; i < COLS + 1; i++) {
      for (let j = 1; j < ROWS; j++) {
        dispatchTiles({
          type: "add",
          payload: {
            type: "empty",
            x: i,
            y: j,
          },
        }); // Added missing closing brace and semicolon
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Shop layout</h1>
      <div className="dnd-row">
        <Tile id={1} type="washer" weight={8} key={"row-washer-1"} />
        <Tile id={1} key="row-washer-2" type="washer" weight={11} />
        <Tile id={1} type="dryer" weight={18} key={"row-dryer-1"} />
        <Tile id={1} type="dryer" weight={25} key={"row-dryer-2"} />
        <Tile id={1} type="table" key={"row-table"} />
        <Tile id={1} type="waiting" key={"row-waiting"} />
      </div>
      <div className="grid">
        <div className="grid-item empty"></div>
        <div className="grid-item wall">
          <span>Wall</span>
        </div>
        <div className="grid-item washer">
          <img src={Washer} alt="Washing Machine" />
          <span>Washer (11 kg)</span>
        </div>
        <div className="grid-item dryer">
          <img src={Washer} alt="Drying Machine" />
          <span>Dryer (25 kg)</span>
        </div>
        <div className="grid-item dryer">
          <img src={Washer} alt="Drying Machine" />
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
      {error && (
        <div className="alert">
          <img src="./assets/alert.svg" alt="Alert" />
          <span>{error}</span>
        </div>
      )}
    </>
  );
}
