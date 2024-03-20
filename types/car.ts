import { GroupProps } from "@react-three/fiber";
import {
  BufferGeometry,
  Material,
  Mesh,
  MeshStandardMaterial,
  NormalBufferAttributes,
} from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    [key: string]: Mesh;
  };
  materials: {
    [key: string]: MeshStandardMaterial;
  };
};

export type CarProps = GroupProps;

export type PinkableMeshProps = {
  geometry?: BufferGeometry<NormalBufferAttributes>;
  material?: Material | Material[];
};

export type TweaksValue = {
  carBodyColor?: string;
  wheelColor?: string;
  wheelJointColor?: string;
  passengerCompartmentColor?: string;
  outDoorColor?: string;
  inDoorColor?: string;
  inCar?: boolean;
  wheelShow?: boolean;
  run?: boolean
};

export type CarContextValue = TweaksValue & {
  updater: (newValue: TweaksValue) => void;
};

export type TCarGroupChild = Mesh<BufferGeometry, MeshStandardMaterial>;
