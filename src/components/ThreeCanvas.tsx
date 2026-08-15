import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

export const ThreeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Colors based on theme
    const isDark = theme === 'dark';
    const wireframeColor = isDark ? 0x38bdf8 : 0x2563eb;
    const innerColor = isDark ? 0x0284c7 : 0x4f46e5;
    const pointColor = isDark ? 0x7dd3fc : 0x3b82f6;
    const particleColor = isDark ? 0x94a3b8 : 0x64748b;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // Outer Wireframe Sphere (3D Infrastructure Mesh)
    const geometry = new THREE.IcosahedronGeometry(7, 2);
    const wireframeGeometry = new THREE.WireframeGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: wireframeColor,
      transparent: true,
      opacity: isDark ? 0.35 : 0.25,
    });
    const wireframe = new THREE.LineSegments(wireframeGeometry, lineMaterial);
    group.add(wireframe);

    // Inner Glowing Core (3D Server Core)
    const innerGeo = new THREE.IcosahedronGeometry(4, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: innerColor,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.3 : 0.2,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerMesh);

    // Node Points at Vertices
    const vertices = geometry.attributes.position;
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute('position', vertices);

    const pointsMat = new THREE.PointsMaterial({
      color: pointColor,
      size: 0.35,
      transparent: true,
      opacity: 0.9,
    });
    const points = new THREE.Points(pointsGeo, pointsMat);
    group.add(points);

    // Background Particle Cloud
    const particleCount = 220;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 40;
      particlePositions[i + 1] = (Math.random() - 0.5) * 40;
      particlePositions[i + 2] = (Math.random() - 0.5) * 40;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.14,
      transparent: true,
      opacity: isDark ? 0.4 : 0.3,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) * 0.0005;
      mouseY = (event.clientY - windowHalfY) * 0.0005;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Observer
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      group.rotation.y += 0.003;
      group.rotation.x += 0.001;

      group.rotation.y += targetX * 0.5;
      group.rotation.x += targetY * 0.5;

      particleSystem.rotation.y -= 0.0005;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      wireframeGeometry.dispose();
      lineMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-70"
      aria-hidden="true"
    />
  );
};
