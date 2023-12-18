import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { animated } from "@react-spring/three";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

const ComputersCanvas = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(2.5);
  const [rotation, setRotation] = useState([0, 0, 0]);
  // const [initPoRo, setInitPoRp] = useState([0, 0]);

  // const handleMouseDown = () => {
  //   setInitPoRp([window.scrollY, window.scrollY / 500]);
  // };
  // const handleMouseUp = () => {
  //   setRotation([0, initPoRo[1], 0]);
  // };

  useEffect(() => {
    // listener for screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    // handle changes => media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleScroll = () => {
      const relativeScrollY = window.scrollY / window.innerHeight;

      const newPositionY = 2.5 - relativeScrollY * 3;
      const newRotationY = (relativeScrollY * Math.PI) / 2;

      setScrollPosition(newPositionY);
      setRotation([0, newRotationY, 0]);
    };

    // changes media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    window.addEventListener("scroll", handleScroll);
    // Remove listener
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Canvas
      style={{ zIndex: 2 }}
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <animated.mesh
        // onPointerDown={handleMouseDown}
        // onPointerUp={handleMouseUp}
        >
          <hemisphereLight intensity={0.15} groundColor="black" />
          <pointLight intensity={8} />
          <primitive
            object={computer.scene}
            scale={isMobile ? 0.1 : 0.2}
            position={
              isMobile ? [0, scrollPosition, -0.1] : [0, scrollPosition, -0.35]
            }
            rotation={rotation}
          />
        </animated.mesh>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
