import { createContext } from "react";

export default createContext({
  errors: [],
  dispatchError: () => {},
  validate: false,
  setValidate: () => {},
} as {
  errors: number[];
  dispatchError: React.ActionDispatch<
    [
      action: {
        type: "add" | "remove";
        payload: number;
      }
    ]
  >;
  validate: boolean;
  setValidate: React.Dispatch<React.SetStateAction<boolean>>;
});
