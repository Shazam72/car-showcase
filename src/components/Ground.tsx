import { MeshProps } from "@react-three/fiber";
import { DoubleSide } from "three";

function Ground(props: MeshProps) {
  return (
    <mesh
      position={[0, -0.815, 0]}
      rotation-x={-Math.PI / 2}
      {...props}
      receiveShadow
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial side={DoubleSide} color="#1ea3d8" />
    </mesh>
  );
}

export default Ground;
