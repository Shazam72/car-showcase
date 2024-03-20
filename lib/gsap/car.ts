import gsap from "gsap";
import { OrbitControls } from "three-stdlib";
import { RefObject } from "react";

export const getInCarTl = (orbitRef: RefObject<OrbitControls | null>) => {
  if (!orbitRef?.current) return null;
  const tl = gsap.timeline({ paused: true });

  tl.to(orbitRef.current, {
    autoRotate: false,
    minDistance: 0.1,
  })
    .to(
      orbitRef.current.object.position,
      {
        x: -0.3,
        y: 0.3,
        z: 0.5,
      },
      "<"
    )
    .to(orbitRef.current.target, {
      x: -0.26,
      y: 0.27,
      z: 0.2368967568,
    })
    .to(orbitRef.current.object.quaternion, {
      x: -0.031,
      y: -0.042,
      z: -0.0013,
      w: 0.1,
    })
    .to("#exit-car", { scale: 1 }, "<");

  return tl;
};
