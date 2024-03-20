import {
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { OrbitControls as ThreeStdOrbitControls } from "three-stdlib";
import { Car } from "./Car";
import { MutableRefObject, useContext } from "react";
import CarContext from "../../contexts/car";

function Scene({
  orbitRef,
}: {
  orbitRef: MutableRefObject<ThreeStdOrbitControls | null>;
}) {
  const { inCar } = useContext(CarContext);
  return (
    <>
      <Environment
        background={inCar}
        files={"textures/env/skylit_garage_2k.hdr"}
      />
      <Car scale={0.03} castShadow receiveShadow />
      <OrbitControls
        autoRotate
        ref={orbitRef}
        enableZoom
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
}

export default Scene;
