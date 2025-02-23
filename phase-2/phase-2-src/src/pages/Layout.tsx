import Alert from "../assets/alert.svg";

import { useContext } from "react";
import Tile from "../components/Tile";
import LayoutContext from "../context/layout";

export default function Layout() {
  const { tiles, tilesError } = useContext(LayoutContext);

  return (
    <>
      <h1>Shop layout</h1>
      <div className="dnd-row">
        <Tile
          id={"rows-1"}
          pos={{ x: 0, y: 0 }}
          type="washer"
          weight={8}
          key={"row-washer-1"}
        />
        <Tile
          id={"rows-2"}
          pos={{ x: 0, y: 0 }}
          type="washer"
          weight={11}
          key="row-washer-2"
        />
        <Tile
          id={"rows-3"}
          pos={{ x: 0, y: 0 }}
          type="dryer"
          weight={18}
          key={"row-dryer-1"}
        />
        <Tile
          id={"rows-4"}
          pos={{ x: 0, y: 0 }}
          type="dryer"
          weight={25}
          key={"row-dryer-2"}
        />
        <Tile
          id={"rows-5"}
          pos={{ x: 0, y: 0 }}
          type="table"
          key={"row-table"}
        />
        <Tile
          id={"rows-6"}
          pos={{ x: 0, y: 0 }}
          type="waiting"
          key={"row-waiting"}
        />
      </div>
      {tilesError && (
        <div className="alert">
          <img src={Alert} alt="Alert" />
          <span>Washers or Dryers can only be next to a wall.</span>
        </div>
      )}
      <div className="grid">
        {tiles.tiles.map(({ id, type, pos, weight }, idx) => (
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
    </>
  );
}
