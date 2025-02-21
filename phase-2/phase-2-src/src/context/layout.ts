import { createContext } from "react";

type Data = {
  tiles: Tile[];
  dispatchTiles: (action: TileReducerAction) => void;
  // LOOOOW TAPER FADE
  dragging: null | Tile;
  setDragging: (tile: Tile | null) => void;
  safeTiles: { id: `${number};${number}` }[];
  dispatchSafeTiles: (action: SafeTileReducerAction) => void;
};

const data: Data = {
  tiles: [],
  dispatchTiles: () => {},
  dragging: null,
  setDragging: () => {},
  safeTiles: [],
  dispatchSafeTiles: () => {},
};

export default createContext(data);
