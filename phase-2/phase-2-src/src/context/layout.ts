import { createContext } from "react";

type Data = {
  tiles: Tile[];
  dispatchTiles: (action: TileActionArg) => void;
};

const data: Data = {
  tiles: [],
  dispatchTiles: () => {},
};

export default createContext(data);
