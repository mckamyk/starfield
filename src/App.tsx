import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Field from './field'

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <Field />
        <EffectComposer>
          <Bloom
            intensity={.25}
            luminanceThreshold={1}
            luminanceSmoothing={.025}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default App
