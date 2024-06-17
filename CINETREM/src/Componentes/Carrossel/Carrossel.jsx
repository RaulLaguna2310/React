import  { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

const Carrossel = () => {
    const [images] = useState([
        'not1.png',
        'not2.png',
        'not3.png'
    ]);
    const [images2] = useState([
        'not1.1.png',
        'not2.1.png',
        'not3.1.png'
    ]);
    const [hovered, setHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, images.length]);

    return (
        <div className="flex justify-center items-center mb-10 mt-4">
            <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className="max-w-lg mx-auto">
                <img src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} className="w-full rounded-lg" />
                <Link to="noticias"><img src={images2[currentIndex]} alt={`Imagem ${currentIndex + 1}`} className={`absolute inset-0 w-full rounded-lg object-cover transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}/></Link>
                </div>
            </div>
        </div>
        
    );
};
export default Carrossel;