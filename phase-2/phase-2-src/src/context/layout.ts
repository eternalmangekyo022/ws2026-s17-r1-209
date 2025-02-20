import { createContext } from "react";

type Data = {
  tiles: Tile[];
  // LOOOOW TAPER FADE
  dragging: null | Tile;
  setDragging: (tile: Tile) => void;
  dispatchTiles: (action: TileRedAction) => void;
};

const data: Data = {
  tiles: [],
  dragging: null,
  setDragging: () => {},
  dispatchTiles: () => {},
};

export default createContext(data);
