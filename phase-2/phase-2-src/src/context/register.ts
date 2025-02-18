import { createContext } from "react";

export default createContext({
  errors: {
    current: [],
  },
  shouldFocus: 0,
  validate: false,
  setValidate: () => {},
} as {
  errors: {
    current: number[];
  };
  validate: boolean;
  setValidate: React.Dispatch<React.SetStateAction<boolean>>;
  shouldFocus: number;
});
