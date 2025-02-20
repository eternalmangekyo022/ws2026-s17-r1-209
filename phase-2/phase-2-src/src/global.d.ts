export {};

declare global {
  interface IInputRule {
    isNum?: boolean;
    length: [number, number];
  }

  interface IFormState {
    name: string;
    description: string;
    postalCode: string;
    city: string;
    address: string;
    openAt: "everyday" | "weekdays" | "weekend";
    from: string;
    to: string;
  }

  type ITileFormats =
    | "empty"
    | "waiting"
    | "table"
    | "entrance"
    | "wall"
    | "washer"
    | "dryer";

  type Tile = {
    type: ITileFormats;
    id: string;
    weight?: 8 | 11 | 18 | 25;
    pos?: {
      x: number;
      y: number;
    };
  };

  //still have to add scenarios
  type TileAddAction = {
    type: "add";
    payload: {
      pos: {
        x: number;
        y: number;
      };
      weight: 8 | 11 | 18 | 25;
      id: string;
      type: ITileFormats;
    };
  };

  type TileErrorAction = {
    type: "error";
    payload: string;
  };

  type TileDragAction = {
    type: "drag";
    payload: Tile;
  };

  type TileModifyAction = {
    type: "modify";
    payload: {
      id: string;
      modified: Tile;
    };
  };

  type TileEmptyAction = {
    type: "";
  };

  type TileRedAction =
    | TileAddAction
    | TileErrorAction
    | TileModifyAction
    | TileDragAction
    | TileEmptyAction;
}
