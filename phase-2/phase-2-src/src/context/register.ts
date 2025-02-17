import { createContext } from "react";

export default createContext({
  error: false,
  setError: () => {},
  validate: false,
  setValidate: () => {},
} as {
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  validate: boolean;
  setValidate: React.Dispatch<React.SetStateAction<boolean>>;
});
