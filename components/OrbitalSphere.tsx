'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { useRef } from 'react'

const OrbitalSphere = () => {
  const sphereRef = useRef<any>(null)
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.008
      sphereRef.current.rotation.x = Math.sin(clock.elapsedTime) * 0.15
    }
  })

  return (
    <mesh ref={sphereRef} rotation={[0.4, 0, 0]}>
      <icosahedronGeometry args={[1.4, 4]} />
      <meshStandardMaterial color="#7c4dff" roughness={0.2} metalness={0.9} emissive="#5e42ff" emissiveIntensity={0.8} />
    </mesh>
  )
}

const OrbitalSphereCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} className="h-full w-full rounded-3xl">
      <ambientLight intensity={0.45} />
      <directionalLight position={[5, 5, 7]} intensity={1.1} />
      <directionalLight position={[-5, -3, -2]} intensity={0.5} />
      <Stars radius={10} depth={20} count={1200} factor={4} saturation={0} fade />
      <OrbitalSphere />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} rotateSpeed={0.5} />
    </Canvas>
  )
}

export default OrbitalSphereCanvas
