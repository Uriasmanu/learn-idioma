'use client';

import { Languages } from 'lucide-react'
import { useState, useEffect } from 'react';
import Botao from '../Botao';

interface CartaoProps {
    showInfo: boolean;
    title: string;
    description: string;
    icon?: string;
    handleButtonClick: () => void;
}

export default function Cartao({ showInfo, title, description, icon, handleButtonClick }: CartaoProps) {
    const [infoRevealed, setInfoRevealed] = useState(false);

    useEffect(() => {
        if (showInfo) {
            const timer = setTimeout(() => {
                setInfoRevealed(true);
            }, 300);

            return () => clearTimeout(timer);
        } else {
            setInfoRevealed(false);
        }
    }, [showInfo]);

    return (
        <div className="relative flex flex-col h-[28rem] w-80 border-2 border-black bg-white rounded-2xl overflow-hidden">
//
            <div
                className={`flex flex-col flex-1 p-6 transition-opacity ${
                    infoRevealed ? 'opacity-0' : 'opacity-100'
                }`}
            >
                <div className="flex flex-col items-center flex-1 justify-center">
                    <Languages color='black' size={48} className="mb-4" />
                    <h2 className="text-xl font-medium sm:text-2xl text-[#000] text-center mb-6">
                        {title}
                    </h2>
                </div>
                
                <div className="flex justify-center mt-auto mb-6 w-full">
                    <Botao onClick={handleButtonClick} className="w-[100%]" />
                </div>
            </div>

            <div
                className={`absolute inset-0 flex flex-col p-6 transition-opacity ${
                    infoRevealed ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="flex flex-col items-center flex-1 justify-center">
                    <h3 className="text-xl font-medium sm:text-2xl text-[#000] text-center mb-4">
                        {title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#000] text-center mb-6">
                        {description}
                    </p>
                </div>
                

                <div className="flex justify-center mt-auto w-full">
                    <Botao onClick={handleButtonClick} className="w-[100%]" />
                </div>
            </div>
        </div>
    );
}