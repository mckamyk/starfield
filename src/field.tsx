import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react";
import { Mesh } from "three";
import { randFloat } from "three/src/math/MathUtils.js";
import Star from './star'
import Sun from "./sun";

export default () => {
  const [stars] = useState<StarType[]>(() => generateStars())
  const ref = useRef<Mesh>(null)
  useFrame((_, delta) => {
    ref.current?.rotateY(delta / 20)
  })

  return (
    <mesh ref={ref}>
      <Sun />
      {
        stars.map((star, i) => (
          <Star key={i} star={star} />
        ))
      }
    </mesh>
  )

}

export type StarType = {
  x: number;
  y: number;
  z: number;
  size: number;
  color: string;
}

const generateStars = (count = 1000) => {
  const stars: StarType[] = []
  for (let i = 0; i < count; i++) {
    const x = randFloat(-10, 10)
    const y = randFloat(-10, 10)
    const z = randFloat(-10, 10)
    const size = randFloat(.05, .005)
    const color = starColors[Math.floor(Math.random() * 6)]

    stars.push({ x, y, z, size, color })
  }

  return stars
}

export const starColors = [
  '#FFD700', // Yellow (G-type stars)
  '#87CEEB', // Blue (B-type stars)
  '#FF6347', // Red (M-type stars)
  '#FFFFFF', // White (A-type stars)
  '#FFA500', // Orange (K-type stars)
  '#FF69B4'  // Pink/Purple (O-type stars)
];

