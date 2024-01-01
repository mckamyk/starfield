import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer, Pixelation } from '@react-three/postprocessing'
import Field from './field'
import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'

export default () => {
  const [show, setShow] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      console.log("show")
      setShow(false)
    }, 500)
  }, [])
  return (
    <div className="h-screen w-screen absolute left-0 top-0">
      <Canvas>
        <Field />
        <EffectComposer>
          <Bloom
            intensity={.25}
            luminanceThreshold={1}
            luminanceSmoothing={.025}
            mipmapBlur
          />
          {/* <Pixelation  /> */}
        </EffectComposer>
      </Canvas>
      <Transition
        className="h-screen w-screen absolute left-0 top-0 transition-colors bg-black z-10"
        leave="duration-[2000ms]"
        leaveFrom="bg-black"
        leaveTo="bg-black/0"
        show={show}
      >
      </Transition>
    </div>
  )
}

