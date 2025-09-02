'use client';

import { useEffect, useState } from "react";

interface Card {
    id: number;
    index: number;
    title: string;
    traducao: string;
}

export default function Dicionario() {
    const [cards, setCards] = useState<Card[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/data/textos.json');
                if (!response.ok) throw new Error('Falha ao carregar dados');

                const data = await response.json();
                setCards(data.cards || []);
            } catch (err) {
                setError('Erro ao carregar a lista');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-center">Lista de Palavras</h2>
            {cards.map(card => (
                <div key={card.id} className="border p-2 rounded">
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="text-gray-600">{card.traducao}</p>
                </div>
            ))}
        </div>
    );
}
