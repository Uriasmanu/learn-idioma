'use client';

import { useState } from 'react';
import Botao from "../components/Botao";
import Card from "../components/Cartao";

export default function Home() {
  const [showCardInfo, setShowCardInfo] = useState(false);

  const handleButtonClick = () => {
    setShowCardInfo(prev => !prev);
  };

  return (
    <div className="flex flex-col gap-6 p-6 items-center">
      <Card showInfo={showCardInfo} />
      <Botao onClick={handleButtonClick} />
    </div>
  );
}