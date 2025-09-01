'use client';

import { useState } from 'react';
import Botao from "../components/Botao";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Cartao from '@/components/Cartao';

const cardData = [
  {
    id: 1,
    title: "Sushma Godawari",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, praesentium voluptatem omnis atque culpa repellendus.",
    icon: "languages"
  },
  {
    id: 2,
    title: "João Silva",
    description: "Desenvolvedor front-end com experiência em React e Next.js.",
    icon: "code"
  },
  {
    id: 3,
    title: "Maria Santos",
    description: "Designer UX/UI especializada em interfaces modernas e intuitivas.",
    icon: "design"
  },
  {
    id: 4,
    title: "Pedro Costa",
    description: "Especialista em backend com foco em performance e segurança.",
    icon: "server"
  }
];

export default function Home() {
  const [showCardInfo, setShowCardInfo] = useState(false);

  const handleButtonClick = () => {
    setShowCardInfo(prev => !prev);
  };

  return (
    <div className="flex flex-col gap-6 p-6 items-center w-full">
      <div className="w-full max-w-6xl mx-auto"> {/* Limita a largura máxima */}
        <Carousel className="w-full">
          <CarouselContent>
            {cardData.map((card) => (
              <CarouselItem 
                key={card.id}
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4" // Responsivo
              >
                <div className="p-2"> 
                  <Cartao 
                    showInfo={showCardInfo}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    handleButtonClick={handleButtonClick}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}