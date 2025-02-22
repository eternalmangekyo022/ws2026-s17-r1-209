import { createContext } from "react";

const data: PageContextType = {
  page: 0,
  dispatchPage: () => {},
};

type PageContextType = {
  page: number;
  dispatchPage: (action: { type: "increment" | "decrement" | "reset" }) => void;
};

export default createContext(data);
