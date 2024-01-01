import type { MeshBasicMaterial, MeshStandardMaterial } from "three";
import { starColors } from "./field"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react";

export default () => {
  const ref = useRef<MeshStandardMaterial>(null);

  useFrame((three, delta) => {
    const time = three.clock.getElapsedTime()

    if (time > 1 && ref.current) {
      if (ref.current.opacity < 1) {
        ref.current.opacity = ref.current.opacity + delta / 2
      }

      if (ref.current.emissiveIntensity < 2) {
        ref.current.emissiveIntensity = ref.current.emissiveIntensity + delta / 2
      }
    }
  })

  return (
    <mesh>
      <sphereGeometry args={[.5, 24, 48]} />
      <meshStandardMaterial emissive={starColors[1]} emissiveIntensity={0} ref={ref} opacity={0} transparent toneMapped={false} />
    </mesh>
  )
}
