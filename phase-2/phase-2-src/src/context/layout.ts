import { createContext } from "react";

type Data = {
  tiles: { tiles: Tile[]; safeTiles: { id: PosId }[] };
  dispatchTiles: (action: TileReducerAction) => void;
  dragging: null | Tile;
  // LOOOOW TAPER FADE
  setDragging: (tile: Tile | null) => void;
  tilesError: boolean;
};

const data: Data = {
  tiles: { tiles: [], safeTiles: [] },
  dispatchTiles: () => {},
  dragging: null,
  setDragging: () => {},
  tilesError: false,
};

export default createContext(data);
