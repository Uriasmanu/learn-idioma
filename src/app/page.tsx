'use client';

import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Cartao from '@/components/Cartao';
import { useCardScores } from '@/hooks/useCardScores/useCardScores';
import BotaoGeral from '@/components/BotaoGeral/BotaoGeral';
import { useRouter } from 'next/navigation';

interface CardData {
  id: number;
  title: string;
  traducao: string;
}

interface CardsData {
  cards: CardData[];
}

export default function Home() {
  const [revealedCardId, setRevealedCardId] = useState<number | null>(null);
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { scores, updateScore, resetScores } = useCardScores();
  const router = useRouter();

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('/data/textos.json');
      if (!response.ok) throw new Error('Falha ao carregar dados');
      const data: CardsData = await response.json();

      // Embaralha os cards
      const shuffledCards = data.cards.sort(() => Math.random() - 0.5);

      setCards(shuffledCards || []);
    } catch (err) {
      setError('Erro ao carregar os cards');
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);


  const handleButtonClick = (cardId: number) => {
    setRevealedCardId(prev => prev === cardId ? null : cardId);
  };

  const handleReset = () => {
    resetScores();
    setRevealedCardId(null);
  };

  const handleResultado = () => {
    router.push('/relatorio'); 
  };

  if (loading) return <div className="flex items-center justify-center h-screen text-lg">Carregando...</div>;
  if (error) return <div className="flex items-center justify-center h-screen text-lg text-red-500">{error}</div>;

  return (
    <div className="flex flex-col gap-6 p-6 items-center">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {cards
            .filter(card => !scores[card.id] || scores[card.id] === 0)
            .map((card) => (
              <CarouselItem key={card.id}>
                <div className="p-0.5">
                  <Cartao
                    id={card.id}
                    showInfo={revealedCardId === card.id}
                    title={card.title}
                    traducao={card.traducao}
                    handleButtonClick={() => handleButtonClick(card.id)}
                    onScoreChange={(delta) => updateScore(card.id, delta)}
                  />
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
      <div className='flex gap-4'>
        <BotaoGeral textoBotao='Recomeçar' cor='yellow' onClick={handleReset}/>
        <BotaoGeral textoBotao='Resultado' cor='blue' onClick={handleResultado}/>
      </div>
    </div>
  );
}
