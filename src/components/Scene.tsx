import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { OrbitControls as ThreeStdOrbitControls } from "three-stdlib";
import { Car } from "./Car";
import { MutableRefObject } from "react";
import Stage from "./Stage";

function Scene({
  orbitRef,
}: {
  orbitRef: MutableRefObject<ThreeStdOrbitControls | null>;
}) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[10, 0, 0]} />
      <ambientLight intensity={0.25} />
      <Environment
        background
        files={"textures/env/modern_buildings.hdr"}
      />
      <Stage>
        <Car rotation-y={-Math.PI/ 2} scale={0.03} castShadow receiveShadow />
      </Stage>
      <OrbitControls
        autoRotate
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
