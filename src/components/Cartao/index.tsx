'use client';

import { Languages } from 'lucide-react';
import Botao from '../BotaoTraducao';
import BotaoAcerto from '../BotaoAcerto';
import BotaoErro from '../BotaoErro';
import { useState } from 'react';
import Favoritar from '../Favoritar';

interface CartaoProps {
  id: number;
  showInfo: boolean;
  title: string;
  traducao: string;
  favoritar: boolean; 
  handleButtonClick: () => void;
  onScoreChange: (delta: number) => void;
}

export default function Cartao({ showInfo, title, traducao, favoritar, handleButtonClick, onScoreChange }: CartaoProps) {
  const [bgColor, setBgColor] = useState('bg-white');

  const handleAcerto = () => {
    setBgColor('bg-emerald-700');
    setTimeout(() => {
      onScoreChange(+1);
    }, 1000);
  };

  const handleErro = () => {
    setBgColor('bg-red-500');
    setTimeout(() => {
      onScoreChange(-1);
    }, 1000);
  };

  return (
    <div className={`relative flex flex-col h-[28rem] w-[19rem] border-2 border-black ${bgColor} rounded-2xl overflow-hidden`}>
      <Favoritar favoritar={favoritar}/>
      <div className="flex justify-between p-2">
        <BotaoAcerto onClick={handleAcerto} />
        <BotaoErro onClick={handleErro} />
      </div>

      <div className={`flex flex-col h-full p-6 transition-opacity duration-300 ${showInfo ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col items-center justify-center h-full">
          <Languages color="black" size={48} className="mb-4" />
          <h2 className="text-xl font-medium sm:text-2xl text-[#000] text-center">
            {title}
          </h2>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 right-0 bottom-0 flex flex-col p-6 transition-opacity duration-300
        ${showInfo ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-1xl sm:text-1xl md:text-2xl font-medium text-[#000] text-center leading-tight">
            {traducao}
          </p>
        </div>
      </div>

      <div className="flex justify-center p-6 pt-0">
        <Botao onClick={handleButtonClick} className="w-[90%]" />
      </div>
    </div>
  );
}
