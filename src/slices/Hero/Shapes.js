'use client';

import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Float, Environment } from "@react-three/drei";

import { Suspense, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export function Shapes() {
    return (
        <div className='row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2'>
            <Canvas>

            </Canvas>
        </div>
    )
}