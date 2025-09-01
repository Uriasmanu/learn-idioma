'use client';

import { useState, useEffect } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Cartao from '@/components/Cartao';

interface CardData {
  id: number;
  title: string;
  traducao: string;
  icon?: string;
}

interface CardsData {
  cards: CardData[];
}

export default function Home() {
  const [revealedCardId, setRevealedCardId] = useState<number | null>(null);
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carrega os dados do JSON
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/textos.json');
        
        if (!response.ok) {
          throw new Error('Falha ao carregar dados');
        }
        
        const data: CardsData = await response.json();
        setCards(data.cards || []);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6 items-center">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {cards.map((card) => (
            <CarouselItem key={card.id}>
              <div className="p-0.5">
                <Cartao 
                  showInfo={revealedCardId === card.id}
                  title={card.title}
                  traducao={card.traducao}
                  handleButtonClick={() => handleButtonClick(card.id)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}