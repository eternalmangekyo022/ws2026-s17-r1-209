import { createContext } from "react";

type Data = {
  tiles: Tile[];
  dispatchTiles: (action: TileReducerAction) => void;
  dragging: null | Tile;
  // LOOOOW TAPER FADE
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
