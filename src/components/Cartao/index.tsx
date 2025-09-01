'use client';

import { Languages } from 'lucide-react'
import { useState, useEffect } from 'react';

interface CartaoProp {
    showInfo: boolean;
}

export default function Cartao({ showInfo }: CartaoProp) {
    const [infoRevealed, setInfoRevealed] = useState(false);

    useEffect(() => {
        if (showInfo) {
            const timer = setTimeout(() => {
                setInfoRevealed(true);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            setInfoRevealed(false);
        }
    }, [showInfo]);

    return (
        <div className="relative flex h-[20rem] w-60 transform items-end border-2 border-black bg-white transition-transform rounded-2xl">
            <div
                className={`p-4 !pt-0 transition-opacity sm:p-6 lg:p-8 ${infoRevealed ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <Languages color='black'/>

                <h2 className="mt-4 text-xl font-medium sm:text-2xl text-[#000]">Sushma Godawari</h2>
            </div>

            <div
                className={`absolute p-4 transition-opacity sm:p-6 lg:p-8 ${infoRevealed ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <h3 className="mt-4 text-xl font-medium sm:text-2xl text-[#000]">Sushma Godawari</h3>

                <p className="mt-4 text-sm sm:text-base text-[#000]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                    praesentium voluptatem omnis atque culpa repellendus.
                </p>

                <p className="mt-8 font-bold text-[#000]">Read more</p>
            </div>

        </div>
    );
}