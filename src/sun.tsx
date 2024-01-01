import { starColors } from "./field"

export default () => {

  return (
    <mesh>
      <sphereGeometry args={[.5, 24, 48]} />
      <meshStandardMaterial emissive={starColors[1]} emissiveIntensity={2} color="white" toneMapped={false} />
    </mesh>
  )
}
