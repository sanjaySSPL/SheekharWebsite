'use client'
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';

const ports = [
    { lat: 25.276987, long: 55.296249, name: "Port of Dubai", outflows: 5 },
    { lat: 31.235711, long: 121.475368, name: "Port of Shanghai", outflows: 8 },
    { lat: 1.289670, long: 103.850070, name: "Port of Singapore", outflows: 10 },
    { lat: 51.507351, long: -0.127758, name: "Port of London", outflows: 3 },
    { lat: 34.052235, long: -118.243683, name: "Port of Los Angeles", outflows: 7 },
    { lat: 22.396428, long: 114.109497, name: "Port of Hong Kong", outflows: 9 },
    { lat: 35.689487, long: 139.691706, name: "Port of Tokyo", outflows: 6 },
    { lat: -23.550520, long: -46.633308, name: "Port of Santos", outflows: 4 },
    { lat: 51.954422, long: 4.029039, name: "Port of Rotterdam", outflows: 11 },
    { lat: 29.760427, long: -95.369803, name: "Port of Houston", outflows: 2 },
    { lat: -33.924870, long: 18.424055, name: "Port of Cape Town", outflows: 3 },
    { lat: 40.712776, long: -74.005974, name: "Port of New York", outflows: 5 },
    { lat: 59.329323, long: 18.068581, name: "Port of Stockholm", outflows: 2 },
    { lat: 49.282729, long: -123.120738, name: "Port of Vancouver", outflows: 4 },
    { lat: -34.603684, long: -58.381559, name: "Port of Buenos Aires", outflows: 3 },
    { lat: 37.774929, long: -122.419416, name: "Port of San Francisco", outflows: 6 },
    { lat: -6.208763, long: 106.845599, name: "Port of Jakarta", outflows: 7 },
    { lat: 13.756331, long: 100.501765, name: "Port of Bangkok", outflows: 5 },
    { lat: 19.076090, long: 72.877426, name: "Port of Mumbai", outflows: 8 },
    { lat: -33.033898, long: 151.621094, name: "Port of Newcastle", outflows: 1 },
    { lat: 35.467560, long: -97.516428, name: "Port of Oklahoma City", outflows: 0 },
    { lat: 39.904202, long: 116.407396, name: "Port of Beijing", outflows: 2 },
    { lat: 55.755826, long: 37.617300, name: "Port of Moscow", outflows: 3 },
    { lat: 37.566535, long: 126.977969, name: "Port of Seoul", outflows: 4 },
    { lat: 48.856614, long: 2.352222, name: "Port of Paris", outflows: 2 },
    { lat: 41.902783, long: 12.496366, name: "Port of Rome", outflows: 1 },
    { lat: 52.520007, long: 13.404954, name: "Port of Berlin", outflows: 2 },
    { lat: 28.613939, long: 77.209021, name: "Port of New Delhi", outflows: 3 },
];

function latLongToCartesian(lat, long, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (long + 180) * (Math.PI / 180);

    const x = -((radius) * Math.sin(phi) * Math.cos(theta));
    const y = (radius) * Math.cos(phi);
    const z = (radius) * Math.sin(phi) * Math.sin(theta);

    return { x, y, z };
}

function Globee() {
    const globeRef = useRef();
    const [selectedPort, setSelectedPort] = useState(null);

    useEffect(() => {
        // Earth texture loading starts here
        const loader = new TextureLoader();
        loader.load('/earthnight.jpg', (texture) => {
            if (globeRef.current) {
                globeRef.current.material.map = texture;
                globeRef.current.material.needsUpdate = true;
            }
        }, undefined, (error) => {
            console.error('Error loading texture:', error);
        });

        // Spikes generation starts here
        const spikeGeometry = new THREE.CylinderGeometry(0.005, 0.005, 1, 32); // Thinner spikes

        ports.forEach((port) => {
            const { lat, long, name, outflows } = port;
            const spikeHeight = 0.5 + outflows * 0.1; // Adjust height based on outflows

            // Determine color based on outflows
            const spikeColor = outflows >= 5 ? '#CA843D' : '#2C94DE';
            const spikeMaterial = new THREE.MeshBasicMaterial({ color: spikeColor });

            const spike = new THREE.Mesh(spikeGeometry, spikeMaterial);
            spike.scale.y = spikeHeight; // Adjust height of spike

            const { x, y, z } = latLongToCartesian(lat, long, 1);

            spike.position.set(x, y, z);

            // Normalize the position vector
            spike.position.normalize();
            // Multiply by the globe radius plus some extra height
            spike.position.multiplyScalar(1.1);

            // Adjust rotation to point outward
            spike.quaternion.setFromUnitVectors(
                new THREE.Vector3(0, 1, 0),
                new THREE.Vector3(x, y, z).normalize()
            );

            // Add click event
            spike.userData = { name, outflows };
            spike.onClick = () => setSelectedPort({ name, outflows });

            // Add the spike to the globe
            globeRef.current.add(spike);
        });
    }, []);

    // Animation and syncing of rotation starts here
    useFrame(() => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.001; // Adjust rotation speed if needed
        }
    });

    return (
        <>
            {/* Earth mesh */}
            <mesh ref={globeRef} scale={[2.1, 2.1, 2.1]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial />
            </mesh>
            {selectedPort && (
                <div style={{ position: 'absolute', top: '10px', left: '10px', color: 'white' }}>
                    {selectedPort.name}: {selectedPort.outflows} outflows
                </div>
            )}
        </>
    );
}

function GlobeWithSpike() {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <Canvas style={{ height: '100%', width: '100%' }}>
                {/* Scene lighting */}
                <ambientLight intensity={1} />
                <directionalLight position={[5, 5, 5]} intensity={0.1} />
                {/* Earth and spikes */}
                <Globee />
                {/* Controls and stars */}
                <OrbitControls />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade /> Adjust stars properties
            </Canvas>
        </div>
    );
}

export default GlobeWithSpike;