import { useState, useEffect } from "react";

export function useCardScores() {
  const [scores, setScores] = useState<{ [key: number]: number }>({});

  // Carrega os valores salvos no localStorage
  useEffect(() => {
    const storedScores = localStorage.getItem("cardScores");
    if (storedScores) setScores(JSON.parse(storedScores));
  }, []);

  // Salva sempre que scores mudarem
  useEffect(() => {
    localStorage.setItem("cardScores", JSON.stringify(scores));
  }, [scores]);

  const updateScore = (cardId: number, delta: number) => {
    setScores(prev => ({ ...prev, [cardId]: (prev[cardId] || 0) + delta }));
  };

  const resetScores = () => {
    setScores({});
    localStorage.removeItem("cardScores");
  };

  return { scores, updateScore, resetScores };
}

