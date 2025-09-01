"use client"

import { useEffect, useState } from "react"
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

const COLORS = ["#2563eb", "#f87171"] // azul para acertos, vermelho para erros

export default function Relatorio() {
  const [chartData, setChartData] = useState([
    { name: "Acertos", value: 0 },
    { name: "Erros", value: 0 },
  ])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedScores = localStorage.getItem("cardScores")
    if (storedScores) {
      const scores = JSON.parse(storedScores) as Record<number, number>
      let acertos = 0
      let erros = 0

      Object.values(scores).forEach((score) => {
        if (score > 0) acertos += score
        else if (score < 0) erros += Math.abs(score)
      })

      setChartData([
        { name: "Acertos", value: acertos },
        { name: "Erros", value: erros },
      ])
    }
    setLoading(false)
  }, [])

  const total = chartData.reduce((acc, curr) => acc + curr.value, 0)

  return (
    <div className="w-full min-h-[300px] flex justify-center items-center flex-col gap-6">
      <h2 className="text-2xl font-bold">Relatório Final</h2>

      {total === 0 ? (
        <p className="text-lg text-gray-500">Ainda não há informações disponíveis.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
