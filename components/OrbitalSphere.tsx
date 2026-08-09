'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react'
import { DoubleSide } from 'three'

const Planet = () => {
  const planetRef = useRef<any>(null)
  const ringRef = useRef<any>(null)

  useFrame(({ clock }) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.002
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.0012
    }
  })

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[1.8, 220, 220]} />
        <meshPhysicalMaterial
          color="#261d46"
          roughness={0.42}
          metalness={0.18}
          clearcoat={0.8}
          clearcoatRoughness={0.18}
          transmission={0.02}
          emissive="#18072f"
          emissiveIntensity={0.16}
          specularIntensity={1}
          reflectivity={0.35}
        />
      </mesh>

      <mesh ref={ringRef} rotation={[Math.PI / 2.9, 0, 0]}>
        <ringGeometry args={[2.02, 2.7, 256]} />
        <meshStandardMaterial color="#7c4dff" opacity={0.1} transparent side={DoubleSide} roughness={1} metalness={0} />
      </mesh>

      <mesh>
        <sphereGeometry args={[1.86, 220, 220]} />
        <meshPhysicalMaterial
          color="#8e70ff"
          opacity={0.12}
          transparent
          side={DoubleSide}
          roughness={1}
          metalness={0}
          emissive="#7c4dff"
          emissiveIntensity={0.18}
        />
      </mesh>
    </>
  )
}

const OrbitalSphereCanvas = () => {
  return (
    <Canvas dpr={[1, 4]} camera={{ position: [0, 0, 9], fov: 35 }} className="h-full w-full rounded-3xl">
      <fog attach="fog" args={['#05020a', 7, 24]} />
      <ambientLight intensity={0.38} />
      <directionalLight position={[8, 10, 10]} intensity={1.35} />
      <directionalLight position={[-6, -4, -2]} intensity={0.45} />
      <pointLight color="#7c4dff" intensity={1.3} position={[2.4, 3.5, 4.2]} />
      <Stars radius={16} depth={50} count={2100} factor={4} saturation={0} fade />
      <Planet />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.75} rotateSpeed={0.55} />
    </Canvas>
  )
}

export default OrbitalSphereCanvas
