import { createContext } from "react";

const data: PageContextType = {
  page: 0,
  dispatchPage: () => {},
};

type PageContextType = {
  page: number;
  dispatchPage: (
    action:
      | { type: "increment" | "decrement" | "reset" }
      | { type: "set"; payload: number }
  ) => void;
};

export default createContext(data);
