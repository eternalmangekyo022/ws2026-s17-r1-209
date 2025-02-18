import { createContext } from "react";

export default createContext({
  errors: {
    current: [],
  },
  shouldFocus: { id: 0 },
  validate: false,
  setValidate: () => {},
} as {
  errors: {
    current: number[];
  };
  validate: boolean;
  setValidate: React.Dispatch<React.SetStateAction<boolean>>;
  shouldFocus: { id: number };
});
