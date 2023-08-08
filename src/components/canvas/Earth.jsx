import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PositionPoint, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from "../Loader"

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf") 
  return (
      <primitive position-y={0} rotation-y={0} scale={2.5} object={earth.scene}/>
    )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 90,
        near: 0.1,
        far: 200,
        postion: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan= {false}
        />
        <Earth></Earth>
      </Suspense>
    </Canvas>
  );
}

export default EarthCanvas;