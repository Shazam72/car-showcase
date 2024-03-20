import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { OrbitControls as ThreeStdOrbitControls } from "three-stdlib";
import { Car } from "./Car";
import { MutableRefObject, useContext } from "react";
import CarContext from "../../contexts/car";
import Stage from "./Stage";

function Scene({
  orbitRef,
}: {
  orbitRef: MutableRefObject<ThreeStdOrbitControls | null>;
}) {
  const { inCar } = useContext(CarContext);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, -10]} />
      <ambientLight intensity={0.25} />
      <Environment
        background={inCar}
        files={"textures/env/modern_buildings.hdr"}
      />
      <Stage>
        <Car scale={0.03} castShadow receiveShadow />
      </Stage>
      <OrbitControls
        // autoRotate
        ref={orbitRef}
        enableZoom
        maxPolarAngle={Math.PI / 2}
        maxDistance={10}
        minDistance={4}
        enablePan={false}
      />
    </>
  );
}

export default Scene;
