import type { StarType } from './field'
import { MeshBasicMaterial } from 'three'
import { useRef } from 'react'

export default ({ star }: { star: StarType }) => {
  const ref = useRef<MeshBasicMaterial>(null)

  return (
    <mesh position={[star.x, star.y, star.z]} >
      <sphereGeometry args={[.01]} />
      <meshBasicMaterial color={star.color} transparent={true} ref={ref} />
    </mesh>
  )
}
