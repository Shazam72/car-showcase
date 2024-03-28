import { ReactNode } from "react";
import Ground from "./Ground";
import { DoubleSide } from "three";

function Stage({ children }: { children: ReactNode }) {
  return (
    <group>
      {children}
      <Ground />
      <mesh position-z={10} position-y={10 - 1.1}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial side={DoubleSide} />
      </mesh>

      <mesh position-z={-10} position-y={10 - 1.1}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial side={DoubleSide} />
      </mesh>
      <mesh position-x={-10} position-y={10 - 1.1} rotation-y={Math.PI / 2}>
        <planeGeometry args={[20, 20]} />
        <meshBasicMaterial side={DoubleSide} />
      </mesh>
    </group>
  );
}

export default Stage;
