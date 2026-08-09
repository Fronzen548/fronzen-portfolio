'use client'

import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { DoubleSide } from 'three'

const Planet = () => {
  return (
    <>
      {/* Main planet body */}
      <mesh>
        <sphereGeometry args={[1.8, 480, 480]} />
        <meshPhysicalMaterial
          color="#071426"
          roughness={0.28}
          metalness={0.02}
          clearcoat={0.92}
          clearcoatRoughness={0.04}
          transmission={0}
          emissive="#031723"
          emissiveIntensity={0.06}
          reflectivity={0.7}
        />
      </mesh>

      {/* Thin atmospheric/cloud layer for soft scattering */}
      <mesh>
        <sphereGeometry args={[1.86, 480, 480]} />
        <meshStandardMaterial
          color="#9fe8ff"
          transparent
          opacity={0.06}
          side={DoubleSide}
          roughness={1}
          metalness={0}
          emissive="#7fdfff"
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* Subtle outer glow */}
      <mesh>
        <sphereGeometry args={[1.94, 64, 64]} />
        <meshStandardMaterial color="#7fd7ff" transparent opacity={0.03} side={DoubleSide} roughness={1} />
      </mesh>

      {/* Translucent ring (soft glow) */}
      <mesh rotation={[Math.PI / 2.9, 0, 0]}>
        <ringGeometry args={[2.02, 2.7, 720]} />
        <meshBasicMaterial color="#9fe8ff" opacity={0.06} transparent side={DoubleSide} />
      </mesh>

      {/* Thin orbital lines for detail */}
      <mesh rotation={[Math.PI / 2.6, 0, Math.PI / 6]}>
        <torusGeometry args={[2.3, 0.002, 8, 200]} />
        <meshBasicMaterial color="#cfffff" opacity={0.12} transparent />
      </mesh>

      <mesh rotation={[Math.PI / 2.6, 0, -Math.PI / 8]}>
        <torusGeometry args={[2.45, 0.002, 8, 200]} />
        <meshBasicMaterial color="#7fe8ff" opacity={0.09} transparent />
      </mesh>
    </>
  )
}

const OrbitalSphereCanvas = () => {
  return (
    <Canvas dpr={[1, 8]} camera={{ position: [0, 0, 9], fov: 35 }} className="h-full w-full rounded-3xl">
      <fog attach="fog" args={['#05020a', 7, 24]} />

      {/* Lighting tuned for cool/blue appearance */}
      <ambientLight intensity={0.45} />
      <directionalLight color="#bfeeff" position={[8, 10, 10]} intensity={1.05} />
      <directionalLight color="#7fdfff" position={[-6, -4, -2]} intensity={0.35} />
      <pointLight color="#9fe8ff" intensity={1.25} position={[2.4, 3.5, 4.2]} />

      <Stars radius={16} depth={50} count={1400} factor={4} saturation={0.1} fade />

      <Planet />

      {/* No OrbitControls and no per-frame rotation - static planet */}
    </Canvas>
  )
}

export default OrbitalSphereCanvas
