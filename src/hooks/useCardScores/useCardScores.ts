import { useState, useEffect } from "react";

export function useCardScores() {
  const [scores, setScores] = useState<{ [key: number]: number }>({});

  // Carrega os valores salvos no localStorage
  useEffect(() => {
    const storedScores = localStorage.getItem("cardScores");
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    }
  }, []);

  // Salva os valores no localStorage sempre que mudarem
  useEffect(() => {
    localStorage.setItem("cardScores", JSON.stringify(scores));
    console.log("Scores atualizados:", scores); // <-- AQUI!
  }, [scores]);

  const updateScore = (cardId: number, delta: number) => {
    setScores(prev => {
      const updated = {
        ...prev,
        [cardId]: (prev[cardId] || 0) + delta,
      };
      console.log(`Card ${cardId} recebeu delta ${delta}. Novo valor:`, updated[cardId]); // <-- E AQUI!
      return updated;
    });
  };

  return { scores, updateScore };
}
