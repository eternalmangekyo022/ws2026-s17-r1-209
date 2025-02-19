import { createContext } from "react";

export default createContext({
  errors: {
    current: [],
  },
  shouldFocus: { id: 0 },
  validate: false,
  setValidate: () => {},
  form: {
    address: "",
    city: "",
    description: "",
    from: "",
    to: "",
    name: "",
    openAt: "everyday",
    postalCode: "",
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatchForm: (_action: { type: keyof IFormState; payload: string }) => {},
} as {
  errors: {
    current: { id: number; name: keyof IFormState }[];
  };
  validate: boolean;
  setValidate: React.Dispatch<React.SetStateAction<boolean>>;
  shouldFocus: { id: number };
  form: IFormState;
  dispatchForm: (action: { type: keyof IFormState; payload: string }) => void;
});
