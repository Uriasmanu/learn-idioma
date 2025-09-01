'use client';

import { useState, useEffect } from 'react';

interface BotaoProp {
    onClick: () => void;
    className?: string; // Adicione esta prop
}

export default function BotaoTraducao({ onClick, className = '' }: BotaoProp) {
    const [isMobile, setIsMobile] = useState(false);
    const [isActive, setIsActive] = useState(false);

    // Detecta se é mobile
    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const handleClick = () => {
        if (isMobile) {
            setIsActive(!isActive);
        }
        
        // Chama a função passada como prop
        if (onClick) {
            onClick();
        }
    };

    return (
        <button
            className={`relative bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group ${className}`}
            onMouseEnter={() => !isMobile && setIsActive(true)}
            onMouseLeave={() => !isMobile && setIsActive(false)}
            onClick={handleClick}
        >
            <span className="mr-10">Tradução</span>
            <div
                className={`absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95 ${
                    isActive ? 'w-[calc(100%-0.6em)]' : ''
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className={`w-[1.1em] transition-transform duration-300 text-[#7b52b9] ${
                        isActive ? 'translate-x-[0.1em]' : ''
                    }`}
                >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                        fill="currentColor"
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    ></path>
                </svg>
            </div>
        </button>
    );
}