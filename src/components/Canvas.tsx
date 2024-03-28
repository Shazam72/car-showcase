import { Canvas as FiberCanvas } from "@react-three/fiber";
import Scene from "./Scene";
import { ChangeEventHandler, ComponentProps, useContext, useRef } from "react";
import CarContext from "../../contexts/car";
import { OrbitControls } from "three-stdlib";
import { useGSAP } from "@gsap/react";
import { getInCarTl } from "../../lib/gsap/car";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const TweakInput = ({
  labelName,
  tweaks,
  ...props
}: { labelName: string; tweaks: string } & ComponentProps<"input">) => {
  const { updater } = useContext(CarContext);
  const onChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    tweaks && updater({ [tweaks]: evt.target.value });
  };

  return (
    <div className="flex flex-col items-center">
      <label className="text-center">{labelName}</label>
      <input {...props} className="" onChange={onChange} />
    </div>
  );
};

const BooleanActionBtn = ({
  name,
  contextProperty,
  value,
}: {
  name: string;
  contextProperty: string;
  value: boolean;
}) => {
  const { updater } = useContext(CarContext);

  const onClick = () => {
    updater({ [contextProperty]: !value });
  };

  return (
    <button
      type="button"
      className={`font-bold  bg-${
        value ? "red" : "blue"
      }-500 px-5 py-2 text-white rounded-full`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

function Canvas() {
  const orbitRef = useRef<OrbitControls | null>(null);
  const getIntoCarTl = useRef<gsap.core.Timeline | null>(null);
  const {
    inCar,
    updater,
    carBodyColor,
    wheelColor,
    wheelJointColor,
    passengerCompartmentColor,
    inDoorColor,
  } = useContext(CarContext);

  useGSAP(() => {
    if (inCar) {
      getIntoCarTl.current = getInCarTl(orbitRef);
      getIntoCarTl.current?.play();
    } else {
      getIntoCarTl.current?.reverse();
    }
  }, [orbitRef, inCar]);

  const onExitClick = () => updater({ inCar: false });

  return (
    <div className="w-full h-full relative">
      <FiberCanvas shadows>
        <Scene orbitRef={orbitRef} />
      </FiberCanvas>
      <div
        onClick={onExitClick}
        id="exit-car"
        className="absolute scale-0 flex gap-2 top-1 cursor-pointer left-1/2 translate-x-[-50%] text-xl flex items-center justify-center bg-gray-200 px-5 py-2 rounded-full "
      >
        Sortir
      </div>
      <div className="absolute flex items-end gap-5 bottom-1 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        {!inCar && (
          <>
            <TweakInput
              type="color"
              className="outline-none"
              labelName="Carosserie"
              tweaks="carBodyColor"
              value={carBodyColor}
            />
            <TweakInput
              type="color"
              className="outline-none"
              labelName="Jointures pneux"
              tweaks="wheelJointColor"
              value={wheelJointColor}
            />
            <TweakInput
              type="color"
              className="outline-none"
              labelName="Pneux"
              tweaks="wheelColor"
              value={wheelColor}
            />
          </>
        )}
        {inCar && (
          <>
            <TweakInput
              type="color"
              className="outline-none"
              labelName="Habitacle"
              tweaks="passengerCompartmentColor"
              value={passengerCompartmentColor}
            />
            <TweakInput
              type="color"
              className="outline-none"
              labelName="Portes intérieures"
              tweaks="inDoorColor"
              value={inDoorColor}
            />
          </>
        )}
      </div>
      <div className="absolute flex flex-col gap-2 top-1/2 translate-y-[-50%] right-2">
        {/* <BooleanActionBtn
          value={wheelShow as boolean}
          name="Pneux"
          contextProperty="wheelShow"
        />
        <BooleanActionBtn
          value={run as boolean}
          name="Rouler"
          contextProperty="run"
        /> */}
      </div>
      <small className="fixed bottom-0 left-1/2 translate-x-[-50%] text-center">Built by <a href="https://legrandwebservices.com" className="underline text-white">Legrand WEB Services</a></small>
    </div>
  );
}

export default Canvas;
