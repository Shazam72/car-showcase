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
}: { labelName?: string; tweaks?: string } & ComponentProps<"input">) => {
  const { updater } = useContext(CarContext);
  const onChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    tweaks && updater({ [tweaks]: evt.target.value });
  };

  return (
    <div className="flex flex-col items-center">
      <label className="font-bold">{labelName}</label>
      <input {...props} onChange={onChange} />
    </div>
  );
};

function Canvas() {
  const orbitRef = useRef<OrbitControls | null>(null);
  const getIntoCarTl = useRef<gsap.core.Timeline | null>(null);
  const { inCar, updater, carBodyColor, wheelColor, wheelJointColor } =
    useContext(CarContext);

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
        Exit car
      </div>
      <div className="absolute flex gap-5 bottom-0 left-1/2 translate-x-[-50%] translate-y-[-50%]">
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
      </div>
    </div>
  );
}

export default Canvas;
