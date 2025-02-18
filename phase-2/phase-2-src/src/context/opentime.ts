import { createContext, RefObject } from "react";

export default createContext({
  fromRef: null,
  toRef: null,
} as unknown as {
  fromRef: RefObject<HTMLInputElement | null>;
  toRef: RefObject<HTMLInputElement | null>;
});
