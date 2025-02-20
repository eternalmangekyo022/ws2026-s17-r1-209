import { useState, useEffect, useContext } from "react";
import Tile from "../components/Tile";
import LayoutContext from "../context/layout";

export default function Layout() {
  const [error, setError] = useState("");
  const { tiles } = useContext(LayoutContext);

  return (
    <>
      <h1>Shop layout</h1>
      <div className="dnd-row">
        <Tile id={"1"} type="washer" weight={8} key={"row-washer-1"} />
        <Tile id={"2"} key="row-washer-2" type="washer" weight={11} />
        <Tile id={"3"} type="dryer" weight={18} key={"row-dryer-1"} />
        <Tile id={"4"} type="dryer" weight={25} key={"row-dryer-2"} />
        <Tile id={"5"} type="table" key={"row-table"} />
        <Tile id={"6"} type="waiting" key={"row-waiting"} />
      </div>
      <div className="grid">
        {tiles.map(({ id, type, pos, weight }, idx) => (
          <>
            {(type === "washer" || type === "dryer") && (
              <Tile id={id} key={idx} type={type} weight={weight} pos={pos} />
            )}
            {["table", "waiting", "empty", "entrance", "wall"].includes(
              type
            ) && (
              <>
                <Tile id={id} key={idx} type={type} pos={pos} />
              </>
            )}
          </>
        ))}
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
