'use client'

import Image from "next/image";
import classes from "./image-slideshow.module.css"
import { useEffect, useState } from "react";

import standardBlendImg from '@/public/StandardBlend.png';
import classicBlendImg from '@/public/ClassicBlend.png';
import darkBlendImg from '@/public/DarkBlend.png';
import mugLightBlueImg from '@/public/WhiteCoffeeMugLightBlue.png';
import mugLightBrownImg from '@/public/WhiteCoffeeMugLightBrown.png';
import Link from "next/link";


const images = [
    { image: standardBlendImg, slug: 'standard-blend', alt: 'Standard Blend'},
    { image: mugLightBlueImg, slug: 'lakeshore-coffee-mug-lightblue', alt: 'Lakeshore Coffee Mug Light Blue'},
    { image: classicBlendImg, slug: 'classic-blend', alt: 'classic Blend'},
    { image: mugLightBrownImg, slug: 'lakeshore-coffee-mug-lightbrown', alt: 'Lakeshore Coffee Mug Light Brown'},
    { image: darkBlendImg, slug: 'dark-blend', alt: 'Dark Blend'},
];

export default function ImageSlideshow() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex < images.length - 1 ? prevIndex + 1 : 0
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.slideshow}>
            {images.map((image, index) => (
                <Link key={index} href={`/shop/${image.slug}`}>
                    <Image 
                        src={image.image}
                        href={image.href}
                        className={index === currentImageIndex ? classes.active : ''} 
                        alt={image.alt}
                    />
                </Link>
            ))}
        </div>
    );
}