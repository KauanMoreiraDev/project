"use client";

import { useState } from 'react';

const images = [
    '/images/input/recriação.png',
    '/images/input/recriação(1).png',
    '/images/input/recriação(2).png',
];

const Carousel_recriação = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative mx-auto overflow-hidden w-1000 h-400">
            <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt={`Slide ${index}`} className="w-full h-full object-cover flex-shrink-0" style={{ maxHeight: '400px' }} />
                ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                Prev
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
                Next
            </button>
        </div>
    );
};

export default Carousel_recriação;