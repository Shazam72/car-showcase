import { useContext, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { CarProps, GLTFResult } from "../../types/car";
import { Group } from "three";
import CarContext from "../../contexts/car";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export function Car(props: CarProps) {
  const { nodes, materials } = useGLTF("/models/car.glb") as GLTFResult;
  const wheelRef = useRef<Group>(null);
  const globalGroup = useRef<Group>(null);
  const doorRef = useRef<Group>(null);
  const { carBodyColor, wheelColor, wheelJointColor, updater } =
    useContext(CarContext);

  const onWheelsClick = () => {};

  const onCarDoorClick = () => updater({ inCar: true });

  return (
    <>
      <group {...props} dispose={null} castShadow receiveShadow>
        <group
          ref={globalGroup}
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
          castShadow
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.Matte__80800000__env_50_spec_trans}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials.lavoiturecsr2_badge__env_50_spec}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.lavoiturecsr2_grille1__env_50_spec}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.lavoiturecsr2_grille2__env_50_spec}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.lavoiturecsr2_grille3__env_50_spec}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.vehiclelights128__env_50_spec_FL}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_8.geometry}
            material={materials.vehiclelights128__env_50_spec_FR}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.vehiclelights128__env_50_spec_RR}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_10.geometry}
            material={materials.Matte__80202020__env_50_spec_trans}
          />
          <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry}>
            <meshStandardMaterial
              {...materials.Matte__FF114182__sec_env_50_spec}
              color={carBodyColor}
            />
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_12.geometry}
            material={materials.Matte__FF151515__spec}
          />
          <mesh castShadow receiveShadow geometry={nodes.Object_13.geometry}>
            <meshStandardMaterial
              {...materials.Matte__FFFFFFFF__prim_env_50_spec}
              color={carBodyColor}
            />
          </mesh>
          <group ref={doorRef} onClick={onCarDoorClick}>
            <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry}>
              <meshStandardMaterial
                {...materials.Matte__FFFFFFFF__prim_env_50_spec}
                color={carBodyColor}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials.lavoiturecsr2_textured2a__spec}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials.lavoiturecsr2_coloured__env_50_spec}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_16.geometry}
            material={materials.lavoiturecsr2_coloured__env_50_spec}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials.lavoiturecsr2_coloured__env_50_spec}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_18.geometry}
            material={materials.lavoiturecsr2_light__env_50_spec}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials.lavoiturecsr2_textured2a__spec}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials.lavoiturecsr2_textureda__env_50_spec}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_22.geometry}
            material={materials.lavoiturecsr2_textureda__env_50_spec}
          />
          <group ref={wheelRef} onClick={onWheelsClick}>
            <mesh castShadow receiveShadow geometry={nodes.Object_23.geometry}>
              <meshStandardMaterial
                {...materials.lavoiturecsr2_wheel__env_50_spec}
                color={wheelJointColor}
              />
            </mesh>
            <mesh castShadow receiveShadow geometry={nodes.Object_24.geometry}>
              <meshStandardMaterial
                {...materials.lavoiturecsr2_wheel__spec}
                color={wheelColor}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.lavoiturecsr2_wheeltextured__env_50_spec}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials.lavoiturecsr2_wheeltextured__env_50_spec}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials.lavoiturecsr2_wheeltextured__env_50_spec}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials.lavoiturecsr2_wheeltextured__env_50_spec}
            />
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/models/car.glb");
