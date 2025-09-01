'use client';

import { Languages } from 'lucide-react';
import Botao from '../BotaoTraducao';
import BotaoAcerto from '../BotaoAcerto';
import BotaoErro from '../BotaoErro';

interface CartaoProps {
  id: number;
  showInfo: boolean;
  title: string;
  traducao: string;
  handleButtonClick: () => void;
  onScoreChange: (delta: number) => void;
}

export default function Cartao({ id, showInfo, title, traducao, handleButtonClick, onScoreChange }: CartaoProps) {
  return (
    <div className="relative flex flex-col h-[28rem] w-[19rem] border-2 border-black bg-white rounded-2xl overflow-hidden">
      
      {/* Botões de Acerto e Erro */}
      <div className="flex justify-between p-2">
        <BotaoAcerto onClick={() => {
          console.log(`Card ${id} +1`);
          onScoreChange(+1);
        }} />
        <BotaoErro onClick={() => {
          console.log(`Card ${id} -1`);
          onScoreChange(-1);
        }} />
      </div>

      {/* Conteúdo principal */}
      <div className={`flex flex-col h-full p-6 transition-opacity duration-300 ${showInfo ? 'opacity-0' : 'opacity-100'}`}>
        <div className="flex flex-col items-center justify-center h-full">
          <Languages color="black" size={48} className="mb-4" />
          <h2 className="text-xl font-medium sm:text-2xl text-[#000] text-center">
            {title}
          </h2>
        </div>
      </div>

      {/* Tradução (sobreposição) */}
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

      {/* Botão central */}
      <div className="flex justify-center p-6 pt-0">
        <Botao onClick={handleButtonClick} className="w-[90%]" />
      </div>
    </div>
  );
}
