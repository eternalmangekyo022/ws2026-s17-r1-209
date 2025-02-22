import { createContext } from "react";

const data: {
  services: IServices;
  dispatchServices: (action: ServicesReducerAction) => void;
} = {
  services: {
    freeWiFi: false,
    accessibleEntry: false,
    loungeArea: false,
    backgroundMusic: false,
    costumerService: false,
    parking: "Easy",
  },
  dispatchServices: () => {},
};

export default createContext(data);
