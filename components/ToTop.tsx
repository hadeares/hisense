'use client'

import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 720);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Rolagem suave
        });
    };

    return (
        <div
            className={`fixed bottom-5 flex items-center justify-center h-[60px] w-[60px] bg-hisense rounded-full shadow-xl shadow-[#00000034] z-[60] lg:hidden cursor-pointer duration-300 ${showButton ? 'right-5 opacity-100' : 'right-[-100px] opacity-0'}`}
            onClick={scrollToTop}
        >
            <div className="text-white text-3xl">
                <FaArrowUp />
            </div>
        </div>
    );
}

export default ToTop;
