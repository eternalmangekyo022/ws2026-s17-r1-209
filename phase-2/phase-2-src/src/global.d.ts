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

  interface IGeneralTile {
    type: "empty" | "waiting" | "table" | "entrance" | "wall";
  }

  interface IWasher {
    type: "washer";
    weight: 8 | 11;
  }

  interface IDryer {
    type: "dryer";
    weight: 18 | 25;
  }

  interface RowKey {
    key: `row-${string}`;
    pos?: never;
  }

  interface NormalKey {
    key: string;
    pos: {
      x: number;
      y: number;
    };
  }

  type Tile = {
    id: number;
    weight?: number;
  } & (IGeneralTile | IWasher | IDryer) &
    (RowKey | NormalKey);

  type AddActionArg = {
    type: "add";
    payload: {
      x: number;
      y: number;
      type: ITileFormats;
    };
  };

  type ErrorActionArg = {
    type: "error";
    payload: string;
  };

  type TileActionArg = AddActionArg | ErrorActionArg;
}
