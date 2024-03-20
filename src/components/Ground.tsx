import { useTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { DoubleSide } from "three";

function Ground(props: MeshProps) {
  const [aoMap, diffuseMap, dispMap, normalMap, roughnessMap] = useTexture([
    "textures/patio_tiles/patio_tiles_ao_1k.png",
    "textures/patio_tiles/patio_tiles_diff_1k.png",
    "textures/patio_tiles/patio_tiles_disp_1k.png",
    "textures/patio_tiles/patio_tiles_nor_gl_1k.png",
    "textures/patio_tiles/patio_tiles_rough_1k.png",
  ]);

  return (
    <mesh
      position={[0, -1.17, 0]}
      rotation-x={-Math.PI / 2}
      {...props}
      receiveShadow
    >
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        map={diffuseMap}
        normalMap={normalMap}
        displacementMap={dispMap}
        aoMap={aoMap}
        roughnessMap={roughnessMap}
        side={DoubleSide}
      />
    </mesh>
  );
}

export default Ground;
