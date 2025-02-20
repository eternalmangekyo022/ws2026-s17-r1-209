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
    | "waiting"
    | "table"
    | "entrance"
    | "wall"
    | "washer"
    | "dryer";

  interface IGeneralTile {
    type: Omit<ITileFormats, "dryer" | "washer">;
  }

  interface IWasher {
    type: "washer";
    weight: 8 | 11;
  }

  interface IDryer {
    type: "dryer";
    weight: 18 | 25;
  }

  type Tile = {
    id: number;
    pos: {
      [keyof("x" | "y")]: number;
    };
  } & (IGeneralTile | IWasher | IDryer);
}
