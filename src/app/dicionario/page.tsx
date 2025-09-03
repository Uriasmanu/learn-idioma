'use client';

import { useEffect, useState } from "react"; import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Book } from "lucide-react";

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
                const sortedCards = (data.cards || []).sort((a: Card, b: Card) =>
                    a.title.localeCompare(b.title, 'pt', { sensitivity: 'base' })
                );
                setCards(sortedCards);
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
            <Dialog>
                <form>
                    <DialogTrigger asChild className="w-full">
                        <Button
                            variant="outline"
                            className="flex items-center gap-2 border-amber-700 text-amber-900 hover:bg-amber-100 transition-colors rounded-lg px-4 py-2 font-medium"
                        >
                            <Book className="w-5 h-5" />
                            Adicionar Palavra
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="!w-[350px] !max-w-[350px]">
                        <DialogHeader>
                            <DialogTitle>Adicionar Palavra</DialogTitle>
                            <DialogDescription>
                                Preencha o título e a descrição da palavra. Clique em salvar quando terminar.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-3">
                                <Label htmlFor="titulo">Título</Label>
                                <Input id="titulo" name="titulo" defaultValue="" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="descricao">Descrição</Label>
                                <Input id="descricao" name="descricao" defaultValue="" />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancelar</Button>
                            </DialogClose>
                            <Button type="submit">Salvar Palavra</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
            {cards.map(card => (
                <div key={card.id} className="border p-2 rounded">
                    <h3 className="font-semibold">{card.title}</h3>
                    <p className="text-gray-600">{card.traducao}</p>
                </div>
            ))}
        </div>
    );
}
