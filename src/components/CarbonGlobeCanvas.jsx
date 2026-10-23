import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CarbonGlobeCanvas({ scrolled }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera & WebGL Renderer ---
    const scene = new THREE.Scene();

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.set(0, 0, 110);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.pointerEvents = 'auto';
    container.appendChild(renderer.domElement);

    // --- Particle Configuration: Earth Biosphere + Satellite Carbon Orbit ---
    const GLOBE_PARTICLES = 14000;    // Dense sphere surface with continental clusters
    const SATELLITE_ORBIT_A = 2400;   // Polar satellite trajectory ring
    const SATELLITE_ORBIT_B = 2400;   // Equatorial carbon flux ring
    const CARBON_STREAMS = 3200;      // Arc streams flowing from poles to sinks
    const AMBIENT_PARTICLES = 3000;   // Cosmic & atmospheric carbon dust

    const totalParticles = GLOBE_PARTICLES + SATELLITE_ORBIT_A + SATELLITE_ORBIT_B + CARBON_STREAMS + AMBIENT_PARTICLES;

    const positions = new Float32Array(totalParticles * 3);
    const basePositions = new Float32Array(totalParticles * 3);
    const rainbowColors = new Float32Array(totalParticles * 3);
    const customSizes = new Float32Array(totalParticles);
    const phases = new Float32Array(totalParticles);

    // Color Palettes: Emerald (Nature), Cyan (Atmosphere), Google Blue (Integrity), Solar Gold (Clean Energy), Purple (AI & Tech), Rainbow Hologram
    const PALETTES = [
      new THREE.Color('#10b981'), // 0: INITIAL: Pure Bio-Emerald Mint (Carbon Removal)
      new THREE.Color('#06b6d4'), // 1: Atmospheric Cyan / Azure
      new THREE.Color('#1a73e8'), // 2: Google Climate Deep Blue
      new THREE.Color('#10b981'), // 3: Forest Green
      new THREE.Color('#f59e0b'), // 4: Solar Gold / Energy
      new THREE.Color('#8b5cf6'), // 5: Multi-Color Rainbow Hologram Mode
    ];

    const GLOBE_RADIUS = 28.0;

    let pIdx = 0;

    const randomGaussian = () => {
      let u = 0, v = 0;
      while (u === 0) u = Math.random();
      while (v === 0) v = Math.random();
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    // 1. Biosphere Planet Shell with Organic Continental Density
    for (let i = 0; i < GLOBE_PARTICLES; i++) {
      // Uniform spherical distribution using Fibonacci spiral
      const phi = Math.acos(1 - 2 * (i + 0.5) / GLOBE_PARTICLES);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      // Continental density modulation (creates organic landmass clusters vs oceanic deeps)
      const landNoise = Math.sin(theta * 3.0) * Math.cos(phi * 2.5) + Math.sin(theta * 7.0 + phi * 4.0) * 0.4;
      const isLand = landNoise > -0.15;

      const rNoise = isLand ? (randomGaussian() * 0.45) : (randomGaussian() * 0.2);
      const r = GLOBE_RADIUS + rNoise;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.sin(theta);

      const i3 = pIdx * 3;
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      basePositions[i3] = x;
      basePositions[i3 + 1] = y;
      basePositions[i3 + 2] = z;

      // Rainbow mode color
      const cRainbow = new THREE.Color();
      const hue = ((phi / Math.PI) * 0.7 + (theta / (Math.PI * 2)) * 0.3) % 1.0;
      cRainbow.setHSL(hue, 0.95, 0.58);
      rainbowColors[i3] = cRainbow.r;
      rainbowColors[i3 + 1] = cRainbow.g;
      rainbowColors[i3 + 2] = cRainbow.b;

      const size = isLand ? (2.2 + Math.random() * 1.6) : (1.2 + Math.random() * 0.8);
      customSizes[pIdx] = size;
      phases[pIdx] = Math.random() * Math.PI * 2;

      pIdx++;
    }

    // 2. Polar Satellite Monitoring Orbit Ring (Sentinel-2 tracking)
    const ORBIT_A_RADIUS = 36.0;
    for (let i = 0; i < SATELLITE_ORBIT_A; i++) {
      const angle = (i / SATELLITE_ORBIT_A) * Math.PI * 2;
      const spread = randomGaussian() * 0.65;
      const r = ORBIT_A_RADIUS + spread;

      // Tilted orbital plane (~65 degrees inclination)
      const ox = r * Math.cos(angle);
      const oy = r * Math.sin(angle) * Math.cos(1.1) + spread * 0.5;
      const oz = r * Math.sin(angle) * Math.sin(1.1);

      const i3 = pIdx * 3;
      positions[i3] = ox;
      positions[i3 + 1] = oy;
      positions[i3 + 2] = oz;

      basePositions[i3] = ox;
      basePositions[i3 + 1] = oy;
      basePositions[i3 + 2] = oz;

      const cRainbow = new THREE.Color().setHSL(0.55, 1.0, 0.65);
      rainbowColors[i3] = cRainbow.r;
      rainbowColors[i3 + 1] = cRainbow.g;
      rainbowColors[i3 + 2] = cRainbow.b;

      customSizes[pIdx] = 1.4 + Math.random() * 1.5;
      phases[pIdx] = Math.random() * Math.PI * 2;
      pIdx++;
    }

    // 3. Equatorial Carbon Flux Ring (Trade & Offsetting Flow)
    const ORBIT_B_RADIUS = 34.0;
    for (let i = 0; i < SATELLITE_ORBIT_B; i++) {
      const angle = (i / SATELLITE_ORBIT_B) * Math.PI * 2;
      const spread = randomGaussian() * 0.5;
      const r = ORBIT_B_RADIUS + spread;

      // Equatorial tilt (~ -25 degrees)
      const ox = r * Math.cos(angle);
      const oy = r * Math.sin(angle) * Math.sin(0.4) + spread * 0.4;
      const oz = r * Math.sin(angle) * Math.cos(0.4);

      const i3 = pIdx * 3;
      positions[i3] = ox;
      positions[i3 + 1] = oy;
      positions[i3 + 2] = oz;

      basePositions[i3] = ox;
      basePositions[i3 + 1] = oy;
      basePositions[i3 + 2] = oz;

      const cRainbow = new THREE.Color().setHSL(0.35, 1.0, 0.62);
      rainbowColors[i3] = cRainbow.r;
      rainbowColors[i3 + 1] = cRainbow.g;
      rainbowColors[i3 + 2] = cRainbow.b;

      customSizes[pIdx] = 1.3 + Math.random() * 1.4;
      phases[pIdx] = Math.random() * Math.PI * 2;
      pIdx++;
    }

    // 4. Carbon Arcs (Energy transfer streams)
    for (let i = 0; i < CARBON_STREAMS; i++) {
      const t = i / CARBON_STREAMS;
      const arcIdx = Math.floor(t * 8);
      const arcProgress = (t * 8) % 1.0;

      const phi1 = 0.4 + (arcIdx * 0.35) % 2.2;
      const theta1 = (arcIdx * 1.5) % (Math.PI * 2);
      const phi2 = phi1 + 0.8;
      const theta2 = theta1 + 1.2;

      const p1 = new THREE.Vector3(
        GLOBE_RADIUS * Math.sin(phi1) * Math.cos(theta1),
        GLOBE_RADIUS * Math.cos(phi1),
        GLOBE_RADIUS * Math.sin(phi1) * Math.sin(theta1)
      );

      const p2 = new THREE.Vector3(
        GLOBE_RADIUS * Math.sin(phi2) * Math.cos(theta2),
        GLOBE_RADIUS * Math.cos(phi2),
        GLOBE_RADIUS * Math.sin(phi2) * Math.sin(theta2)
      );

      // Spherical quadratic arc height
      const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(GLOBE_RADIUS + 7.5);

      const u = arcProgress;
      const pt = new THREE.Vector3();
      pt.x = (1 - u) * (1 - u) * p1.x + 2 * (1 - u) * u * mid.x + u * u * p2.x + randomGaussian() * 0.35;
      pt.y = (1 - u) * (1 - u) * p1.y + 2 * (1 - u) * u * mid.y + u * u * p2.y + randomGaussian() * 0.35;
      pt.z = (1 - u) * (1 - u) * p1.z + 2 * (1 - u) * u * mid.z + u * u * p2.z + randomGaussian() * 0.35;

      const i3 = pIdx * 3;
      positions[i3] = pt.x;
      positions[i3 + 1] = pt.y;
      positions[i3 + 2] = pt.z;

      basePositions[i3] = pt.x;
      basePositions[i3 + 1] = pt.y;
      basePositions[i3 + 2] = pt.z;

      const cRainbow = new THREE.Color().setHSL(0.12, 1.0, 0.6);
      rainbowColors[i3] = cRainbow.r;
      rainbowColors[i3 + 1] = cRainbow.g;
      rainbowColors[i3 + 2] = cRainbow.b;

      customSizes[pIdx] = 1.5 + Math.random() * 1.6;
      phases[pIdx] = Math.random() * Math.PI * 2;
      pIdx++;
    }

    // 5. Ambient Atmospheric Carbon Halo
    for (let a = 0; a < AMBIENT_PARTICLES; a++) {
      const radius = 30 + Math.random() * 45;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      const i3 = pIdx * 3;
      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      basePositions[i3] = x;
      basePositions[i3 + 1] = y;
      basePositions[i3 + 2] = z;

      const cRainbow = new THREE.Color().setHSL(Math.random(), 0.95, 0.62);
      rainbowColors[i3] = cRainbow.r;
      rainbowColors[i3 + 1] = cRainbow.g;
      rainbowColors[i3 + 2] = cRainbow.b;

      customSizes[pIdx] = 0.8 + Math.random() * 2.0;
      phases[pIdx] = Math.random() * Math.PI * 2;
      pIdx++;
    }

    // --- Create Buffer Geometry ---
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('rainbowColor', new THREE.BufferAttribute(rainbowColors, 3));
    geometry.setAttribute('customSize', new THREE.BufferAttribute(customSizes, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

    // --- GPU WebGL Shaders: Uniform Color Morphing + Shockwave Ripple ---
    const initialColor = PALETTES[0].clone();

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uColorA: { value: initialColor.clone() },
        uColorB: { value: initialColor.clone() },
        uTransition: { value: 0.0 },
        uUseRainbow: { value: 0.0 },
        uWaveRadius: { value: -100.0 },
        uWaveWidth: { value: 45.0 },
        uWaveCenter: { value: new THREE.Vector3(0, 0, 0) },
      },
      vertexColors: false,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending, // Luminous particles on pure black background
      vertexShader: `
        attribute vec3 rainbowColor;
        attribute float customSize;
        attribute float aPhase;
        
        varying vec3 vColor;
        varying float vAlpha;
        
        uniform float uTime;
        uniform float uPixelRatio;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform float uTransition;
        uniform float uUseRainbow;
        uniform float uWaveRadius;
        uniform float uWaveWidth;
        uniform vec3 uWaveCenter;

        void main() {
          float distToWave = length(position - uWaveCenter);

          float waveRing = 0.0;
          if (uWaveRadius >= 0.0) {
            float diff = abs(distToWave - uWaveRadius);
            if (diff < uWaveWidth) {
              waveRing = 1.0 - (diff / uWaveWidth);
            }
          }

          vec3 uniformCurrent = mix(uColorA, uColorB, uTransition);
          vec3 finalColor = mix(uniformCurrent, rainbowColor, uUseRainbow * uTransition);
          finalColor += vec3(waveRing * 0.75);

          vColor = finalColor;

          float pulse = 0.85 + 0.15 * sin(uTime * 2.2 + aPhase * 6.28318);
          vAlpha = pulse;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float sizeBoost = 1.0 + waveRing * 1.8;
          gl_PointSize = (customSize * pulse * sizeBoost) * uPixelRatio * (290.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          float core = 1.0 - smoothstep(0.0, 0.22, dist);
          float aura = 1.0 - smoothstep(0.18, 0.50, dist);
          float alpha = (core * 0.55 + aura * 0.45) * vAlpha;

          vec3 finalColor = mix(vColor, vec3(1.0, 1.0, 1.0), core * 0.45);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
    });

    const globePoints = new THREE.Points(geometry, material);

    const globeGroup = new THREE.Group();
    globeGroup.add(globePoints);

    // Initial cinematic tilt
    globeGroup.rotation.z = -0.22;
    globeGroup.rotation.x = 0.35;
    globeGroup.position.set(0, 0, 0);

    scene.add(globeGroup);

    // --- Interactive Mechanics: Click Color Transformation & Shockwave ---
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2(-9999, -9999);
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const planeIntersect = new THREE.Vector3();
    const localHit = new THREE.Vector3(0, 0, 0);
    let isPointerOver = false;

    let currentPaletteIdx = 0;
    let targetPaletteIdx = 0;
    let transitionProgress = 1.0;

    let waveRadius = -100.0;
    let waveActive = false;
    const WAVE_SPEED = 260.0;
    const WAVE_MAX_RADIUS = 280.0;

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      pointer.x = x;
      pointer.y = y;
      isPointerOver = true;
    };

    const onPointerLeave = () => {
      isPointerOver = false;
      pointer.set(-9999, -9999);
    };

    const onPointerDown = () => {
      raycaster.setFromCamera(pointer, camera);
      if (raycaster.ray.intersectPlane(plane, planeIntersect)) {
        localHit.copy(planeIntersect);
        globeGroup.worldToLocal(localHit);
      } else {
        localHit.set(0, 0, 0);
      }

      material.uniforms.uWaveCenter.value.copy(localHit);
      waveRadius = 0.0;
      waveActive = true;

      if (transitionProgress < 1.0) {
        const midColor = new THREE.Color().lerpColors(
          PALETTES[currentPaletteIdx],
          PALETTES[targetPaletteIdx],
          transitionProgress
        );
        material.uniforms.uColorA.value.copy(midColor);
      } else {
        material.uniforms.uColorA.value.copy(PALETTES[targetPaletteIdx]);
      }

      currentPaletteIdx = targetPaletteIdx;
      targetPaletteIdx = (targetPaletteIdx + 1) % PALETTES.length;

      material.uniforms.uColorB.value.copy(PALETTES[targetPaletteIdx]);
      material.uniforms.uUseRainbow.value = (targetPaletteIdx === 5) ? 1.0 : 0.0;
      transitionProgress = 0.0;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('pointerdown', onPointerDown);

    const onResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
    };

    window.addEventListener('resize', onResize);

    // --- Animation Loop ---
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      material.uniforms.uTime.value = elapsedTime;

      // Axial planetary spin
      globePoints.rotation.y += delta * 0.28;

      if (transitionProgress < 1.0) {
        transitionProgress = Math.min(1.0, transitionProgress + delta * 2.2);
        material.uniforms.uTransition.value = transitionProgress;
      }

      if (waveActive) {
        waveRadius += delta * WAVE_SPEED;
        material.uniforms.uWaveRadius.value = waveRadius;
        if (waveRadius > WAVE_MAX_RADIUS) {
          waveActive = false;
          material.uniforms.uWaveRadius.value = -100.0;
        }
      }

      if (isPointerOver) {
        const targetRotY = pointer.x * 0.35;
        const targetRotX = 0.35 - pointer.y * 0.22;
        globeGroup.rotation.y += (targetRotY - globeGroup.rotation.y) * 0.05;
        globeGroup.rotation.x += (targetRotX - globeGroup.rotation.x) * 0.05;
      } else {
        globeGroup.rotation.y += (0 - globeGroup.rotation.y) * 0.03;
        globeGroup.rotation.x += (0.35 - globeGroup.rotation.x) * 0.03;
      }

      // Gentle floating levitation
      globeGroup.position.y = Math.sin(elapsedTime * 0.8) * 1.8;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('resize', onResize);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="carbon-globe-canvas-container"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        cursor: 'pointer',
        zIndex: 1,
        opacity: scrolled ? 0 : 1,
        visibility: scrolled ? 'hidden' : 'visible',
        transition: 'opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1), visibility 2.5s ease',
        pointerEvents: scrolled ? 'none' : 'auto',
      }}
    />
  );
}
