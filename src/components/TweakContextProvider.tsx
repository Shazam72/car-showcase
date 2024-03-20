import { ReactNode, useState } from "react";
import CarContext from "../../contexts/car";
import { TweaksValue } from "../../types/car";
function CarContextProvider({ children }: { children: ReactNode }) {
  const [tweaksValue, setTweaksValue] = useState<TweaksValue>({
    inCar: false,
    wheelColor: "#000000",
    carBodyColor: "#ffffff",
    wheelJointColor: "#ffffff",
    passengerCompartmentColor: "#ffffff",
    inDoorColor: "#ffffff",
    wheelShow: false,
    run: false,
  });
  const updater = (newValue: TweaksValue) =>
    setTweaksValue((v) => ({ ...v, ...newValue }));
  return (
    <CarContext.Provider value={{ ...tweaksValue, updater }}>
      {children}
    </CarContext.Provider>
  );
}

export default CarContextProvider;
