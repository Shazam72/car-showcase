import { createContext } from "react";
import { CarContextValue } from "../types/car";
const CarContext = createContext<CarContextValue>({
  updater: () => {},
});

export default CarContext;
